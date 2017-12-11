import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div id="navbar">
      <h1 id="navTitle">Margaret Hamilton Interplanetary Academy of JavaScript</h1>
      <div id="navLinks">
        <div>
          <Link className="navLink" to="/campuses">Home</Link>
        </div>
        <div>
          <Link className="navLink" to="/students">Students</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
