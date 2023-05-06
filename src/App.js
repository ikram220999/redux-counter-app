import { useSelector, useDispatch } from 'react-redux';
import './App.css';

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const inc = () => {
    dispatch({type: 'INC'})
  }

  const dec = () => {
    dispatch({type: 'DEC'})
  }

  const addTen = () => {
    dispatch({type: 'ADD', payload: 10})
  }
  return (
    <div className="App">
      <h1>Counter app</h1>
      <h2>{counter}</h2>


      <button onClick={dec}>dec</button>
      <button onClick={addTen}>add 10</button>
      <button onClick={inc}>inc</button>


    </div>
  );
}

export default App;
