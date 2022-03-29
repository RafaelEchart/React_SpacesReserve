import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const MenuContent = () => (
  <>
    <nav className="nav_container">

      <ul className="ul_menu_container">
        <li key="/">
          <Link to="/">Spaces</Link>
        </li>
        <li key="/Login">
          <Link to="/calculator">Log In</Link>
        </li>
        <li key="/signup">
          <Link to="/quote">Sign Up</Link>
        </li>

      </ul>
    </nav>
  </>
);
export default MenuContent;
