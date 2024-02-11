import React from 'react'

const PropsDemo = () => {
    
        return(
            <div>
                <Child first='This is from first attribute'/>
                <Child second='This is from second attribute'/>
                      
            </div>
        );
    }
    const Child=({first,second})=>{
        return(
        <>
       <h3>{first}</h3>
       <h3>{second}</h3>
        </>
        );
    }

export default PropsDemo

