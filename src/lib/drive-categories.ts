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
    folderUrl: string | null;
    items: ResourceItem[];
};

export const RESOURCE_CATEGORIES: ResourceCategory[] = [
  {
        id: "templates",
        title: "Templates & Forms",
        blurb:
                "Starting documents families and advocates can adapt for medical, ADA, and eligibility summaries.",
        folderUrl: null,
        items: [
          {
                    id: "cdcr-7385",
                    name: "CDCR 7385",
                    kind: "PDF",
                    modified: null,
                    viewUrl: "/CDCR-7385.pdf",
                    downloadUrl: "/CDCR-7385.pdf",
          },
              ],
  },
  {
        id: "elderly",
        title: "Elderly & Medical Parole",
        blurb:
                "Fact sheets, letterhead, and advocacy letters covering elderly parole and reentry programs.",
        folderUrl: null,
        items: [],
  },
  {
        id: "guides",
        title: "Guides",
        blurb: "Long-form guides explaining how a compassionate release case is built end to end.",
        folderUrl: null,
        items: [
          {
                    id: "ospd-ab960",
                    name: "OSPD AB-960: Changes to CDCR Compassionate Release Procedure",
                    kind: "PDF",
                    modified: null,
                    viewUrl: "/OSPD_AB-960-Changes-to-CDCR-compassionate-release-procedure_2023_02_09.pdf",
                    downloadUrl: "/OSPD_AB-960-Changes-to-CDCR-compassionate-release-procedure_2023_02_09.pdf",
          },
              ],
  },
  {
        id: "outreach",
        title: "Marketing & Outreach",
        blurb: "Materials for legislators, facilities, and community partners.",
        folderUrl: null,
        items: [],
  },
  ];
