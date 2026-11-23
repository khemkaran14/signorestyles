/** Browser: trigger a download. */
export function downloadBlob(blob: Blob, name: string) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = name;
  document.body.appendChild(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 5000);
}
export async function shareTextFile(name: string, text: string, mimeType: string) {
  downloadBlob(new Blob([text], { type: mimeType }), name);
}
