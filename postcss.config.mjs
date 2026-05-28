import path from "path";
import { fileURLToPath } from "url";
import { createRequire } from "module";

const appDir = path.dirname(fileURLToPath(import.meta.url));
const require = createRequire(path.join(appDir, "package.json"));

const config = {
  plugins: {
    [require.resolve("@tailwindcss/postcss")]: {},
  },
};

export default config;
