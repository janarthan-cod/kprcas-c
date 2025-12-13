import React, { useState } from 'react'

 const UseState = () => {
    //const {value,setvalue}=usestate(initialvalue);
    const[count,setCount]=useState(0);
    const[value,setvalue]=useState()
    const handleDecrement =()=>{
        setCount(count -1);
    }
  return (
    <div>
        <h1>{value}</h1>
        <input type="text" onChange={(e)=>setvalue(e.target.value)}placeholder='Enter the value' />
        {/* <h1>{count}</h1>
        <button onClick={()=>setCount(count-1)}>Decrement</button>
        <button onClick={()=>setCount(0)}>Reset</button>
        <button onClick={()=>setCount(count+1)}>increment</button> */}
    </div>
  )
}

export default UseState