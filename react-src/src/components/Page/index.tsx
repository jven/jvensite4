import React from "react";

import "./styles.css";
import Footer from "../Footer";
import Header from "../Header";

const Page: React.FC<Props> = ({ children }) => (
  <div className="page">
    <Header />
    <div className="pageBody">{children}</div>
    <Footer />
  </div>
);

interface Props {
  children: React.ReactNode;
}

export default Page;
