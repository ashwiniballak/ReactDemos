import React, { useState } from 'react'
import '../index.css'
import AddDemo from './AddDemo';
const UseStateDemo = () => {
    const[count,setCount]=useState(1);
    const clickAdd=()=>{
        setCount(count+1);
    }
    const clickSub=()=>{
        setCount(count-1);
    }
  return (
    <div>
        <h2>Count:{count}</h2>
        <button onClick={clickAdd}> + </button>
        <button onClick={clickSub}> - </button>
        <AddDemo/>
 </div>
  )
}

export default UseStateDemo