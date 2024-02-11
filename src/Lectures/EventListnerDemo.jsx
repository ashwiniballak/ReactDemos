import React from 'react'
import ReactDOM from 'react-dom/client'
import {books} from '../Data/Book'
import Book from '../Demo/Book'


function EventListnerDemo() {
  return (
    <section className='booklist'>
      {books.map((book) => {
        return <Book key={book.id} {...book}></Book>
      })}
    </section>
  ) 
}
export default EventListnerDemo;

