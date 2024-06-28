// pages/TernaryOp.jsx
import React from 'react';

export default function TernaryOp() {
  const shortalert1 = () => {
    alert('you have clicked left button');
  };
  
  const shortalert2 = () => {
    alert('you have clicked right button');
  };

  return (
    <div  style={{textAlign:'center'}}>
      <div>
        TernaryOperator
      </div>
      <button onClick={shortalert1}>Button left</button>
      <button onClick={shortalert2}>Button right</button>
    </div>
  );
}
