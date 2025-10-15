import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  //disable turbopack for build as causing error with vercell
  turbo: false,
};

export default nextConfig;
