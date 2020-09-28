const imagemin = require('imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');

const { ImageBuffer } = require("imager-io");
ImageBuffer
    .open("images/jpgmini.jpg")
    .then(buffer => buffer.opt())
    .then(buffer => buffer.save("result.jpeg"))
    .then(() => console.log("done"));

async function compressWithMozJPEG(data, dest) {
    await imagemin([data], {
        destination: dest,
        plugins: [
            imageminMozjpeg()
        ]
    });

    console.log('Images optimized');
};

// compressWithMozJPEG('images/jpgmini.jpg', 'mozjpeg');