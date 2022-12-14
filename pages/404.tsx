import Header from "../components/Header";
import Layout from "../components/Layout";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <Layout>
      <Header title="Oops!" />

      <section className="grid place-items-center h-full px-6">
        <div className="max-w-md mx-auto flex flex-col gap-6 py-20 text-center">
          <h1 className="font-bold text-3xl uppercase">
            404 - Page not found.
          </h1>
          <p className="text-sm">
            The page you are looking for might have been moved, had its name
            changed, or is temporarily unavailable.
          </p>
          <Link href="/">
            <a className="hover:underline font-semibold">
              &larr; Go to Homepage
            </a>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default NotFoundPage;
