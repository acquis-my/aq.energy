import React from "react";
import { Header } from "./Header";

const Layout: React.FC<any> = ({ bgImage, children }) => {
  return (
    <main className="">
      <Header bgImage={bgImage} />
      <section>{children}</section>
    </main>
  );
};

export default Layout;
