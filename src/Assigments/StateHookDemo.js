import React, { useState } from 'react'
import '../CSS/StateHookDemo.css'

const StateHookDemo = () => {
  const [count,setCount]=useState(1)
  const [fruit,setFruit]=useState("");
  const [fruitList,setFruitList]=useState([])
  const [isToggle,setIsToggle]=useState(true);
  const [personData,setPersonData]=useState({p_name:'',address:{p_city:'',p_country:''}})

  const addClick=()=>{
    setCount(count+1)
  }
  const subClick=()=>{
    setCount(count-1)
  }

  const addFruit=()=>{
    setFruitList([...fruitList,fruit])
    setFruit("")
  }

  
  const handleChange=(e)=>{
    const{name,value}=e.target;
    setPersonData({...personData,[name]:value})
  }
  const handleCountryChange=(e)=>{
    const{name,value}=e.target;
setPersonData({...personData,address:{...personData.p_city,[name]:value}})
  }
 
  return (
    <div  className="main_div">
        <div>
    <p>count : {count}</p>
    
    <button onClick={addClick}>add</button>
    <button onClick={subClick}>Sub</button>
    </div>
    <div>
    <input type='text' id='fruitid' name='fruitName' value={fruit} onChange={(e)=>setFruit(e.target.value)}/>
    <button onClick={addFruit}>Add Fruit</button>
    </div>
    <div>
    <button onClick={(e)=>setIsToggle(!isToggle)}>{isToggle?'ON':'OFF'}</button>
    </div>
    <div>
      
       Pesrson Name:
        <input type='text' name="p_name" value={personData.p_name} onChange={handleChange}/>

     
      <label>Country : 
        <input type='text' name="p_country" value={personData.address.p_country} onChange={handleCountryChange}/>
      </label>
    <label>
          City : 
          <input type="text" name="p_city" value={personData.address.p_city} 
          onChange={(e)=>setPersonData({...personData,address:{...personData.p_country,p_city:e.target.value}}
        )}/>
        </label>
    </div>
    <div>

    </div>
 </div>
    
  )
  
}

export default StateHookDemo