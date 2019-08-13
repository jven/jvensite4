import React from "react";

import Footer from "../Footer";
import Header from "../Header";
import styles from "./styles.scss";

const Page: React.FC<Props> = ({ children }) => (
  <div className={styles.page}>
    <Header />
    <div className={styles.pageBody}>{children}</div>
    <Footer />
  </div>
);

interface Props {
  children: React.ReactNode;
}

export default Page;
