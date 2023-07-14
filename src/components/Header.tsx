import React from "react";
import Container from "./Container";
import Nav from "./Nav";
import { SunPattern } from "./Pattern";

type Header = {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
};

const Header: React.FC<Header> = ({ title, subtitle, children }) => {
  return (
    <header className="relative bg-indigo-dye">
      <figure className="absolute inset-0">
        <SunPattern
          className="object-cover mx-auto h-full w-full"
          alt=""
          fill
        />
      </figure>
      <div className="relative">
        <Nav />
        <Container className="py-6">
          <div className="max-w-prose py-8 mx-auto text-white text-center">
            <h1 className="text-4xl lg:text-5xl font-semibold">{title}</h1>
            <p className="mt-8 text-lg text-gray-300">{subtitle}</p>
          </div>
          {children}
        </Container>
      </div>
    </header>
  );
};

export default Header;
