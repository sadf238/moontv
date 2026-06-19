/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  headers: function() {
    return Promise.resolve([
      {
        source: '/(.*)',
        headers: [
          {
            key: 'referrer-policy',
            value: 'no-referrer',
          }
        ]
      }
    ]);
  }
};

module.exports = nextConfig;
