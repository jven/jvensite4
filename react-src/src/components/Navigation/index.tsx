import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";

const Navigation: React.FC = () => (
  <div className="navigation">
    <Link className="link" to="/">
      Who am I?
    </Link>
    <Link className="link" to="/resume">
      Resume
    </Link>
  </div>
);

export default Navigation;
