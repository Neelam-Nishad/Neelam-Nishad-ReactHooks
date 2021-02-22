import React, { useState } from 'react';
import './App.css';

const App = () => {

  let newTime = new Date().toLocaleTimeString();
  const [ctime, setCtime] = useState(newTime);
  const UpdateTime = () => {
    newTime = new Date().toLocaleTimeString();
    setCtime(newTime);
  }
  return(
    <>
      <h1>{ctime}<br/></h1>
      <button onClick={UpdateTime}> Get Time</button>
    </>
  );
}

export default App;
