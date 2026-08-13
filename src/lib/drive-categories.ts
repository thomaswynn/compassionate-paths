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
            id: "published-caselaw",
            title: "Published Caselaw",
            blurb:
                      "Court decisions and published caselaw supporting compassionate release and medical parole petitions in California.",
            folderUrl: null,
            items: [
                {
                            id: "published-caselaw-pdf",
                            name: "Published California Appellate Cases on Compassionate Release",
                            kind: "PDF",
                            modified: null,
                            viewUrl: "https://drive.google.com/file/d/1xlMGTz_M11jZsttkQOZtKSMsktDNtdF6/view",
                            downloadUrl: "https://drive.google.com/uc?export=download&id=1xlMGTz_M11jZsttkQOZtKSMsktDNtdF6",
                },
                    ],
    },
    {
            id: "statistics",
            title: "Statistics on the Compassionate Release Process",
            blurb:
                      "Data and analysis on compassionate release outcomes before and after AB-960, including impact on release rates and case processing times.",
            folderUrl: null,
            items: [
                {
                            id: "cr-statistics",
                            name: "California Compassionate Release Statistics: Before & After AB-960",
                            kind: "PDF",
                            modified: null,
                            viewUrl: "https://drive.google.com/file/d/1cs0uaep0AxgxyEORIzFSVAzhQV6XDJye/view",
                            downloadUrl: "https://drive.google.com/uc?export=download&id=1cs0uaep0AxgxyEORIzFSVAzhQV6XDJye",
                },
                    ],
    },
    ];
