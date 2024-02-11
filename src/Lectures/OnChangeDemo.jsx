import React, { useState,useEffect } from 'react'

const OnChangeDemo = () => {
  const [name,setName]=useState('')
useEffect(()=>{
    document.title=name?`Hello,${name}`:'Hello Stranger'
},[name])
  return (
   <>
   <input type='text'
   placeholder='please Type something'
   value={name}
   onChange={(e)=>{
    setName(e.target.value)
   }}
   />
   </>
  )
}

export default OnChangeDemo