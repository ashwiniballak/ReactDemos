import React,{useEffect, useState} from 'react';
import { books } from '../Data/Book';
import Book from './Book';
const FilterDemo = () => {

const fltrBooks= books.filter((book)=> book.prize>180)   
return(
  fltrBooks.map((book,index)=>{
  return( <Book {...book} id={index}/>)
  }
  )
) 
  
}

export default FilterDemo;