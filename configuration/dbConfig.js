const mongoose =require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/jwt_db");

mongoose.connection.on("connected",()=>{
    console.log("connected to Mongodb")
})

mongoose.connection.on("error",(err)=>{
    console.log(`MongoDB connection error : ${err}`)
})


module.exports=mongoose