const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

async function createCleanHero() {
  const src = 'public/hero/hero_master_hd.jpg';
  const meta = await sharp(src).metadata();
  const width = meta.width; // 2560
  const height = meta.height; // 1200

  const svgOverlay = Buffer.from(`
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="leftMask" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#081F18" stop-opacity="1.0" />
          <stop offset="46%" stop-color="#081F18" stop-opacity="1.0" />
          <stop offset="53%" stop-color="#09231B" stop-opacity="0.6" />
          <stop offset="59%" stop-color="#09231B" stop-opacity="0" />
        </linearGradient>

        <linearGradient id="topMask" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#081F18" stop-opacity="1.0" />
          <stop offset="12%" stop-color="#081F18" stop-opacity="0.9" />
          <stop offset="18%" stop-color="#081F18" stop-opacity="0.3" />
          <stop offset="24%" stop-color="#081F18" stop-opacity="0" />
        </linearGradient>
      </defs>

      <rect x="0" y="0" width="${width}" height="${height}" fill="url(#leftMask)" />
      <rect x="0" y="0" width="${width}" height="${height}" fill="url(#topMask)" />
    </svg>
  `);

  await sharp(src)
    .composite([{ input: svgOverlay, top: 0, left: 0 }])
    .sharpen({ sigma: 1.2, m1: 1.0, m2: 2.0 })
    .modulate({ brightness: 1.05, saturation: 1.08 })
    .jpeg({ quality: 96 })
    .toFile('public/hero/hero_master_clean.jpg');

  console.log('Created 100% clean hero_master_clean.jpg successfully!');
}

createCleanHero().catch(console.error);
