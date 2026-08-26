# The Snowline Chalet

Static listing page for [Forte 1 Design](https://forte1design.com).

No build step. Cloudflare Pages serves `index.html` as-is.

## Cloudflare Pages settings

Connect this GitHub repo, then set:

| Setting | Value |
|---|---|
| Framework preset | **None** |
| Build command | *(leave empty)* |
| Build output directory | `/` |

If you prefer the `public` folder instead, set **Build output directory** to `public`.

Do not use GitHub Actions for this deploy. Pages Git integration publishes on every push to `main`.

## Quote CTA

**Request building plans** opens https://forte1design.com/contact
