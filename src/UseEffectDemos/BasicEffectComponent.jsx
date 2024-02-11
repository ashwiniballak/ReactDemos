import React, {useEffect,useState}from 'react'

const BasicEffectComponent = () => {
    const[count,setCount]=useState(0);
    useEffect(()=>{
        console.log('component Mounted')
        return()=>{
            console.log("Component will unmount")

        }
    },[count])
        console.log({count});
    return (<>
    <div>BasicEffectComponent</div>
    <button onClick={()=>setCount(count+1) }>Render</button>
 
    </>
  )

}

export default BasicEffectComponent