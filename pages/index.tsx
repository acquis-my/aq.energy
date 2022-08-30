import type { NextPage } from "next";
import Head from "next/head";
import Hero from "../components/Hero";
import heroImage from "../public/images/home-hero.jpg";
import { Button, OutlineButton } from "../components/Button";
import Layout from "../components/Layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>AQ Energy</title>
      </Head>

      <Hero bgImage={heroImage}>
        <div className="flex flex-col py-16 lg:py-24 gap-y-12 text-white">
          <p className="max-w-md text-4xl lg:text-5xl text-white capitalize font-bold">
            Give your roof{" "}
            <span className="text-cyber-yellow">Superpowers</span>
          </p>
          <p className="max-w-prose text-gray-50 font-light">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit
            expedita nemo voluptate at ad. Mollitia eos aut repellat magni nisi
            cum nihil provident, doloribus fuga cupiditate iure illo quibusdam
            quas!
          </p>
          <div className="flex gap-x-2">
            <Button href="/quote">Get Quote</Button>
            <OutlineButton href="/about#contact">Contact Us</OutlineButton>
          </div>
          <div className="flex flex-col gap-y-2">
            <p>Trusted by 100s of clients throughout the peninsula:</p>
            <ul className="flex whitespace-nowrap gap-x-2">
              <li>
                <img className="h-12" src="/images/placeholder_logo.png" />
              </li>
              <li>
                <img className="h-12" src="/images/placeholder_logo.png" />
              </li>
              <li>
                <img className="h-12" src="/images/placeholder_logo.png" />
              </li>
              <li>
                <img className="h-12" src="/images/placeholder_logo.png" />
              </li>
            </ul>
          </div>
        </div>
      </Hero>
    </Layout>
  );
};

export default Home;
