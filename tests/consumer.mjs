// Verify the shipped package, not a workspace link or source alias.
import { mkdtempSync, readFileSync, writeFileSync, mkdirSync, realpathSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';
import assert from 'node:assert/strict';

const repo = fileURLToPath(new URL('../', import.meta.url));
const consumer = mkdtempSync(join(tmpdir(), 'cspr-design-consumer-'));
const env = { ...process.env, NODE_PATH: '', NODE_OPTIONS: '' };
function run(command, args, cwd = repo) {
  const result = spawnSync(command, args, { cwd, env, encoding: 'utf8' });
  process.stdout.write(result.stdout || '');
  process.stderr.write(result.stderr || '');
  assert.equal(result.status, 0, `${command} ${args.join(' ')} failed; fixture: ${consumer}`);
  return result.stdout;
}
run('npm', ['run', 'build:dist']);
const output = run('npm', ['pack', '--json', '--pack-destination', consumer]);
const packed = JSON.parse(output.slice(output.lastIndexOf('\n[') + 1));
assert(!packed[0].files.some(({ path }) => path.startsWith('tests/')));
writeFileSync(join(consumer, 'package.json'), JSON.stringify({
  name: 'cspr-design-react18-consumer', version: '1.0.0', private: true, type: 'module',
  dependencies: {
    '@make-software/cspr-design': `file:${join(consumer, packed[0].filename)}`,
    react: '18.3.1', 'react-dom': '18.3.1', 'styled-components': '5.3.11',
    // SC5's unbounded Babel plugin range otherwise selects newer React Native peers.
    // This matches the library build fixture; it is NOT a library-wide fix.
    'babel-plugin-styled-components': '2.1.4', vite: '7.0.6',
  },
}, null, 2));
run('npm', ['install', '--legacy-peer-deps=false', '--strict-peer-deps'], consumer);
const installed = join(consumer, 'node_modules/@make-software/cspr-design');
assert.equal(realpathSync(installed), installed);
const lock = JSON.parse(readFileSync(join(consumer, 'package-lock.json'), 'utf8'));
assert.equal(lock.packages['node_modules/react'].version, '18.3.1');
assert.equal(lock.packages['node_modules/react-dom'].version, '18.3.1');
assert(!Object.keys(lock.packages).some((path) => /node_modules\/reakit(?:-|\/|$)/.test(path)));
mkdirSync(join(consumer, 'tests'));
writeFileSync(join(consumer, 'index.html'), '<!doctype html><html><head><title>Packed tooltip</title></head><body><div id="root"></div><script type="module" src="/main.tsx"></script></body></html>');
writeFileSync(join(consumer, 'main.tsx'), readFileSync(join(repo, 'tests/browser/main.tsx'), 'utf8').replace('../../dist/cspr-design.es.js', '@make-software/cspr-design'));
writeFileSync(join(consumer, 'tests/tooltip.spec.ts'), readFileSync(join(repo, 'tests/browser/tooltip.spec.ts'), 'utf8').replaceAll('/tests/browser/', '/'));
writeFileSync(join(consumer, 'playwright.config.mjs'), `export default {
  testDir: './tests', use: { baseURL: 'http://127.0.0.1:16184' },
  webServer: { command: 'node node_modules/vite/bin/vite.js preview --host 127.0.0.1 --port 16184 --strictPort', url: 'http://127.0.0.1:16184', reuseExistingServer: false }
};`);
run(process.execPath, ['node_modules/vite/bin/vite.js', 'build'], consumer);
// The runner is tooling only. The page resolves ALL runtime packages inside the fixture.
run(process.execPath, [resolve(repo, 'node_modules/@playwright/test/cli.js'), 'test', '-c', join(consumer, 'playwright.config.mjs')], consumer);
console.log(`PASS: tarball installed without legacy peers; React 18.3.1; no Reakit; production browser tests. Fixture: ${consumer}`);
