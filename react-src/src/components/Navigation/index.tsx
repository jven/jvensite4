import React from "react";
import { Link } from "react-router-dom";

import styles from "./styles.scss";

const Navigation: React.FC = () => (
  <div className={styles.navigation}>
    <Link className={styles.link} to="/">
      Who am I?
    </Link>
    <Link className={styles.link} to="/resume">
      Resume
    </Link>
  </div>
);

export default Navigation;
