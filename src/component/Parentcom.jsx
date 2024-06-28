import React from 'react'
import Props from './Props'

export default function Parentcom() {
    const items ={
        name:"abc",
        age:"40",
        email:"abc@gmail.com",
    }
  return (
    <div>

      <Props name2={items}/>


    </div>
  )
}
