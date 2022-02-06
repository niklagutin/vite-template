const path = require('path');

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import eslintPlugin from 'vite-plugin-eslint';
import viteStylelint from '@amatlash/vite-plugin-stylelint';

export default defineConfig({
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: '@import "@/assets/scss/shared";',
            },
        },
    },
    plugins: [vue(), eslintPlugin(), viteStylelint()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
});
