import React, { useState } from 'react';

export default function Usestate() {
  const [count, setCount] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

 const setToDarkMode=()=> {
  setDarkMode(true)
 };
 const setToLightMode=()=> {
  setDarkMode(false)
 };
  return (
    <div style={{ backgroundColor: darkMode ? 'black' : 'white', color: darkMode ? 'white' : 'black', minHeight: '100vh', transition: 'background-color 0.3s ease' ,textAlign:'center'}}>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <br/>
      <br/>
      <button onClick={setToDarkMode}>Dark Mode</button>
      <button onClick={setToLightMode}>Light Mode</button>
    </div>
   
  );
}
