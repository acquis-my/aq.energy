# AQ Energy

Source code for AQ Energy website written in Typescript.

## Environment Variables

In both development and production use, the following environment variables are required to be set.

| variable                        | description                  | example                    |
| ------------------------------- | ---------------------------- | -------------------------- |
| `NEXT_PUBLIC_ZEN_API`           | Zen Quotes API endpoint.     | `http://localhost:8001`    |
| `NEXT_PUBLIC_TURNSTILE_SITEKEY` | Cloudflare Turnstile Sitekey | `1x00000000000000000000AA` |

## Local Development

Simply run the following commands after cloning the repository.

```
yarn
yarn dev
```

## Deployment

The website is hosted with Cloudflare Pages. Hence, any updates to the master branch of this repository is automatically deployed. Preview branches are also enabled.
