import React, { useEffect, useState } from 'react'
const url='https://jsonplaceholder.typeicode.com/todos'
const FetchData = () => {
    const [todos,setTodos]=useState([]);

    // const getUsers=async()=>{
    //     const response=await fetch(url);
    //     const data=
    // }
    useEffect(()=>{
        const fetchTodos=async()=>{
           const response=await fetch(url)
           const todos=await response.json();
           setTodos(todos)
        }
    fetchTodos()
    },[]
    )
    console.log(todos)
  return (
  
    <div>UrlDemo</div>
  )
}

export default FetchData