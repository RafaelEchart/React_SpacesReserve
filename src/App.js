import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import {
//   Routes,
//   Route,
//   Navigate,
// } from 'react-router-dom';
import './assets/stylesheets/App.css';
import { actionCreator } from './redux/task';
// import HomePage from './components/HomePage/HomePage';

function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  console.log(state);

  useEffect(() => {
    dispatch(actionCreator());
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Hello React App -
        </h1>
      </header>
    </div>
  );
}

export default App;
