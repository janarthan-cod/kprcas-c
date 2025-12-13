import React, { useEffect, useState } from 'react'

export const UseEffect = () => {
    useEffect(()=>{
        })
    const[count,setCount]=useState(0);
    const[value,setvalue]=useState(0);
    useEffect(()=>{
        console.log("Mounted")
    },[count])
  return (
    <>
    <div>UseEffect</div>
    <h1>{count}</h1>
    <button onClick={()=>setCount(count+1)}>inc</button>
    <button onClick={()=>setvalue(value+1)}>inc</button>
    </>
    
  )
}

export default UseEffect