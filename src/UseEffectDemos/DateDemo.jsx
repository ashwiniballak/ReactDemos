import React, { useState, useEffect } from 'react';

const DateDemo = () => {
    const [currentDateTime, setCurrentDateTime] = useState(new Date());
    
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentDateTime(new Date());
        }, 3000);
        
        return () => clearInterval(intervalId);
        
    }, []);
        return (
        <div>
        <h2>Current Date and Time:</h2>
        <p>{currentDateTime.toLocaleString()}</p>
      </div>
    )
   
  }
  export default DateDemo

