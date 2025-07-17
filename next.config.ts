import withPWA from 'next-pwa';
import type { RemotePattern } from "next/dist/shared/lib/image-config";

const remotePatterns: RemotePattern[] = [
  {
    protocol: "https",
    hostname: "image.tmdb.org",
    pathname: "/t/p/**",
  },
];

const nextConfig = {
  images: {
    remotePatterns,
  },
};

export default withPWA({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
})(nextConfig);
