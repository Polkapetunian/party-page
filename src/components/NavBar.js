import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink to="/" className={({ isActive }) => "navbar-link" + (isActive ? " activated" : "")}>Hem</NavLink>
      <NavLink to="/info" className={({ isActive }) => "navbar-link" + (isActive ? " activated" : "")}>Information</NavLink>
      <NavLink to="/anmalan" className={({ isActive }) => "navbar-link" + (isActive ? " activated" : "")}>Anmälan</NavLink>
    </div >
  )
};
export default NavBar;