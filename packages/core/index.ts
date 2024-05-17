import { makeInstaller } from "@haosama-ui/utils";
import components from "./components";
import '@haosama-ui/theme/index.css';

const installer = makeInstaller(components);

export * from "@haosama-ui/components";
export default installer;