import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ryddo.ufs.sh',
        pathname: '/f/*',
      },
    ],
  },
};

export default nextConfig;
