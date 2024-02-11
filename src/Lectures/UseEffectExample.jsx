import React,{useState,useEffect} from 'react'

const UseEffectExample = () => {
    const [count, setCount] = useState(0)
    function name(params) {
      console.log('fun')
    }
    name()
    useEffect(() => {
      count >= 2 ? (document.title = count) : (document.title = 'azad')
    }, [count])
  
    return (
      <>
        <div>{count}</div>
        <button onClick={() => setCount(count + 1)}>increment</button>
        <button onClick={() => setCount(0)}>reset</button>
        <button onClick={() => setCount(count - 1)}>decrement</button>
      </>
    )
}

export default UseEffectExample