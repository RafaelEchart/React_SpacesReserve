import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import './style.css';

const MenuContent = ({ closeMenu, userLogedIn, userAdmin }) => (
  <>
    <nav className="nav_container">
      {userLogedIn
        ? (
          <ul className="ul_menu_container">
            <NavLink to="/" className="menu-options" onClick={closeMenu}>Spaces</NavLink>
            <NavLink to="/reservations" className="menu-options" onClick={closeMenu}>Reservations</NavLink>
            <button type="button" className="menu-options">Log out</button>
            {userAdmin
              ? (
                <>
                  <NavLink to="/" className="menu-options" onClick={closeMenu}>Add space</NavLink>
                  <NavLink to="/" className="menu-options" onClick={closeMenu}>Delete spaces</NavLink>
                </>
              )
              : null }
          </ul>
        )
        : (
          <ul className="ul_menu_container">
            <NavLink to="/" className="menu-options" onClick={closeMenu}>Spaces</NavLink>
            <NavLink to="/login" className="menu-options" onClick={closeMenu}>Log In</NavLink>
            <NavLink to="/signup" className="menu-options" onClick={closeMenu}>Sign Up</NavLink>
          </ul>
        )}
    </nav>
  </>
);

MenuContent.propTypes = {
  closeMenu: PropTypes.func.isRequired,
  userLogedIn: PropTypes.bool.isRequired,
  userAdmin: PropTypes.bool.isRequired,
};
export default MenuContent;
