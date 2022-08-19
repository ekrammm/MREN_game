const mongoose=require("mongoose");
const DbConnect=async()=>{
try {
    let result=mongoose.connect("mongodb+srv://ekram:EKRAM1995@cluster0.yjtkvgt.mongodb.net/?retryWrites=true&w=majority");
    console.log("database is connected")
} catch (error) {
console.log(error);
}
}


module.exports=DbConnect;