import React,{useState,useEffect, useSyncExternalStore} from 'react'

export default function UseEffect() {
  const [count,setCount]= useState(0);
  useEffect(()=>{
    setTimeout(()=>{setCount((count)=>count+1);
    },1000);
  },[])
  return (
    <div>
        Useeffect
      {count}
    </div>
  )
}
