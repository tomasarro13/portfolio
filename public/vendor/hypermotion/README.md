ESM bundles of [HyperMotion](https://www.hypermotion.tech/) v0.17.1 (MIT, © HyperMotion Team),
from `https://cdn.hypermotion.tech/<component>@0.17.1/bundle.esm.js`, served from this site so the
Content-Security-Policy keeps `script-src 'self'`. Each bundle exports `render(target, props)`.

If you update a bundle, run `npm run build:motion-css` (its Tailwind classes) and `npm run verify`
(it fails if a static style attribute inside a bundle is missing from the CSP hashes in `_headers`).
