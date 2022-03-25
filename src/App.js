import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './assets/stylesheets/App.css';
import { actionCreator } from './redux/task';

function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  useEffect(() => {
    dispatch(actionCreator());
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello React App -{state}</h1>
      </header>
    </div>
  );
}

export default App;
