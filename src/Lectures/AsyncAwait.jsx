import React, { useEffect, useState } from 'react'

const  AsyncAwait=()=> {
  const [user,setUser]=useState([])

 
  const getUser = async () => {
    const r = await fetch('https://api.github.com/users')
    const u = await r.json()
    setUser(u)
  }
  // id, login, avatar_url, html_url
  useEffect(() => getUser(), [])

  // return (<div>{user.map(({ id, login, avatar_url, html_url }) => {
  //   <>

  //   </>
  // })}</div>)

  return (
    <>
      {user.map(function (params) {
        return (
          <>
            <p>1</p>
          </>
        )
      })}
    </>
  )
}


export default AsyncAwait