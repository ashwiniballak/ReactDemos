import React, { useState } from 'react'

function ClickDemo() {
  const [click,setclick]=useState(0);

  const setter=()=>{
    setclick(click+1);
     
  } 
  let content;

  if(click%2===0){
  content=  <p>The number of times you have clicked is even</p>
  }else{
   content= <p>The number of times you have clicked is odd</p>
  }
  return (
   
    <div>
      
      <h1>{content}</h1>

      {/* {click%2===0?(<h2>The number of times you have clicked is even</h2>):(<h2>The number of times you have clicked is odd</h2>)} */}

      

      
      <button onClick={setter}> Click Me</button>
    </div>
  )
}

export default ClickDemo