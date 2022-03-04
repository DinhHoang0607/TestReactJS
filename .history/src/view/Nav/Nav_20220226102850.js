import React from "react";
import "./nav.scss";
const Nav = () => {
  return (
    <div className="topnav">
      <a className="active" href="#home">
        Home
      </a>
      <a href="#news">Todos</a>
      <a href="#about">About</a>
    </div>
  );
};

export default Nav;
