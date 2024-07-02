import Message from "./methods";
import { withInstallFunction } from "@haosama-ui/utils";

export const HrMessage = withInstallFunction(Message, "$message");

export * from "./types";