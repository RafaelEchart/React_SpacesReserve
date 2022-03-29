import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import './style.css';

const MenuContent = ({ closeMenu }) => (

  <>
    <nav className="nav_container">

      <ul className="ul_menu_container">
        <li key="/">
          <NavLink to="/" onClick={closeMenu}>Spaces</NavLink>
        </li>
        <li key="/Login">
          <NavLink to="/login" onClick={closeMenu}>Log In</NavLink>
        </li>
        <li key="/signup">
          <NavLink to="/signup" onClick={closeMenu}>Sign Up</NavLink>
        </li>

      </ul>
    </nav>
  </>
);

MenuContent.propTypes = {
  closeMenu: PropTypes.func.isRequired,
};
export default MenuContent;
