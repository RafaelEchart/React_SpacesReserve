import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import SpaceForm from './components/Spaces/form';
import DrawerMenu from './components/DrawerMenu';
import './assets/stylesheets/App.css';
import { checkUserData } from './redux/task';
import HomePageNoSession from './components/HomePageNoSession';
import HomePageWithSession from './components/HomePageWithSession';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
<<<<<<< HEAD
import Details from './components/Spaces/Details';
=======
import Spaces from './components/Spaces';
>>>>>>> dev

function App() {
  const dispatch = useDispatch();
  const { userInformation } = useSelector((state) => state);
  const admin = userInformation.role === 'admin';

  useEffect(() => {
    dispatch(checkUserData());
  }, []);

  return (
    <div className="App">
      <DrawerMenu
        logedIn={userInformation}
        admin={admin}
      />
      <Routes>
        <>
          <Route path="/" element={userInformation ? <HomePageWithSession /> : <HomePageNoSession />} />
          {admin
            ? (
              <>
                <Route path="/new_space" element={<SpaceForm />} />
                <Route path="/spaces" element={<Spaces />} />
              </>
            )
            : null}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </>
        )}
        {userInformation
        && (
        <>
          <Route path="/" element={<HomePageWithSession />} />
          <Route path="/space/:id" element={<Details />} />
        </>
        )}

        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
