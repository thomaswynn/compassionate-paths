const GATEWAY = "https://connector-gateway.lovable.dev/google_drive/drive/v3";

export type DriveFile = {
  id: string;
  name: string;
  mimeType: string;
  modifiedTime?: string;
};

export async function listDriveFolder(folderId: string): Promise<DriveFile[]> {
  const lovableKey = process.env["LOVABLE_API_KEY"];
  const driveKey = process.env["GOOGLE_DRIVE_API_KEY"];
  if (!lovableKey || !driveKey) {
    throw new Error("Google Drive connection is not configured");
  }

  const url = new URL(`${GATEWAY}/files`);
  url.searchParams.set("q", `'${folderId}' in parents and trashed=false`);
  url.searchParams.set("fields", "files(id,name,mimeType,modifiedTime)");
  url.searchParams.set("orderBy", "name");
  url.searchParams.set("pageSize", "100");

  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${lovableKey}`,
      "X-Connection-Api-Key": driveKey,
    },
  });

  if (!res.ok) {
    const body = await res.text();
    console.error(`Drive request failed [${res.status}]: ${body}`);
    throw new Error(`Drive request failed [${res.status}]: ${body}`);
  }

  const json = (await res.json()) as { files?: DriveFile[] };
  return (json.files ?? []).filter((f) => f.mimeType !== "application/vnd.google-apps.folder");
}
