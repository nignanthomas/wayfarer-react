import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => (
  <div className="container">
    <div id="branding">
      <Link to="/">
        <h3>wayFarer</h3>
      </Link>
    </div>
    <nav>
      <div className="hamburger-menu" id="hamburger">
        <div className="bar1" />
        <div className="bar2" />
        <div className="bar3" />
      </div>
      <div className="subnav" id="signs">
        <ul>
          <Link to="/signup" className="menu-link">
            <li className="signup">signup</li>
          </Link>
          <Link to="/signin" className="menu-link">
            <li className="signup">signin</li>
          </Link>
        </ul>
      </div>
    </nav>
  </div>
);

export default Menu;
