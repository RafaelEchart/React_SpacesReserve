import React, { useState } from 'react';
import { Drawer } from 'antd';
import MenuContent from './MenuContent';
import TitleLogo from '../../assets/images/title-logo.png';
import './style.css';

const DrawerMenu = () => {
  const [visible, setVisible] = useState(false);

  const openMenu = () => {
    setVisible(true);
  };

  const closeMenu = () => {
    setVisible(false);
  };

  return (
    <>
      <button type="button" onClick={openMenu} id="hamburger-menu" className="hamburger-menu">
        <>
        </ >
      </button>

      <Drawer
        title={<img alt="Title Logo" src={TitleLogo} className="title-logo" />}
        placement="left"
        closable={false}
        onClose={closeMenu}
        visible={visible}
        key="left"
      >
        <MenuContent />
      </Drawer>
    </>
  );
};

export default DrawerMenu;
