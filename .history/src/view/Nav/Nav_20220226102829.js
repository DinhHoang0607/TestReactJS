import React from "react";
import "./nav.scss";
const Nav = () => {
  return (
    <div class="topnav">
      <a class="active" href="#home">
        Home
      </a>
      <a href="#news">Todos</a>
      <a href="#contact">Contact</a>
      <a href="#about">About</a>
    </div>
  );
};

export default Nav;
