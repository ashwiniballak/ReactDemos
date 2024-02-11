import React, { useEffect } from 'react';

const TimeAlert = () => {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      alert('Timed alert after 3 seconds');
    }, 3000);

    // return () => {
    //   clearTimeout(timeoutId);
    // };
  });
  return (
<button onClick={()=>document.render}>Render</button>
    )
}

export default TimeAlert


