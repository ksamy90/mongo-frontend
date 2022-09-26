import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <NavLink to="/" activeclassName="is-active" exact={true}>
        Task
      </NavLink>
      <NavLink to="/createuser" activeclassName="is-active">
        Create User
      </NavLink>
      <NavLink to="/users" activeclassName="is-active">
        Users
      </NavLink>
    </div>
  );
};

export default Header;
