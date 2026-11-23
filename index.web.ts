// Browser: load Skia's WebAssembly build (public/canvaskit.wasm) before any screen imports Skia.
import { LoadSkiaWeb } from '@shopify/react-native-skia/lib/module/web';

LoadSkiaWeb({ locateFile: (file: string) => `/${file}` })
  .catch(e => console.error('Could not load Skia for the web', e))
  .then(() => require('expo-router/entry'));
