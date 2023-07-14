import "client-only";
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */

export const pageview = (GA_MEASUREMENT_ID: string, url: string) => {
  // @ts-ignore
  window.gtag("config", GA_MEASUREMENT_ID, {
    page_path: url,
  });
};
