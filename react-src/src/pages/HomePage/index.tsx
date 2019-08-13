import me from "./me.png";
import Page from "../../components/Page";
import React from "react";
import styles from "./style.scss";

const HomePage: React.FC = () => (
  <Page>
    <div className={styles.home}>
      <div className={styles.hi}>
        <p>
          I&apos;m currently a software engineer at{" "}
          <a href="https://spell.run" target="_blank" rel="noopener noreferrer">
            Spell
          </a>
          . Previously at{" "}
          <a
            href="https://google.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google
          </a>
          .
        </p>
        <p>I&apos;m also a pianist, rock climber, and chess player.</p>
        <p>I live, work, and play in New York City.</p>
        <p>
          E-mail me at{" "}
          <a
            href="mailto:jven@jvenezue.la"
            target="_blank"
            rel="noopener noreferrer"
          >
            jven@jvenezue.la
          </a>
          . :)
        </p>
      </div>
      <img alt="Me" className={styles.me} src={me} />
    </div>
  </Page>
);

export default HomePage;
