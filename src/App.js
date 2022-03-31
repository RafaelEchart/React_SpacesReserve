import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import DrawerMenu from './components/DrawerMenu';
import './assets/stylesheets/App.css';
import { checkUserData } from './redux/task';
import HomePageNoSession from './components/HomePageNoSession';
import HomePageWithSession from './components/HomePageWithSession';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';

function App() {
  const dispatch = useDispatch();
  const { userInformation } = useSelector((state) => state);

  useEffect(() => {
    dispatch(checkUserData());
  }, []);

  return (
    <div className="App">
      <DrawerMenu
        logedIn={userInformation}
        admin={userInformation.role === 'admin'}
      />
      <Routes>
        {!userInformation
        && (
        <>
          <Route path="/" element={<HomePageNoSession />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </>
        )}
        {userInformation
        && (
        <>
          <Route path="/" element={<HomePageWithSession />} />
        </>
        )}

        <Route path="/*" element={<Navigate to="/" />} />

      </Routes>
    </div>
  );
}

export default App;
