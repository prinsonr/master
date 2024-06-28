import React from 'react'

export default function SpreadOp() {
    const h=["a","b","c","z"];
    const g=["d","e","f"];
    const s=[...h,...g];
   const k=["a","c","f","g"];
    const j=[...k, 6, 7, 9];

    const ob1={
        name:"Rahul",
        age:45,
        address:"Mangalore",
    };
   const ob2={
        ...ob1,
        //tel:987654368,
   };
  return (
    <div>
      <h1>{s}</h1>
      <h1>{ob1.name}</h1>
      {ob2.name}
    </div>
  )
}
