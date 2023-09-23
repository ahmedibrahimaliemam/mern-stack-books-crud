import React from 'react'
import { Link, useParams } from 'react-router-dom';
import { useEffect,useState } from 'react';
import axios from 'axios';
import Spinner from '../smComponents/Spinner';
 const ShowBook = () => {
  const [book,setBook]=useState({}) ;
  const [loading,setLoading]=useState(false) ;
  const {id}=useParams() ;
  useEffect(()=>{
    setLoading(true) ;
    axios.get(`http://localhost:5000/books/${id}`)
    .then((res)=>{
      console.log(res.data.id);
      setBook(res.data) ;
      console.log(book);
      setLoading(false) ;
    })
    .catch((err)=>{
      console.log(err);
      setLoading(false) ;
    })
    

  },[]);
  return (
    <div>
      {
        loading?<Spinner/>:<>
        <h1 className='text-center'>title:{book.title}</h1>
        <span className='text-red-800 block text-center'>author:{book.author}</span>
        <h1 className='text-center'>since:{new Date().getFullYear()- +book.publisherYear} years</h1>
        </>
      }
      
    </div>
  )
}
export default ShowBook ;
