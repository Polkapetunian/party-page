import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
      <Link to="/" className="navbar-link">Hem</Link>
      <Link to="/info" className="navbar-link">Information</Link>
      <Link to="/anmalan" className="navbar-link">Anmälan</Link>
    </div>
  )
};
export default NavBar;