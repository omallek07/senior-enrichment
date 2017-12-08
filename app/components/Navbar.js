import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div id="navbar">
    <h1 id="navTitle">Campus Manager</h1>
      <div className="navDiv">
        <div className="homeDiv">
          <Link className="navLink" to="/campuses">Home</Link>
        </div>
        <div className="studentsDiv">
          <Link className="navLink" to="/students">Students</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
