import React from "react";
import { Link } from "react-router-dom";
import "./nav.scss";
const Nav = () => {
  return (
      <div className="topnav">
          <Na
      <Link className="active" to="/">
        Home
      </Link>
      <Link to="/todos">Todos</Link>
      <Link to="/about">About</Link>
    </div>
  );
};

export default Nav;
