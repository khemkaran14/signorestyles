import { ImageFormat, type SkImage } from '@shopify/react-native-skia';
import { downloadBlob } from '../files';

const jpeg = (img: SkImage) => new Blob([img.encodeToBytes(ImageFormat.JPEG, 92) as BlobPart], { type: 'image/jpeg' });

/** Browser: use the Web Share sheet when it can share files, else download the JPEG. */
export async function shareImage(img: SkImage) {
  const blob = jpeg(img);
  const file = new File([blob], 'styled-look.jpg', { type: 'image/jpeg' });
  const nav = navigator as Navigator & { canShare?: (d: ShareData) => boolean };
  if (nav.share && nav.canShare?.({ files: [file] })) { await nav.share({ files: [file], title: 'My styled look' }); return; }
  downloadBlob(blob, 'styled-look.jpg');
}

/** Browser: "Save to Photos" downloads the image. */
export async function saveImageToPhotos(img: SkImage) {
  downloadBlob(jpeg(img), 'styled-look.jpg');
}
