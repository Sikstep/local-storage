import React, {useState} from 'react';
import './App.css';

function App() {

  const [value, setValue] = useState<number>(0);


  const incHandler = () => {
    setValue((previus) => previus +1)
  };
  return (
    <div className="App">
      <h1>{value}</h1>
      <button onClick={incHandler}>inc</button>
    </div>
  );
}

export default App;
