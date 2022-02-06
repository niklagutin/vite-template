import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import eslintPlugin from 'vite-plugin-eslint';
import viteStylelint from '@amatlash/vite-plugin-stylelint';

export default defineConfig({
    plugins: [vue(), eslintPlugin(), viteStylelint()],
});
