import React from "react";

import Navigation from "../Navigation";
import styles from "./styles.scss";

const Header: React.FC = () => (
  <div className={styles.header}>
    <h1>Justin Venezuela</h1>
    <Navigation />
  </div>
);

export default Header;
