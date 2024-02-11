import React, { useState } from 'react'
import DisplayAllBooks from './DisplayAllBooks'

const AddDemo = () => {
  const [bookDetails,setBookDetails]=useState({bName:"",bAuthor:"",bPrize:""});
  const [bookList,setBookList]=useState([]);

  const handleChange=(e)=>{
      bookDetails[e.target.name]=e.target.value;
      setBookDetails({...bookDetails,bookDetails})
  }
  const addBook=()=>{
    setBookList([...bookList,bookDetails])
    alert("Book Added succesfully!");
    setBookDetails({bName:"",bAuthor:"",bPrize:""});
   
  }
  
  return (
    <div >
     
      <div className='add_book_div'>
        <div>
        <label>Book Name : </label>
        <input type='text' name='bName' id='bid' value={bookDetails.bName} onChange={e=>{handleChange(e)}}/>
        </div>
        <div>
        <label>Book Author: </label>
        <input type='text' name="bAuthor" id='bauthor' value={bookDetails.bAuthor} onChange={e=>{handleChange(e)}}/>
        </div>
        <div>
        <label>Prize : </label>
        <input type='text' name="bPrize" id='bPrize' value={bookDetails.bPrize} onChange={e=>{handleChange(e)}}/>
        </div>
        <div>
          <button onClick={addBook}>Add Book</button>
        </div>
    </div>
    </div>
  )
}

export default AddDemo