/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    prependData: '@import "src/styles/variables.scss";\n',
  },
};

module.exports = nextConfig;
