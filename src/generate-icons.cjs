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

const iconPrefix = /(ic-)/;

const deriveIconName = (file) => {
    const name = path.basename(file, '.svg');
    return name.replace(iconPrefix, '').replace(/(^\w|-\w)/g, (match) => {
        return match.replace('-', '').toUpperCase();
    }) + 'Icon';
}

icons.forEach((file) => {
    const componentName = deriveIconName(file);
    iconsPath.push(`import ${componentName} from './assets/icons/${file}';`);
    iconsPath.push(`export { ${componentName} };`);
});

flags.forEach((file) => {
    const componentName = deriveIconName(file);
    flagsIconsPath.push(
        `import ${componentName} from './assets/icons/flags/${file}';`,
    );
    flagsIconsPath.push(`export { ${componentName} };`);
});

logos.forEach((file) => {
    const componentName = deriveIconName(file);
    logoIconsPath.push(
        `import ${componentName} from './assets/icons/logos/${file}';`,
    );
    logoIconsPath.push(`export { ${componentName} };`);
});

fs.writeFileSync(
    path.join(libDir, 'icons-index.ts'),
    [...iconsPath, ...flagsIconsPath, ...logoIconsPath].join('\n'),
);
