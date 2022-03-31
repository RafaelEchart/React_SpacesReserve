import React from 'react';

import './style.css';
import DrawerMenu from '../DrawerMenu';
import Spaces from '../Spaces/Spaces';

const HomePageWithSession = () => (
  <div className="spaces-page">
    <DrawerMenu />
    <Spaces />
  </div>
);

export default HomePageWithSession;
