import { useState } from "react"

const data=[
    {id:1,name:"Ashwini"},
    {id:2,name:"Abhi"},
    {id:3,name:"Bhushan"}
]
const DeleteDemo=()=>{
    const [people,setPeople]=useState(data);
   const clickDelete=(pid)=>{
    setPeople(people.filter((people)=>pid!=people.id)) 
   }
   const clickClear=()=>{
    setPeople([])
   }
  return(
    <div>
        {
        people.map((p)=>
        {
            return(
        <>
        <h1>{p.id}</h1>
        <h1>{p.name}</h1>
        <button onClick={()=>clickDelete(p.id)}>Delete</button>
        </>
        )})
    }
    <button onClick={clickClear}>Clear All</button>
    </div>       
  )
}
export default DeleteDemo;
