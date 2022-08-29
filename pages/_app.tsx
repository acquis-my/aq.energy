import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

function Website({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" type="image/png" href="/aq-logo-primary.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default Website;
