// pages/ArrowFunction.jsx
import React from 'react';

export default function ArrowFunction() {
  const a = 10;
  const s = 'abc';
  
  const Arrow = () => <h1 > Hello </h1>;
  
  const AddNumber = (a, b) => a + b;
  
  const Hello1 = () => (
    <>
      <h1> Hello </h1>
      <p> <b> Hello </b></p>
    </>
  );

  return (
    <div style={{textAlign:'center'}}>
       <div>
      {a}
      {s}
      {/* to call function */}
      <Arrow />
      {AddNumber(2, 6)}
      {Hello1()}
    </div>
    </div>
  );
}
