import MessageBox from "./methods";
import { set } from "lodash-es";

import type { App } from "vue";

export const HrMessageBox = MessageBox;

set(HrMessageBox, "install", (app: App) => {
  app.config.globalProperties.$msgbox = MessageBox;
  app.config.globalProperties.$messageBox = MessageBox;
  app.config.globalProperties.$alert = MessageBox.alert;
  app.config.globalProperties.$confirm = MessageBox.confirm;
  app.config.globalProperties.$prompt = MessageBox.prompt;
});

export default HrMessageBox;
export * from "./types";
