/* eslint-disable import/no-extraneous-dependencies */
/// <reference types='vitest' />
/// <reference types='vite/client' />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import stylelint from 'vite-plugin-stylelint';
import eslint from 'vite-plugin-eslint';
import * as path from 'path';

export default defineConfig({
  plugins: [
    react(),
    stylelint({
      // fix: true,
    }),
    eslint({
      // fix: true,
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setup-tests.ts',
  },
});
