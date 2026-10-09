// Upscale the hero backgrounds (1376x768) to 2560px wide so large screens don't
// rely on the browser's blurry bilinear upscaling. Run: node scripts/upscale_hero.js
const sharp = require('sharp');

const TARGET_WIDTH = 2560;

async function upscaleHero() {
  for (let i = 1; i <= 4; i++) {
    const src = `public/hero/hero_hd_${i}.jpg`;
    const out = `public/hero/hero_xl_${i}.jpg`;

    await sharp(src)
      .resize({ width: TARGET_WIDTH, kernel: sharp.kernel.lanczos3 })
      // Light unsharp mask to recover edge crispness lost in upscaling
      .sharpen({ sigma: 0.9, m1: 0.6, m2: 2.2 })
      .jpeg({ quality: 92, mozjpeg: true, chromaSubsampling: '4:4:4' })
      .toFile(out);

    const meta = await sharp(out).metadata();
    console.log(`${out}: ${meta.width}x${meta.height}`);
  }
}

upscaleHero().catch((err) => {
  console.error(err);
  process.exit(1);
});
