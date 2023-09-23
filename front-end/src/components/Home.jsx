import React from 'react'
import { useEffect , useState } from 'react';
import axios from 'axios';
import Spinner from '../smComponents/Spinner';
import { Link } from 'react-router-dom';
import {AiOutlineEdit} from "react-icons/ai" ;
import {BsInfoCircle} from "react-icons/bs" ;
import {MdOutlineAddBox , MdOutlineDeleteForever} from "react-icons/md" ;
import "./Home.css" ;
import { enqueueSnackbar } from 'notistack';


const Home = () => {
const [books,setBooks]=useState([]) ;
const [loading,setLoading]=useState(false) ;
const [deletedId,setDeletedId]=useState("") ;
const [submitDelete,setSubmitDelete]=useState(false) ;
// method to delete book
const deleteBook=async()=>{
    if(submitDelete){
        await axios.delete(`http://localhost:5000/books/${deletedId}`)
        .then((res)=> {setSubmitDelete(false) ; enqueueSnackbar(`deleted successfully`,{variant:`error`})})
        .catch((err)=>console.log(err)) ;
    }
}
useEffect(()=>{
    setLoading(true) ;
    axios.get("http://localhost:5000/books").then((res)=>{
        setBooks(res.data) ;
        console.log(books);
        setLoading(false) ;
})
    .catch((err)=>console.log(err)) ;
    deleteBook() ;
},[submitDelete])

  return (
    <div className='p-4'>
        <div className='flex justify-between items-center'>
            <h1 className='text-3xl my-8'>Books List</h1>
            <Link to="/books/create">
                <MdOutlineAddBox className='text-sky-800 text-4xl' />
            </Link>
        </div>
        {(loading)?<Spinner/>:
        <table className="table-fixed w-full">
        <thead>
          <tr>
            <th>No</th>
            <th>Title</th>
            <th>Author</th>
            <th>Year</th>
            <th>Operation</th>
          </tr>
        </thead>
        <tbody>
            {books.map((book,index)=>(
                  <tr key={book._id} className='text-center'>
                  <td>#{index+1}</td>
                  <td>{book.title}</td>
                  <td>{book.author}</td>
                  <td>{book.publisherYear}</td>
                  <td>
                    <div className='flex justify-center gap-x-4'>
                        <Link to={`/books/details/${book._id}`}>
                            <BsInfoCircle className='text-2xl text-green-800'/>
                        </Link>
                        <Link to={`/books/edit/${book._id}`}>
                            <AiOutlineEdit className='text-2xl text-yellow-600'/>
                        </Link>
                        <div className='cursor-pointer' onClick={()=>{setDeletedId(book._id); console.log(deletedId) ; setSubmitDelete(true)}}>
                            <MdOutlineDeleteForever className='text-2xl text-red-600'/>
                        </div>
                    </div>
                  </td>
                </tr>
            ))}
    
        </tbody>
      </table>
        }
    </div>
  )
}
export default Home ;
