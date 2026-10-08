import { bindings, defineConfig } from "cf/config";

export default defineConfig({
  accountId: "61de8516be4d5256c1bd7e87e8fe17ae",
  worker: {
    name: "mshub",
    compatibilityDate: "2026-10-01",
    compatibilityFlags: ["nodejs_compat"],
    entrypoint: "@tanstack/react-start/server-entry",
    domains: ["mshub.dev", "www.mshub.dev"],
    env: {
      /** Classic token with no scopes; unlike a fine-grained one, it lets the calendar include private contributions. */
      GITHUB_TOKEN: bindings.secret(),
    },
  },
});
