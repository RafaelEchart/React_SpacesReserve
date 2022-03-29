import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import './style.css';

const MenuContent = ({ closeMenu }) => (

  <>
    <nav className="nav_container">

      <ul className="ul_menu_container">
        <NavLink to="/" className="menu-options" onClick={closeMenu}>Spaces</NavLink>
        <NavLink to="/login" className="menu-options" onClick={closeMenu}>Log In</NavLink>
        <NavLink to="/signup" className="menu-options" onClick={closeMenu}>Sign Up</NavLink>

      </ul>
    </nav>
  </>
);

MenuContent.propTypes = {
  closeMenu: PropTypes.func.isRequired,
};
export default MenuContent;
