import * as React from "react";

import "../../styles/index.scss";
import Footer from "../Footer";
import Header from "../Header";

type PageLayoutProps = {
  children: React.ReactNode;
};
const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default PageLayout;
