import sharp from 'sharp';
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ASSETS_DIR = path.join(__dirname, '../src/assets/imgs');
const OUTPUT_DIR = path.join(__dirname, '../src/assets/optimized');

async function optimizeImages() {
  try {
    // Create output directory if it doesn't exist
    await fs.mkdir(OUTPUT_DIR, { recursive: true });

    // Get all image files
    const files = await fs.readdir(ASSETS_DIR);
    const imageFiles = files.filter(file => /\.(jpg|jpeg|png)$/i.test(file));

    for (const file of imageFiles) {
      const inputPath = path.join(ASSETS_DIR, file);
      const outputPath = path.join(OUTPUT_DIR, file.replace(/\.(jpg|jpeg|png)$/i, '.webp'));

      await sharp(inputPath)
        .webp({ quality: 80, effort: 6 })
        .resize({ width: 1200, height: 800, fit: 'inside', withoutEnlargement: true })
        .toFile(outputPath);

      console.log(`Optimized: ${file} -> ${path.basename(outputPath)}`);
    }

    console.log('Image optimization complete!');
  } catch (error) {
    console.error('Error optimizing images:', error);
  }
}

optimizeImages();
