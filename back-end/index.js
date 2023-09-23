const express = require('express') ;
const run =require("./db-connection") ;
const routes = require('./routes/books.routes');
const cors=require("cors") ;
const app = express() ;
const port =  5000 ;
//middelware
app.use(express.json()) ;
app.use(cors()) ;
app.use("/books",routes) ;
//database connection method
run() ;

app.get('/', (req, res) => res.send('Hello World!')) ;
app.listen(port, () => console.log(`Example app listening on port ${port}!`)) ;