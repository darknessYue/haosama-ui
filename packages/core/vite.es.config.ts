import { defineConfig } from "vite";
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';
import { readdirSync, readdir } from "fs";
import { defer, delay, filter, map, includes } from "lodash-es";
import terser from "@rollup/plugin-terser";
// import shell from "shelljs";

function getDirectoriesSync(basePath: string) {
  const entries = readdirSync(basePath, { withFileTypes: true });
  return map(
    filter(entries, (entry) => entry.isDirectory()),
    (entry) => entry.name
  )
}

const TRY_MOVE_STYLES_DELAY = 750 as const;

const isProd = process.env.NODE_ENV === "production";
const isDev = process.env.NODE_ENV === "development";
const isTest = process.env.NODE_ENV === "test";

// const COMP_NAMES = [
//   "Alert",
//   "Button",
//   "Collapse",
//   "Dropdown",
//   "Form",
//   "Icon",
//   "Input",
//   "Loading",
//   "Message",
//   "MessageBox",
//   "Notification",
//   "Overlay",
//   "Popconfirm",
//   "Select",
//   "Switch",
//   "Tooltip",
//   "Upload",
// ] as const;

// function moveStyles() {
//   readdir("./dist/es/theme", (err) => {
//     if (err) return delay(moveStyles, TRY_MOVE_STYLES_DELAY);
//     defer(() => shell.mv("./dist/es/theme", "./dist"));
//   });
// }

export default defineConfig({
  plugins: [
    vue(),
    dts({
      tsconfigPath: "../../tsconfig.build.json",
      outDir: "dist/types",
    }),
    // terser({
    //   compress: {
    //     sequences: isProd,
    //     arguments: isProd,
    //     drop_console: isProd && ["log"],
    //     drop_debugger: isProd,
    //     passes: isProd ? 4 : 1,
    //     global_defs: {
    //       "@DEV": JSON.stringify(isDev),
    //       "@PROD": JSON.stringify(isProd),
    //       "@TEST": JSON.stringify(isTest),
    //     },
    //   },
    //   format: {
    //     semicolons: false,
    //     shorthand: isProd,
    //     braces: !isProd,
    //     beautify: !isProd,
    //     comments: !isProd,
    //   },
    //   mangle: {
    //     toplevel: isProd,
    //     eval: isProd,
    //     keep_classnames: isDev,
    //     keep_fnames: isDev,
    //   },
    // }),
  ],
  build: {
    outDir: 'dist/es',
    // minify: false,
    // cssCodeSplit: true,
    // sourcemap: !isProd,
    lib: {
      entry: resolve(__dirname, './index.ts'),
      name: 'HaosamaUi',
      fileName: 'haosama-ui',
      formats: ['es']
    },
    rollupOptions: {
      external: [
        "vue",
        "@fortawesome/fontawesome-svg-core",
        "@fortawesome/free-solid-svg-icons",
        "@fortawesome/vue-fontawesome",
        "@popperjs/core",
        "async-validator",
      ],
      output: {
        assetFileNames: (chunkInfo) => {
          if (chunkInfo.name === "style.css") {
            return "index.css";
          }
          return chunkInfo.name as string;
        },
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return "vendor";
          }
          if (id.includes("/packages/hooks")) {
            return "hooks";
          }
          if (
            id.includes("/packages/utils") ||
            id.includes("plugin-vue:export-helper")
          ) {
            return "utils";
          }
          // for (const item of COMP_NAMES) {
          //   if (id.includes(`/packages/components/${item}`)) {
          //     return item;
          //   }
          // }
          for(const dirName of getDirectoriesSync('../components')) {
            if(id.includes(`/packages/components/${dirName}`)) {
              return dirName;
            }
          }
        },
      }
    }
  }
});
