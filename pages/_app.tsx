import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { DefaultSeo } from "next-seo";

function Website({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo titleTemplate="%s - AQ Energy" defaultTitle="AQ Energy" />
      <Head>
        <link rel="icon" type="image/png" href="images/aq-logo-primary.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default Website;
