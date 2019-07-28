import React from "react";
import Page from "../../components/Page";
import "./style.css";

const ResumePage: React.FC = () => (
  <Page>
    <div className="resume">
      <div className="options">
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
