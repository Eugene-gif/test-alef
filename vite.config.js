import { defineConfig } from 'vite';
import { resolve } from 'path';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  base: "/",
  server: {
    open: true,
    host: true,
  },
  plugins: [vue()],
  resolve: {
    alias: { '@': resolve(__dirname, './src') }
  },
})
