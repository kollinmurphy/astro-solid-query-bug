import { UserConfig, defineConfig } from "vite";

const configuration: UserConfig = {
  optimizeDeps: {
    exclude: ["@tanstack/solid-query"],
  },
};

export default defineConfig(configuration);
