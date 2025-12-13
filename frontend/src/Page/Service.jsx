import React, { useState } from 'react'
 const Service = () => {
  const[show,setshow]=useState(true);
  const toggleshow =()=>{
    setshow(show===true?false:true)
  }
  return (
    <div>
      <button onClick={toggleshow}>{show?"Hide":"show"}</button>
      {show&&<h1>Lorem ipsum dolor sit, amet.</h1>}
      
    </div>
  )
}

export default Service