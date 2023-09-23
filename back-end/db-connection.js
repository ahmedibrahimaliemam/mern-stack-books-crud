
const mongoose=require("mongoose") ;
require("dotenv").config() ;
const run= async()=>{
    await mongoose.connect(process.env.URI,{useUnifiedTopology:true , useNewUrlParser:true })
    .then(()=>{console.log(`connection success1`)})
    .catch((err)=>console.log(`error to connect to atlas!`))

}
module.exports=run ;