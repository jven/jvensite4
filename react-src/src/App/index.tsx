import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import HomePage from "../pages/HomePage";
import ResumePage from "../pages/ResumePage";
import "./styles.css";

const App = () => (
  <div className="app">
    <BrowserRouter>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/resume" component={ResumePage} />
    </BrowserRouter>
  </div>
);

export default App;
