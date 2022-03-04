import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./nav.scss";
const Nav = () => {
  return (
    <div className="topnav">
        <NavLink to="/" activeClassName="active">
        Home
          </NavLink>
          <NavLink to="/" activeClassName="active">
        Todos
      </NavLink>
      <NavLink to="/" activeClassName="active">
        Home
      </NavLink>

      <Link className="active" to="/">
        Home
      </Link>
      <Link to="/todos">Todos</Link>
      <Link to="/about">About</Link>
    </div>
  );
};

export default Nav;
