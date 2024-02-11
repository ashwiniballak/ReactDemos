import React from 'react'
const book=[{bname:"Abc", bauthor:'ABCAuthor',Prize:200},
{bname:"EFG", bauthor:'EFGAuthor',Prize:200},
{bname:"XYZ", bauthor:'XYZAuthor',Prize:200},
{bname:"LMN", bauthor:'LMNAuthor',Prize:200}]

//*** 1.
// const CompCallDemo = () => {
//     return(<div>
//         {
//             book.map((bookinfo)=>(<Book {...bookinfo}/>))
//         }
//     </div>    
//     )
//    }


// const Book=({bname,bauthor,Prize})=>{
//     return(
// <>
// <h5>Name:{bname}</h5>
// <h5>Prize:{bauthor}</h5>
// <h5>Author:{Prize}</h5>
// <hr/>
// </>
// )}

//*** 2. without{}*//

// const CompCallDemo = () => (<div>
//         {
//             book.map((bookinfo)=>(<Book {...bookinfo}/>))
//         }
//     </div>    
//     )

// const Book=({bname,bauthor,Prize})=>
//     (
// <>
// <h5>Name:{bname}</h5>
// <h5>Prize:{bauthor}</h5>
// <h5>Author:{Prize}</h5>
// <hr/>
// </>
// )

//3.
// const CompCallDemo = () => book.map((bookinfo)=>(<Book {...bookinfo}/>))

// const Book=({bname,bauthor,Prize})=>
// <>
// <h5>Name:{bname}</h5>
// <h5>Prize:{bauthor}</h5>
// <h5>Author:{Prize}</h5>
// <hr/>
// </>

//******4.

// const CompCallDemo=()=>book.map(bookinfo=><Book {...bookinfo}/>)


//******5 Using props*/
const Book=(props)=>{
    const{bname,bauthor,Prize}=props.info;
    console.log("props",bname)
return(
<>
<h5>Name:{bname}</h5>
<h5>Prize:{bauthor}</h5>
<h5>Author:{Prize}</h5>
<hr/>
</>
)
}

const CompCallDemo=()=>book.map((bookinfo,index)=><Book key={index} info={bookinfo}/>)
export default CompCallDemo

