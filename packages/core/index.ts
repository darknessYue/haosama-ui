import { makeInstaller } from "@haosama-ui/utils";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import components from "./components";
import '@haosama-ui/theme/index.css';

library.add(fas);
const installer = makeInstaller(components);

export * from "@haosama-ui/components";
export default installer;