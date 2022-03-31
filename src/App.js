import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import './assets/stylesheets/App.css';
import { actionCreator } from './redux/task';
import HomePage from './components/HomePage';
import Spaces from './components/Spaces';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actionCreator());
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<HomePage />} />
        <Route path="/signup" element={<HomePage />} />
        <Route path="/spaces" element={<Spaces />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
