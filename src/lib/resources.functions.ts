import { createServerFn } from "@tanstack/react-start";
import type { ResourceCategory } from "./drive-categories";

export const getDriveResources = createServerFn({ method: "GET" }).handler(
    async (): Promise<ResourceCategory[]> => {
          const { RESOURCE_CATEGORIES } = await import("./drive-categories");
          return RESOURCE_CATEGORIES;
    },
  );
