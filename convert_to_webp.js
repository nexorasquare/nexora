const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const dir = 'public/images';

fs.readdir(dir, (err, files) => {
  if (err) throw err;
  
  files.forEach(file => {
    if (file.endsWith('.png') || file.endsWith('.jpg') || file.endsWith('.jpeg')) {
      const inputPath = path.join(dir, file);
      const outputPath = path.join(dir, file.substring(0, file.lastIndexOf('.')) + '.webp');
      
      sharp(inputPath)
        .webp({ quality: 80 }) // High quality WebP conversion
        .toFile(outputPath)
        .then(() => {
          console.log(`Converted ${file} to WebP`);
          // Delete original file to clean up repo
          fs.unlinkSync(inputPath);
        })
        .catch(err => {
          console.error(`Error converting ${file}:`, err);
        });
    }
  });
});
