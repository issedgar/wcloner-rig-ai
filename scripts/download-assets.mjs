import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';

const BASE = 'https://rig.ai';
const ROOT = process.cwd();

const assets = [
  // Fonts
  ['/fonts/chalet_londonnineteensixty.woff2', 'public/fonts/chalet_londonnineteensixty.woff2'],
  ['/fonts/GeistPixel-Square.woff2', 'public/fonts/GeistPixel-Square.woff2'],
  ['/fonts/InstrumentSans-latin.woff2', 'public/fonts/InstrumentSans-latin.woff2'],
  ['/fonts/ChivoMono-latin.woff2', 'public/fonts/ChivoMono-latin.woff2'],
  // Images
  ['/assets/rig-wordmark.svg', 'public/assets/rig-wordmark.svg'],
  ['/assets/cta-vortex.png', 'public/assets/cta-vortex.png'],
  ['/assets/cta-vortex.webp', 'public/assets/cta-vortex.webp'],
  ['/rig-graph.png', 'public/seo/rig-graph.png'],
];

async function download([urlPath, dest]) {
  const url = urlPath.startsWith('http') ? urlPath : BASE + urlPath;
  const outPath = join(ROOT, dest);
  try {
    const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
    if (!res.ok) {
      console.error(`FAIL ${res.status} ${url}`);
      return;
    }
    const buf = Buffer.from(await res.arrayBuffer());
    await mkdir(dirname(outPath), { recursive: true });
    await writeFile(outPath, buf);
    console.log(`OK ${dest} (${buf.length} bytes)`);
  } catch (err) {
    console.error(`ERROR ${url}: ${err.message}`);
  }
}

async function run() {
  const batchSize = 4;
  for (let i = 0; i < assets.length; i += batchSize) {
    await Promise.all(assets.slice(i, i + batchSize).map(download));
  }
}

run();
