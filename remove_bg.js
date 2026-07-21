const Jimp = require('jimp');

async function processImage() {
  try {
    const image = await Jimp.read('public/images/logo.png');
    image.scan(0, 0, image.bitmap.width, image.bitmap.height, function(x, y, idx) {
      const red = this.bitmap.data[idx + 0];
      const green = this.bitmap.data[idx + 1];
      const blue = this.bitmap.data[idx + 2];
      
      // If the pixel is very dark (black or near black), make it transparent
      if (red < 20 && green < 20 && blue < 20) {
        this.bitmap.data[idx + 3] = 0; // alpha channel to 0
      }
    });
    
    // Check if image is huge and resize if necessary
    if (image.bitmap.width > 1000) {
        image.resize(600, Jimp.AUTO);
    }
    
    await image.writeAsync('public/images/logo.png');
    console.log("Successfully removed black background and optimized logo!");
  } catch (err) {
    console.error("Error processing image:", err);
  }
}

processImage();
