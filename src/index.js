const mongoose = require('mongoose');
const app=require("./app.js")
const conectdB = require("./db/index.js"); 
require('dotenv').config()
conectdB()
.then(()=>{
    app.listen(process.env.PORT||3000,()=>{
        console.log(`server is running at port :${process.env.PORT}`)
    })
})
.catch((err)=>{
console.log("mongodb connection failed",err);
} )






/*
import express from "express"
const app=express()
(async()=>{
    try{
await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
app.on("error",(error)=>{
    console.log("error",error);
    throw error
})
app.listen(process.env.PORT,()=>{
    console.log(`App is listening on port ${process.env.PORT}`)
})
    }
    catch(error){
console.log("ERROR:",error);
throw err
    }
})()
*/