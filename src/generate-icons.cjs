/**
 *
 * Script that imports and re-exports all SVG icons from the `src/lib/assets/icons`, `/logos` and `/flags` directory's
 */

// Run: node src/generate-icons.ts
const fs = require('fs');
const path = require('path');

const libDir = path.resolve(__dirname, '../src/lib');
const iconsDir = path.resolve(__dirname, '../src/lib/assets/icons');
const flagsDir = path.resolve(__dirname, '../src/lib/assets/icons/flags');
const logosDir = path.resolve(__dirname, '../src/lib/assets/icons/logos');

const icons = fs.readdirSync(iconsDir).filter((f) => f.endsWith('.svg'));
const flags = fs.readdirSync(flagsDir).filter((f) => f.endsWith('.svg'));
const logos = fs.readdirSync(logosDir).filter((f) => f.endsWith('.svg'));

const iconsPath = [];
const flagsIconsPath = [];
const logoIconsPath = [];

icons.forEach((file) => {
  const name = path.basename(file, '.svg');
  const componentName =
    name.replace('ic', '').replace(/(^\w|-\w)/g, (match) => {
      return match.replace('-', '').toUpperCase();
    }) + 'Icon';
  iconsPath.push(`import ${componentName} from './assets/icons/${file}';`);
  iconsPath.push(`export { ${componentName} };`);
});

flags.forEach((file) => {
  const name = path.basename(file, '.svg');

  const componentName =
    name.replace('ic', '').replace(/(^\w|-\w)/g, (match) => {
      return match.replace('-', '').toUpperCase();
    }) + 'Icon';
  flagsIconsPath.push(
    `import ${componentName} from './assets/icons/flags/${file}';`,
  );
  flagsIconsPath.push(`export { ${componentName} };`);
});

logos.forEach((file) => {
  const name = path.basename(file, '.svg');
  const componentName =
    name.replace('ic', '').replace(/(^\w|-\w)/g, (match) => {
      return match.replace('-', '').toUpperCase();
    }) + 'Icon';
  logoIconsPath.push(
    `import ${componentName} from './assets/icons/logos/${file}';`,
  );
  logoIconsPath.push(`export { ${componentName} };`);
});

fs.writeFileSync(
  path.join(libDir, 'icons-index.ts'),
  [...iconsPath, ...flagsIconsPath, ...logoIconsPath].join('\n'),
);
