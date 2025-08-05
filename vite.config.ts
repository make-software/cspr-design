import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: ['babel-plugin-styled-components'],
      },
    }),
    svgr(),
    dts({ tsconfigPath: './tsconfig.json' }),
  ],
  build: {
    copyPublicDir: false,
    lib: {
      entry: 'src/lib/index.ts',
      name: 'CSPR.Design UI Library',
      fileName: (format) => `cspr-design.${format}.js`,
      formats: ['es', 'umd'],
    },
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        'react/jsx-runtime',
        'styled-components',
      ],
      output: {
        minifyInternalExports: true,
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'jsxRuntime',
          'styled-components': 'styled',
        },
      },
    },
  },
});
