import React from 'react';
import { Carousel } from 'antd';
import FirstBannerMainPage from './FirstBannerMainPage';
import SecondBannerMainPage from './SecondBannerMainPage';
import ThirdBannerMainPage from './ThirdBannerMainPage';
import './style.css';
import '../../assets/stylesheets/button-29.css';

const MainSlideShow = () => (
  <>
    <Carousel dotPosition="right" draggable>
      <FirstBannerMainPage />
      <SecondBannerMainPage />
      <ThirdBannerMainPage />
    </Carousel>
  </>
);

export default MainSlideShow;
