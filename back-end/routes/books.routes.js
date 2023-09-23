const { addBooks, getAllBooks, updateBook, deleteBook, getSpecificBook } = require("../controller/books.controller");

const routes=require("express").Router() ;
routes.get("/",getAllBooks) ;
routes.post("/",addBooks) ;
routes.patch("/:id",updateBook) ;
routes.delete("/:id",deleteBook) ;
routes.get("/:id",getSpecificBook) ;








module.exports=routes ;