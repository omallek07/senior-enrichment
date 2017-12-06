import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div id="navbar">
    <h1>Campus Manager</h1>
    <div className="navLink">
      <Link to="/campuses">Home</Link>
    </div>
    <div className="navLink">
      <Link to="/students">Students</Link>
      </div>
    </div>
  )
}

export default Navbar;
