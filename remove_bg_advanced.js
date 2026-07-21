const Jimp = require('jimp');

async function processImage() {
  try {
    // Read the ORIGINAL image to ensure we have the untouched pixels
    const image = await Jimp.read('image.png');
    
    image.scan(0, 0, image.bitmap.width, image.bitmap.height, function(x, y, idx) {
      const r = this.bitmap.data[idx + 0];
      const g = this.bitmap.data[idx + 1];
      const b = this.bitmap.data[idx + 2];
      
      // Calculate luminosity/brightness of the pixel
      // We will use the maximum color channel value as the new alpha!
      // White (255) -> opaque, Black (0) -> transparent, Grey (128) -> semi-transparent
      const maxColor = Math.max(r, g, b);
      
      // Set the alpha channel to the brightness
      // This creates a perfect anti-aliased cutout of luminous graphics on black
      this.bitmap.data[idx + 3] = maxColor;
      
      // If the pixel has some color, we want to boost it slightly so it doesn't get washed out
      // Since we are applying alpha, the actual color values should remain pure.
      if (maxColor > 0) {
         // Optionally normalize the color channels so they remain vibrant
         // For a neon green and white logo, leaving the RGB as is works great when alpha is applied.
      }
    });
    
    // Save to a NEW filename to completely bust the Next.js and Browser caches!
    await image.writeAsync('public/images/logo-transparent-v2.png');
    console.log("Successfully created perfectly anti-aliased transparent logo!");
  } catch (err) {
    console.error("Error processing image:", err);
  }
}

processImage();
