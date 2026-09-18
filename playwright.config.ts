import { defineConfig } from '@playwright/test';
export default defineConfig({
  testDir: 'tests/browser',
  use: { baseURL: 'http://127.0.0.1:16183' },
  webServer: {
    command:
      'npx vite --config tests/browser/vite.config.ts --host 127.0.0.1 --port 16183 --strictPort',
    url: 'http://127.0.0.1:16183/tests/browser/',
    reuseExistingServer: false,
  },
});
