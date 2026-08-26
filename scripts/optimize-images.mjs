import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const imageDir = path.resolve('src/image');
const outputDir = path.join(imageDir, 'optimized');

const projectImages = [
  'APIRESTful.png',
  'ShopSwiftSuite.png',
  'SistemaValeti.png',
  'ParkScan.png',
  'GymFlow.png',
  'AgroLink.png'
];

async function optimizeImage(fileName) {
  const input = path.join(imageDir, fileName);
  const baseName = path.parse(fileName).name;
  const image = sharp(input).resize({ width: 1120, withoutEnlargement: true });

  const webpOutput = path.join(outputDir, `${baseName}.webp`);
  const avifOutput = path.join(outputDir, `${baseName}.avif`);

  await image.clone().webp({ quality: 72, effort: 6 }).toFile(webpOutput);
  await image.clone().avif({ quality: 48, effort: 7 }).toFile(avifOutput);

  const [sourceStat, webpStat, avifStat] = await Promise.all([
    fs.stat(input),
    fs.stat(webpOutput),
    fs.stat(avifOutput)
  ]);

  console.log(`${fileName}: ${sourceStat.size} -> webp ${webpStat.size}, avif ${avifStat.size}`);
}

await fs.mkdir(outputDir, { recursive: true });
await Promise.all(projectImages.map(optimizeImage));
