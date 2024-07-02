import { vLoading } from "./directive";
import { Loading } from "./service";

import type { App } from "vue";

export const HrLoading = {
  name:'HrLoading',
  install(app: App) {
    app.directive("loading", vLoading);
    app.config.globalProperties.$loading = Loading;
  },
  directive: vLoading,
  service: Loading,
};

export default HrLoading;

export {
  vLoading,
  vLoading as HrLoadingDirective,
  Loading as HrLoadingService,
};

export * from "./types";