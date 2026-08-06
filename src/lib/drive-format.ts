export type DriveFileLike = {
  id: string;
  name: string;
  mimeType: string;
  modifiedTime?: string;
};

const GOOGLE_EXPORT: Record<string, { kind: string; exportMime: string; ext: string }> = {
  "application/vnd.google-apps.document": {
    kind: "Google Doc",
    exportMime: "application/pdf",
    ext: "pdf",
  },
  "application/vnd.google-apps.spreadsheet": {
    kind: "Google Sheet",
    exportMime: "application/pdf",
    ext: "pdf",
  },
  "application/vnd.google-apps.presentation": {
    kind: "Google Slides",
    exportMime: "application/pdf",
    ext: "pdf",
  },
};

const KIND_BY_MIME: Record<string, string> = {
  "application/pdf": "PDF",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document": "Word document",
  "application/msword": "Word document",
  "text/plain": "Document",
  "image/png": "Image",
  "image/jpeg": "Image",
};

export function describeFile(file: DriveFileLike) {
  const google = GOOGLE_EXPORT[file.mimeType];
  return {
    id: file.id,
    name: file.name.trim().replace(/\.(docx?|pdf|txt)$/i, ""),
    kind: google?.kind ?? KIND_BY_MIME[file.mimeType] ?? "File",
    modified: file.modifiedTime ?? null,
    viewUrl: `https://drive.google.com/file/d/${file.id}/view`,
    downloadUrl: google
      ? `https://docs.google.com/document/d/${file.id}/export?format=${google.ext}`
      : `https://drive.google.com/uc?export=download&id=${file.id}`,
  };
}
