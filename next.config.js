/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // importante per siti statici su Netlify
  output: "export",

  // importante per evitare problemi con next/image in export statico
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
