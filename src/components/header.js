import React from "react";
import { NavLink } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <NavLink to="/" activeclassName="is-active" exact={true}>
        Users
      </NavLink>
      <NavLink to="/createuser" activeclassName="is-active">
        Create User
      </NavLink>
    </div>
  );
};

export default Header;
