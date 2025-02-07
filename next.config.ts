import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  basePath: '/zaraChallenge',
  assetPrefix: '/zaraChallenge',
  output: 'export',
  reactStrictMode: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'prueba-tecnica-api-tienda-moviles.onrender.com',
        port: '',
        pathname: '/images/**',
      },
    ],
    localPatterns: [
      {
        pathname: '/public/**',
        search: '',
      },
    ],
  },
};

export default nextConfig;
