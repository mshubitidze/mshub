import { createServerFn } from "@tanstack/react-start";

import { fetchContributions } from "@/github.server";

export type { Contributions } from "@/github.server";

export const getContributions = createServerFn({ method: "GET" }).handler(() =>
  fetchContributions(),
);
