import React from 'react' ;
import { Route , Routes } from 'react-router-dom';
import Home from './components/home';
import CreateBook from './components/createBook';
import ShowBook from './components/ShowBook';
import EditBook from './components/editBook';

 const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/books/create' element={<CreateBook/>}/>
      <Route path='/books/details/:id' element={<ShowBook/>}/>
      <Route path='/books/edit/:id' element={<EditBook/>}/>
    </Routes>
  )
}
export default App ;
