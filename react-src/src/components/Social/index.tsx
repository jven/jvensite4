import React from "react";

import styles from "./styles.scss";

const Social: React.FC = () => (
  <div className={styles.social}>
    <a
      className={styles.instagram}
      href="https://www.instagram.com/jvenezuela716"
      target="_blank"
      rel="noopener noreferrer"
    />
    <a
      className={styles.github}
      href="https://www.github.com/jven"
      target="_blank"
      rel="noopener noreferrer"
    />
    <a
      className={styles.linkedin}
      href="https://www.linkedin.com/in/justin-venezuela"
      target="_blank"
      rel="noopener noreferrer"
    />
  </div>
);

export default Social;
