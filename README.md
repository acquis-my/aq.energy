# AQ Energy

[![Better Stack Badge](https://uptime.betterstack.com/status-badges/v1/monitor/wpz9.svg)](https://uptime.betterstack.com/?utm_source=status_badge)

Source code for AQ Energy website written in Typescript.

## Environment Variables

In both development and production environments, the following environment variables must be set.

| Variable                        | Description                           | Example                               |
| ------------------------------- | ------------------------------------- | ------------------------------------- |
| `SANITY_PROJECT_ID`             | Sanity Project ID                     | `1x000000`                            |
| `ZEN_QSTASH_TOKEN`              | Qstash Token                          |                                       |
| `ZEN_QSTASH_TOPIC`              | Topic for ingest of leads from Qstash |                                       |
| `TURNSTILE_SECRET`              | Secret for Turnstile                  | `1x0000000000000000000000000000000AA` |
| `NEXT_PUBLIC_TURNSTILE_SITEKEY` | Cloudflare Turnstile Sitekey          | `1x00000000000000000000AA`            |
| `NEXT_PUBLIC_GA_ID`             | Google Analytics ID                   | `G-1X00000000`                        |

## Local Development

Simply run the following commands after cloning the repository.

```
pnpm i
pnpm dev
```

## Deployment

The website is hosted with Cloudflare Pages. Hence, any updates to the master branch of this repository is automatically deployed. Preview branches are also enabled.
