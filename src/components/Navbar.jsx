import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <h1>FamCare</h1>
      <ul className="flex flex-row gap-5">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/test">Anxiety Test</Link>
        </li>
        <li>
          <Link to="/article">Article</Link>
        </li>
        <li>
          <Link to="/forum">Forum</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
