import React from 'react'



    const Book=({img,title,author,prize})=>{
        console.log("In Book Component")
        return(
                         <div  className='book'>
                         <img src={img} alt="Book Image"></img>
                         <h5>Title:{title}</h5>
                         <h6>Author:{author}</h6>
                         <h6>Prize:{prize}</h6>

                    </div>  
    )
    }  

export default Book

// const Book = ({ img, title, author }) => {
//     // attribute, eventHandler
//     // onclick , onMouseOver
//     const clickHandler = () => {
//       alert('hello world')
//     }
//     return (
//       <article className='book'>
//         <img src={img} alt='' />
//         <h3>{author}</h3>
//         <h1 onClick={() => console.log(title)}>{title}</h1>
//         <button type='button' onClick={clickHandler}>
//           hello
//         </button>
//       </article>
//     )
//   }