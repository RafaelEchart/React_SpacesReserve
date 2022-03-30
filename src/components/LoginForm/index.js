import React from 'react';
import './style.css';

const LoginForm = () => (
  <>
    <div className="login_container">
      <div className="session">
        <div className="left" />
        <form action="" className="log-in" autoComplete="off">
          <h4 className="login_title">
            We are
            <span className="login_span">SPACES</span>
          </h4>
          <p className="login_p">Welcome back! Log into your account and check the best space for your company!</p>
          <div className="floating-label">
            <input placeholder="Email" className="login_input" type="email" name="email" id="email" autoComplete="off" />
            <div className="icon">
              <ion-icon name="mail-outline" class="email_icon" />

            </div>
          </div>
          <div className="floating-label">
            <input placeholder="Password" className="login_input" type="password" name="password" id="password" autoComplete="off" />
            <div className="icon">
              <ion-icon name="key-outline" class="email_icon" />
            </div>

          </div>
          <button type="submit" onClick="return false;" className="login_button">Log in</button>
        </form>
      </div>
    </div>
  </>
);

export default LoginForm;
