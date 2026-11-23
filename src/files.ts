import { File, Paths } from 'expo-file-system';
import * as Sharing from 'expo-sharing';

/** Phones: write a text file to the cache and open the share sheet. */
export async function shareTextFile(name: string, text: string, mimeType: string) {
  const f = new File(Paths.cache, name);
  f.create({ overwrite: true });
  f.write(text);
  await Sharing.shareAsync(f.uri, { mimeType });
}
export function downloadBlob(_blob: Blob, _name: string) {
  throw new Error('Downloads are for the web build');
}
