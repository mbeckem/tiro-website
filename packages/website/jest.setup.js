import "@testing-library/jest-dom/extend-expect";

// Make config available in tests. See https://github.com/vercel/next.js/issues/4024
import { setConfig } from "next/config";
import configFactory from "./next.config";
const { publicRuntimeConfig } = configFactory({});
setConfig({ publicRuntimeConfig });
