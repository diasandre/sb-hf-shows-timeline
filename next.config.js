const withImages = require("next-images");

const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");

module.exports = withPlugins([
  [
    optimizedImages,
    {
      handleImages: ["gif"],
      gifsicle: {
        interlaced: true,
        optimizationLevel: 3,
      },
    },
  ],
  withImages(),
]);
