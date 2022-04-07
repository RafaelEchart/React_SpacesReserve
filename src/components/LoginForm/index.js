import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { message } from 'antd';
import { userIsLogged } from '../../redux/task';

import './style.css';

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({ email: '', password: '' });

  const formDataHandler = (e, field) => {
    const input = e.target.value;
    switch (field) {
      case 'email':
        setLoginData({ ...loginData, email: input });
        break;

      case 'password':
        setLoginData({ ...loginData, password: input });
        break;

      default:
        break;
    }
  };

  const submitLogin = async () => {
    if (loginData.email.length && loginData.password.length) {
      try {
        const backendResponse = await fetch('http://localhost:3000/login', {
          method: 'post',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            user: {
              email: loginData.email,
              password: loginData.password,
            },
          }),
        });
        if (!backendResponse.ok) {
          throw new Error('Wrong crendentials, try again!');
        }
        const backendResponseData = await backendResponse.json();

        const token = backendResponse.headers.get('Authorization');
        dispatch(userIsLogged(token, backendResponseData.data));
        message.success(`Welcome back, ${backendResponseData.data.name}!`);
        navigate('/');
      } catch (err) {
        message.error(err.toString());
      }
    } else {
      message.warning('The inputs cannot we blank!');
    }
  };

  return (
    <>
      <div className="login_container">
        <div className="session">
          <div className="left" />
          <div action="" className="log-in" autoComplete="off">
            <h4 className="login_title">
              We are
              <span className="login_span">SPACES</span>
            </h4>
            <p className="login_p">Welcome back! Log into your account and check the best space for your company!</p>
            <div className="floating-label">
              <input placeholder="Email" className="login_input" type="email" name="email" onChange={(e) => formDataHandler(e, 'email')} id="email" autoComplete="off" />
              <div className="icon">
                <ion-icon name="mail-outline" class="email_icon" />

              </div>
            </div>
            <div className="floating-label">
              <input placeholder="Password" className="login_input" type="password" name="password" onChange={(e) => formDataHandler(e, 'password')} id="password" autoComplete="off" />
              <div className="icon">
                <ion-icon name="key-outline" class="email_icon" />
              </div>

            </div>
            <button type="submit" onClick={submitLogin} className="login_button">Log in</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
