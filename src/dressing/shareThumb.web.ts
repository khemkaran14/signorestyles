import { downloadBlob } from '../files';

/** Browser: download a saved look's thumbnail. */
export async function shareDataUrl(dataUrl: string) {
  const blob = await (await fetch(dataUrl)).blob();
  downloadBlob(blob, 'saved-look.jpg');
}
