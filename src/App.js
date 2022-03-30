import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import './assets/stylesheets/App.css';
import { checkUserData } from './redux/task';
import HomePageNoSession from './components/HomePageNoSession';
import HomePageWithSession from './components/HomePageWithSession';
import LoginPage from './components/LoginPage';

function App() {
  const dispatch = useDispatch();
  const { userInformation } = useSelector((state) => state);

  useEffect(() => {
    dispatch(checkUserData());
  }, []);

  return (
    <div className="App">
      <Routes>
        {!userInformation
        && (
        <>
          <Route path="/" element={<HomePageNoSession />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<LoginPage />} />
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
