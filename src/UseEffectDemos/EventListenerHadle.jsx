import React, { useEffect } from 'react';

const EventListenerHadle = () => {
    useEffect(()=>{
        const handleClick=()=>{
            console.log("Buton Clicked")
        }
        document.addEventListener('click',handleClick);
        //  return()=>{
        //     document.removeEventListener('click',handleClick)
        //  }
      
    },[])
//   return <button>Click Me</button>
}

export default EventListenerHadle





// function EventListenerComponent() {
//   useEffect(() => {
//     const handleClick = () => {
//       console.log('Button clicked');
//     };

//     document.addEventListener('click', handleClick);

//     return () => {
//       document.removeEventListener('click', handleClick);
//     };
//   }, []);

//   return <button>Click me</button>;
// }
