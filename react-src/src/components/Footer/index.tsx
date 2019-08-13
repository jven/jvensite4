import React from "react";

import Social from "../Social";
import styles from "./styles.scss";

const Footer: React.FC = () => (
  <div className={styles.footer}>
    <Social />
    Last updated: July 2019
  </div>
);

export default Footer;
