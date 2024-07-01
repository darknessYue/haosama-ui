import { defineConfig } from "vite";
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import terser from "@rollup/plugin-terser";

// const TRY_MOVE_STYLES_DELAY = 750 as const;

const isProd = process.env.NODE_ENV === "production";
const isDev = process.env.NODE_ENV === "development";
const isTest = process.env.NODE_ENV === "test";

export default defineConfig({
  plugins: [
    vue(),
    // terser({
    //   compress: {
    //     drop_console: ["log"],
    //     drop_debugger: true,
    //     passes: 3,
    //     global_defs: {
    //       "@DEV": JSON.stringify(isDev),
    //       "@PROD": JSON.stringify(isProd),
    //       "@TEST": JSON.stringify(isTest),
    //     },
    //   },
    // })
  ],
  build: {
    outDir: 'dist/umd',
    lib: {
      entry: resolve(__dirname, './index.ts'),
      name: 'HaosamaUi',
      fileName: 'haosama-ui',
      formats: ['umd']
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        exports: "named",
        globals: {
          vue: "Vue",
        },
        assetFileNames: (chunkInfo) => {
          if (chunkInfo.name === "style.css") {
            return "index.css";
          }
          return chunkInfo.name as string;
        },
      },
    }
  }
});
