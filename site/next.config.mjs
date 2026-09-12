/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  // Separate build output when running a local production check alongside
  // `next dev` (see `npm run build:test` / `start:test`) — `next dev` and
  // `next build` sharing the default `.next` dir at the same time corrupts
  // the dev server's live state (stale chunk hashes -> unstyled pages until
  // restart). Real deploys (`npm run build`/`start`) keep the default `.next`
  // dir untouched, since hosts expect it there.
  ...(process.env.NEXT_DIST_DIR ? { distDir: process.env.NEXT_DIST_DIR } : {}),
};

export default nextConfig;
