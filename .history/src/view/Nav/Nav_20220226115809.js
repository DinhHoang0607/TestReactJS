import React from "react";
import "./nav.scss";
const Nav = () => {
  return (
    <div className="topnav">
      <a className="active" href="/">
        Home
      </a>
      <a href="/todos">Todos</a>
      <a href="/about">About</a>
    </div>
  );
};

export default Nav;
