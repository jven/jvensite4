import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import HomePage from "../pages/HomePage";
import ResumePage from "../pages/ResumePage";
import styles from "./styles.scss";

const App = () => (
  <div className={styles.app}>
    <BrowserRouter>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/resume" component={ResumePage} />
    </BrowserRouter>
  </div>
);

export default App;
