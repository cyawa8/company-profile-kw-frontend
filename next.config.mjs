/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
     {
        protocol: 'https',
        hostname: 'api.kiwi.co.id',
        port: '',
        pathname: '/storage/**',
      },
      {
        protocol: 'http',
        hostname: '127.0.0.1',
        port: '8001',
        pathname: '/storage/**',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '8001',
        pathname: '/storage/**',
      },
    ],
  },
};

export default nextConfig;
