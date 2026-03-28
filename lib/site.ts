/** Production: set NEXT_PUBLIC_SITE_URL (e.g. https://www.yourdomain.com) for correct canonical, OG, sitemap, and favicon URLs. */
export function getSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  if (explicit) {
    return explicit;
  }
  const netlifyUrl = process.env.URL ?? process.env.DEPLOY_PRIME_URL;
  if (netlifyUrl) {
    return netlifyUrl.replace(/\/$/, "");
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  return "http://localhost:3012";
}

export function getMetadataBase(): URL {
  return new URL(getSiteUrl());
}
