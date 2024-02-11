import React,{useEffect,useState} from 'react'

const url="https://dummyjson.com/products"
const FetchApi = () => {
    const[data,setData]=useState([])
    const[loading,setLoading]=useState(true)
useEffect(()=>{
    const fetchData=async()=>{
        try{
            const response=await fetch(url);
            const result=await response.json();
            console.log(result.products)
            setData(result.products)
            setLoading(false)
        }
        catch(error){
            console.error('Error fetching data:',error)
            setLoading(false)
        }
    }
    fetchData()
}

)
  return (
    <div>
       <h2>Data</h2>
       {
loading?(<p>LOading</p>):(<ul>
   {
    data.map(item=>(
        <li key={item.id}>{item.title}</li>
    ))
   }
</ul>   
) }
    
    </div>
  )
}

export default FetchApi