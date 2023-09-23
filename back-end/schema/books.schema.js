const Schema=require("mongoose").Schema ;
const booksSchema=new Schema({
    title:{type:String , required:[true , "data must contain title!"]} ,
    author:{type:String,required:[true , "data must contain author name!"]} ,
    publisherYear:{type:Number , required:[true , "data must contain publisher year!"]}
 } , 
    {
        timestamps:true ,
    }

)
module.exports=booksSchema ;