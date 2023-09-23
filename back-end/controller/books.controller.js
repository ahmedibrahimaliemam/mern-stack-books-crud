const booksModel = require("../model/books.model")
//get all books
const getAllBooks=async(req,res,next)=>{
    try{
    const found= await booksModel.find({}) ;
    if(found){
        res.json(found) ;
    }
    else{
        res.json("the data is empty!") ;
    }
    }
    catch(err){
        res.json(err) ;
    }

}
//add new book 
const addBooks= async (req,res,next)=>{
    const {title,author,publisherYear}=req.body ;
     try{
        if(!title || !author || !publisherYear ){
            res.json({message:`error all data must be provided!`})
        }
        else{
            const data= new booksModel(
                {
                    title ,
                    author ,
                    publisherYear
                }
            )
            await data.save() ;
            res.json({message:"added success!"})
        }
     }
     catch(err){
        console.log(error);
     }
}
//update books method
const updateBook= async (req,res,next)=>{
    const {id}=req.params ;
    const {title,author,publisherYear}=req.body ;
    try{
        if(!title || !author || !publisherYear ){
            res.json({message:`error all data must be provided!`})
        }
        else{
        const found= await booksModel.findByIdAndUpdate(id,{title,author,publisherYear})
        if(found){
            res.json({message:"success updating"})
        }
        else{
            res.json({message:"this id not found in db!"})
        }
    }
}
    catch(err){
        res.json({message:err})
    }

}
//delete method 
const deleteBook= async (req,res,next)=>{
    const {id}=req.params ;
    try{
    const found= await booksModel.findByIdAndDelete(id);
    if(found){
        res.status(200).json({message:"success deleting "}) ;
    }
    else{
        res.status(404).json({message:"error the book not found in db"})
    }
    }
    catch(err){
        res.json({message:err}) ;
    }
} 
//get a specific book
const getSpecificBook= async (req,res,next)=>{
    const {id}=req.params ;
    try{
        const found= await booksModel.findById(id) ;
        if(found){
            res.status(200).json(found) ;
        } 
        else{
            res.status(404).json({message:"error the book does not exist!"})
        }
    }
    catch(err){
        res.json({message:err}) ;
    }
}
module.exports={getAllBooks,addBooks , updateBook ,deleteBook , getSpecificBook} ;