const express=require("express");
const cors=require("cors");
const app=express();
require("dotenv").config()
const DbConnect=require("./Db_connect")


DbConnect();
app.use(express.json());
app.use(cors());
app.use("/game",require("./routes/gameRouter"))
app.listen(5000,(err)=>{
    err ? console.log(err):console.log("server is running")
})
