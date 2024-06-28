// pages/Map.jsx
import React from 'react';

export default function Map() {
  // using array
  const ar = [10, 20, 30, 40];
  const ar1 = ['orange', 'apple', 'grapes', 'mango'];
  
  // using object
  const data = [
    { name: 'Ragav', age: 40 },
    { name: 'Tara', age: 30 },
    { name: 'Astral', age: 35 },
  ];

  return (
    <div  style={{textAlign:'center'}}>
      {ar.map((item, index) => <h1 key={index}>{item}</h1>)}
      {ar1.map((item, index) => <h1 key={index}>{item}</h1>)}
      {data.map((item, index) => (
        <div key={index}>
          <h1>{item.name}</h1>
          <h1>{item.age}</h1>
        </div>
      ))}
    </div>
  );
}
