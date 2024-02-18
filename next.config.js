/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    prependData: '@import "src/styles/variables.scss";\n @import "src/styles/mixins.scss";\n',
  },
  images: {
    deviceSizes: [375, 600, 769, 991, 1200, 1600, 1920, 2048, 3840],
  },
};

module.exports = nextConfig;
