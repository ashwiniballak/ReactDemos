// import  ReactDOM from "react-dom/client";
// const container=document.getElementById('root');
// const root=ReactDOM.createRoot(container)

// const book=[{img:'https://m.media-amazon.com/images/I/611T1L9m92L._AC_UY218_.jpg',
// title:'Yes I am the Creator : Manifest your Dream Life',
// author:'Ashish Dwivedi'
// },
// {img:'https://m.media-amazon.com/images/I/611T1L9m92L._AC_UY218_.jpg',
// title:'Yes I am the Creator : Manifest your Dream Life',
// author:'Ashish Dwivedi'
// },
// {img:'https://m.media-amazon.com/images/I/81Rxr5gVSML._AC_UY218_.jpg',
// title:'Yes I am the Creator : Manifest your Dream Life',
// author:'Ashish Dwivedi'
// }
// ]

// const book1={img:'https://m.media-amazon.com/images/I/611T1L9m92L._AC_UY218_.jpg',
// title:'Yes I am the Creator : Manifest your Dream Life',
// author:'Ashish Dwivedi'
// }
// const book2={img:'https://m.media-amazon.com/images/I/71kvPsigmDL._AC_UY218_.jpg',
// title:'EMPOWERING THOUGHTS',
// Author:'ANIL SHAMRAO RAMTEKE'
// }
// const Book=({img,title,author})=>{
//   return(
//     <>
//     <img src={img} alt="Book Image"></img>
//     <h5>Title:{title}</h5>
//     <h6>Author:{author}</h6>
//     </>
//   )
// }
// const Booklist=()=>{
  
//   return(
//     <>
//   <Book  {...book1}/>
//   <Book {...book2}/>
//   </>
//   )
// }
// root.render(<Booklist/>)


import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
