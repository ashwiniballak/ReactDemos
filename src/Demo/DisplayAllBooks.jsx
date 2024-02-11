import React from 'react'
import '../CSS/DisplayAllBooks.css'
import AddDemo from './AddDemo'

const DisplayAllBooks = () => {
  return (
   <div className='main_div'>
   <div className='main_table_div'>
    <div className='heading_div'>
    <h4>Book Title</h4>
    <h4>Book Author</h4>
    <h4>Book Prize</h4>
    <h4>Add Book</h4>
    <h4>Update</h4>
    <h4>Delete</h4>
    </div>
   </div>
   <div >
   <AddDemo/>
   </div>
   </div>
  )
}

export default DisplayAllBooks