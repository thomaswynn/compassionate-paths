import { createServerFn } from "@tanstack/react-start";
import type { ResourceCategory, ResourceItem } from "./drive-categories";

export const getDriveResources = createServerFn({ method: "GET" }).handler(
  async (): Promise<ResourceCategory[]> => {
    const { listDriveFolder } = await import("./drive.server");
    const { describeFile } = await import("./drive-format");
    const { RESOURCE_CATEGORIES } = await import("./drive-categories");

    return await Promise.all(
      RESOURCE_CATEGORIES.map(async (cat) => {
        let items: ResourceItem[] = [];
        try {
          items = (await listDriveFolder(cat.folderId)).map(describeFile);
        } catch (error) {
          console.error(`Failed to list folder ${cat.folderId}`, error);
        }
        return {
          id: cat.id,
          title: cat.title,
          blurb: cat.blurb,
          folderUrl: `https://drive.google.com/drive/folders/${cat.folderId}`,
          items,
        };
      }),
    );
  },
);
