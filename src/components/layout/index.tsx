// Core types
import type { FC } from "react";

// Local components
import { Header } from "./Header";
import { Footer } from "./Footer";

interface Layouttypes {
  children: React.ReactNode;
}

const index: FC<Layouttypes> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export { index as Layout };
