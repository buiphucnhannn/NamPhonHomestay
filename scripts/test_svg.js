const fs = require('fs');
const sharp = require('sharp');

// Let's create an SVG that renders the bathroom with smooth, generous organic curves on ALL sides (especially the left side)
const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 530" width="700" height="530">
  <defs>
    <clipPath id="bathroomClip">
      <!-- Generous organic pebble curve with ample margin on the left -->
      <path d="M 60 55 C 200 25, 460 25, 615 70 C 675 92, 695 195, 675 310 C 655 425, 575 490, 390 495 C 220 500, 85 485, 45 425 C 10 330, 15 160, 60 55 Z" />
    </clipPath>
  </defs>
  
  <!-- Outer gold contour -->
  <path d="M 75 40 C 220 10, 480 10, 635 55 C 700 78, 720 195, 698 325 C 675 445, 590 515, 390 518 C 205 522, 65 505, 25 438 C -10 335, -5 150, 40 40" stroke="#D7A75C" stroke-width="2" fill="none" opacity="0.6" stroke-linecap="round" />

  <g clip-path="url(#bathroomClip)">
    <image href="amenities_bathroom_hd.jpg" x="25" y="25" width="650" height="488" preserveAspectRatio="xMidYMid slice" />
  </g>
</svg>`;

fs.writeFileSync('public/amenities/test_frame.svg', svg);
console.log('Saved test_frame.svg');
