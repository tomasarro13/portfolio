// @ts-check
import { defineConfig } from 'astro/config';

/**
 * Public URL of the deployed site, used for canonical and Open Graph URLs.
 * Replace null with your real URL once the first deployment is live,
 * e.g. 'https://tomas-ariza-portfolio.your-subdomain.workers.dev'.
 * @type {string | null}
 */
const SITE_URL = 'https://tomas-ariza-portfolio.tomas13ariza.workers.dev';

export default defineConfig({
  ...(SITE_URL ? { site: SITE_URL } : {}),
  output: 'static',
  build: {
    // Keep every stylesheet as an external file so the strict
    // Content-Security-Policy in public/_headers never has to allow inline styles.
    inlineStylesheets: 'never',
  },
});
