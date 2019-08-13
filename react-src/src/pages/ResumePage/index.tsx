import Page from "../../components/Page";
import React from "react";
import styles from "./style.scss";

const ResumePage: React.FC = () => (
  <Page>
    <div className={styles.resume}>
      <div className={styles.options}>
        <a
          href="https://docs.google.com/document/d/1IZKWq9eoIdVvlAVpDbCwRB6wBfv8hhctBHPhwSeyrKE/preview"
          target="_blank"
          rel="noopener noreferrer"
        >
          (open in new window)
        </a>
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
          (download as PDF)
        </a>
      </div>
      <iframe
        title="Resume"
        src="https://docs.google.com/document/d/1IZKWq9eoIdVvlAVpDbCwRB6wBfv8hhctBHPhwSeyrKE/preview"
      />
    </div>
  </Page>
);

export default ResumePage;
