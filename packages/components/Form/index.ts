import Form from "./Form.vue";
import FormItem from "./FormItem.vue";
import { withInstall } from "@haosama-ui/utils";

export const HrForm = withInstall(Form);
export const HrFormItem = withInstall(FormItem);

export * from "./types";
export * from "./hooks";
