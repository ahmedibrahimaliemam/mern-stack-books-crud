const booksSchema = require("../schema/books.schema");

const booksModel=require("mongoose").model("books",booksSchema) ;

module.exports=booksModel ;