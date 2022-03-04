import React from "react";
import { Link } from "react-router-dom";
import "./nav.scss";
const Nav = () => {
  return (
    <div className="topnav">
      <Link className="active" href="/">
        Home
      </Link>
      <Link href="/todos">Todos</Link>
      <Link href="/about">About</Link>
    </div>
  );
};

export default Nav;
