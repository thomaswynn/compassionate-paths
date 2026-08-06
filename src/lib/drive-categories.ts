// Only folders that are safe to surface publicly. Client case folders are
// intentionally excluded.
export const RESOURCE_CATEGORIES = [
  {
    id: "templates",
    title: "Templates & Forms",
    blurb:
      "Starting documents families and advocates can adapt for medical, ADA, and eligibility summaries.",
    folderId: "14j4EJXDZ0G5BOEnAVuhfi7yuhHa97qkg",
  },
  {
    id: "elderly",
    title: "Elderly & Medical Parole",
    blurb:
      "Fact sheets, letterhead, and advocacy letters covering elderly parole and reentry programs.",
    folderId: "1f4OgvzG3Db3Q1pLI7-4zqmkTJLyWX7Hm",
  },
  {
    id: "strategy",
    title: "Guides & Strategy",
    blurb: "Long-form guides explaining how a compassionate release case is built end to end.",
    folderId: "1HF9S-COyKbsqIiXOQdAemeNOoJDaGPTE",
  },
  {
    id: "outreach",
    title: "Marketing & Outreach",
    blurb: "Materials for legislators, facilities, and community partners.",
    folderId: "16hck5uxR5AEaOO2PRIRo5-FvWApuDjaE",
  },
] as const;

export type ResourceItem = {
  id: string;
  name: string;
  kind: string;
  modified: string | null;
  viewUrl: string;
  downloadUrl: string;
};

export type ResourceCategory = {
  id: string;
  title: string;
  blurb: string;
  folderUrl: string;
  items: ResourceItem[];
};
