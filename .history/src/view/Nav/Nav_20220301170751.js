import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./nav.scss";
const Nav = () => {
  return (
    <div className="topnav">
      <NavLink to="/" activeClassName="active" exact={true}>
        Home
      </NavLink>
      <NavLink to="/todos" activeClassName="active">
        Todos
      </NavLink>
      <NavLink to="/about" activeClassName="active">
        About
      </NavLink>
      <NavLink to="/users" activeClassName="active">
        User
      </NavLink>
    </div>
  );
};

export default Nav;
