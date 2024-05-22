import { defineConfig } from "vite";
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

export default defineConfig({
  plugins: [vue()],
  build: {
    outDir: 'dist/es',
    lib: {
      entry: resolve(__dirname, './index.ts'),
      name: 'HaoComponent',
      fileName: 'index',
      formats: ['es']
    },
    rollupOptions: {
      external: [
        "vue",
        "@popperjs/core",
        "async-validator",
        "@fortawesome/fontawesome-svg-core",
        "@fortawesome/free-solid-svg-icons",
        "@fortawesome/vue-fontawesome",
      ],
      output: {
        assetFileNames: (assetInfo) => {
          if(assetInfo.name === 'style.css') return 'index.css';
          return assetInfo.name as string;
        }
      }
    }
  }
});
