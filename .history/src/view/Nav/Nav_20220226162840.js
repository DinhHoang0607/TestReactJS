import React from "react";
import { Link } from "react-router-dom";
import "./nav.scss";
const Nav = () => {
  return (
    <div className="topnav">
      <a className="active" href="/">
        Home
      </a>
      <Link href="/todos">Todos</Link>
      <Link href="/about">About</Link>
    </div>
  );
};

export default Nav;
