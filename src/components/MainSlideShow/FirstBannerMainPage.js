import React from 'react';
import FirstImage from '../../assets/images/MainPage_NoLogin/first_banner.png';
import './style.css';
import '../../assets/stylesheets/button-29.css';

const FirstBannerMainPage = () => (
  <>
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
  </>
);

export default FirstBannerMainPage;
