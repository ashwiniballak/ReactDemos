import React, { useEffect, useState } from 'react'
const url='https://api.github.com/users'
const UrlDemo = () => {
    const [loading,setLoading]=useState(true);
    const[isError,setIsError]=useState(false);
    const [user,setUsers]=useState('default user');

    // const getUsers=async()=>{
    //     const response=await fetch(url);
    //     const data=
    // }
    useEffect(function name(params){
        fetch(url)
        .then((resp)=>{
if(resp.status>=200 &&resp.status<=299){
    return resp.json()
}
    else{ setIsError(true)  
    
    setLoading(false)}
throw new Error(resp.statusText)
        })
    }
    .then((user)=>{
        const {login}=user;
        setUsers(login)
        setLoading(false)
    })
    .catch
    ,[])
  return (
    <div>UrlDemo</div>
  )
}

export default UrlDemo