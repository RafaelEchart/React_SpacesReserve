import React from 'react';
import { Carousel } from 'antd';
import FirstImage from '../../assets/images/MainPage_NoLogin/first_banner.png';
import './style.css';
import '../../assets/stylesheets/button-29.css';

const MainSlideShow = () => (
  <>
    <Carousel dotPosition="right" draggable>
      <div>
        <div className="mainPage_NoLogin first_banner">
          <img src={FirstImage} alt="First_Banner" />
          <h2>FIND YOUR FLEXIBLE WORKSPACE</h2>
          <button className="button-29 see_spaces_button" type="button">
            See Spaces
            <ion-icon name="caret-forward-circle-outline" />
          </button>
        </div>
      </div>
      <div>
        <div className="mainPage_NoLogin second_banner">
          <div className="second_banner_info_container">
            <div className="second_banner_info">
              <h2 className="second_banner_title">BOOK A SPACE FREE-TIME</h2>
              <hr className="second_banner_line_style" />
              <span className="second_banner_text">
                Spaces offers companies of all sizes the global scale and
                flexibility to adapt to uncertainty. Find the office space you need,
                where and when you need it. It&#39;s hybrid: designed for you by Spaces.
              </span>
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  </>
);

export default MainSlideShow;
