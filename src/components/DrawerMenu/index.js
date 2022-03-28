import React, { useState } from 'react';
import { Drawer } from 'antd';
import './style.css';

const DrawerMenu = () => {
  const [visible, setVisible] = useState(false);

  const showMenu = () => {
    setVisible(true);
  };

  const closeMenu = () => {
    setVisible(false);
  };

  return (
    <>
      <button type="button" onClick={showMenu} className="">
        Open
      </button>
      <Drawer
        title="Basic Drawer"
        placement="left"
        closable={false}
        onClose={closeMenu}
        visible={visible}
        key="left"
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
};

export default DrawerMenu;
