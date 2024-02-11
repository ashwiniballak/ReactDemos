import React, { useState } from 'react'
import { data } from '../Data/Data'

const UseStateDemo = () => {
  const[info,setInfo]=useState(data)

  const[text,setText]=useState('ON')
  const handleClick=()=>{
    if(text=='ON')
    setText('OFF');
    else
    setText('ON')
  }
  const deleteHandle=(param)=>{
setInfo(
  info.filter((inf)=>{
    return(param!==inf.id)
  }
  
  )
)
  }

  return (
    <div>
      <h1>{text}</h1> 
    <button onClick={handleClick} >Change Text</button>
      {
        info.map((d)=>{
        return(
          <>
          <h1>{d.id}</h1>
          <h1>{d.name}</h1>
          <button onClick={()=>deleteHandle(d.id)}>Delete</button>
          </>
        )}
        )
       
        

      }
    </div> 
      )
   
  
}

export default UseStateDemo