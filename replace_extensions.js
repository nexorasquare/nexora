const fs = require('fs');
const path = require('path');

const filesToUpdate = [
  'src/sections/home/Workspaces.tsx',
  'src/sections/home/Hero.tsx',
  'src/sections/facilities/CategoryGrid.tsx',
  'src/sections/facilities/AmenitiesGrid.tsx',
  'src/app/layout.tsx',
  'src/components/layout/Navbar.tsx',
  'src/components/layout/Footer.tsx'
];

filesToUpdate.forEach(filePath => {
  const absolutePath = path.join(__dirname, filePath);
  if (fs.existsSync(absolutePath)) {
    let content = fs.readFileSync(absolutePath, 'utf8');
    content = content.replace(/\.png/g, '.webp');
    fs.writeFileSync(absolutePath, content);
    console.log(`Updated ${filePath}`);
  } else {
    console.warn(`File not found: ${filePath}`);
  }
});
