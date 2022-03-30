import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import './assets/stylesheets/App.css';
import { checkUserData } from './redux/task';
import HomePage from './components/HomePage_NoLogin';
import LoginPage from './components/LoginPage';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserData());
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<HomePage />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
