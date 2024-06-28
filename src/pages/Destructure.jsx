import React from 'react'

export default function Destructure() {

    const a=["Radha", 45,"Johan","karl"];
    //array destructure
    const [d, f, g, h] =a;
    const obj={
        name:"Radha",
        age:45,
        address:"Mangalore",
    };
    //object destructure
    const {name, age, address}= obj;
  return (
    <div>
      <h1>{d}</h1>
      <h1>{f}</h1>
      <h1>{address}</h1>
    </div>
  )
}
