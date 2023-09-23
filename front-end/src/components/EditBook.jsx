import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Spinner from '../smComponents/Spinner';
import { enqueueSnackbar } from 'notistack';

const EditBook = () => {
    const [book,setBook]=useState({}) ;
    const [title,setTitle]=useState("") ;
    const[loading,setLoading]=useState(false) ;
    const[submit,setSubmit]=useState(false) ;
    const [author,setAuthor]=useState("") ;
    const [publisherYear,setPublisherYear]=useState("") ;
    const {id}=useParams() ;
    const navigate=useNavigate() ;
    //get this product
    const getProduct=async()=>{
        await axios.get(`http://localhost:5000/books/${id}`).then((res)=>{
            console.log(res.data);
            setLoading(false) ;
            setBook(res.data) ;
            setTitle(res.data.title) ;
            setAuthor(res.data.author) ;
            setPublisherYear(res.data.publisherYear) ;
        }).catch((err)=>console.log(err)) ;
    }
    //method to update data
    const updateMethod=()=>{
        if(submit){
            setLoading(true) ;
              axios.patch(`http://localhost:5000/books/${id}`,{title,author,publisherYear}) 
             .then(()=>{
                setLoading(false) ;
                enqueueSnackbar(`edit success`,{variant:`success`});
                navigate("/") ;

            })
             .catch((err)=>console.log(err)) ;
        }
    }
    useEffect(()=>{
        setLoading(true) ;
        getProduct() ;
        updateMethod() ;
        

    },[submit])
  return (
    
    <div>
        {
            loading?<Spinner/>:(
                
<form onSubmit={(e)=>{e.preventDefault() ; setSubmit(true) }}>
  <div className="mb-6">
    <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
    <input onChange={(e)=>{setTitle(e.target.value)}} type="text" defaultValue={book.title} id="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
  </div>
  <div className="mb-6">
    <label htmlFor="author" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Author</label>
    <input onChange={(e)=>{setAuthor(e.target.value)}} type="text" defaultValue={book.author} id="author" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
  </div>
  <div className="mb-6">
    <label htmlFor="year" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">publisherYear</label>
    <input onChange={(e)=>{setPublisherYear(e.target.value)}} type="text" defaultValue={book.publisherYear} id="year" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
  </div>
  <button  type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>

            )
        }
    
    </div>
  )
}
export default EditBook ;
