/** Public site URL for metadata and absolute links. Set in `.env.local`: `NEXT_PUBLIC_SITE_URL=https://yoursite.com` */
export function getSiteUrl(): string {
  return (
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    "http://localhost:3000"
  );
}
