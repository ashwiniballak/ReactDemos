import React, { useEffect, useState } from 'react'

const UseEffectDemo = () => {
    const[count,setCount]=useState(1)
    const[text,setText]=useState(1)
// *1*
//   useEffect(()=>{
    // console.log(count)
    //     setText("Render "+count)
    // }
    // )

    // useEffect(()=>{
    //     setText("Render "+count)

    // },
    // [count]
    // )

    // useEffect(()=>{
    //     setText("Render "+count)

    // },
    // [])
    // return (
    //     <div>
    //         <h1>{text}</h1>
    //         <button onClick={()=>setCount(count+1)}>{count}</button>
    //         </div>
    //   )
    //*2*
    // useEffect(() => {
    //     const interval = setInterval(() => {
    //       setCount(count => count + 1);
    //     }, 1000);
    
    //     return () => clearInterval(interval);
    //   },[])
    //   return <div>Timer: {count}</div>;
//*3//
const[msg,setMsg]=useState("First")
useEffect(()=>{
<div>Timer msg: {count}</div>},[count==10])
      return (
         <div>
      
            <h1>{text}</h1>
            <button onClick={()=>setCount(count+1)}>{count}</button>
             </div>
       )
    
  
       
}

export default UseEffectDemo