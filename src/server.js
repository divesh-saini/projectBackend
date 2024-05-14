// import express from "express";


// const app = express();
// // const PORT = 8080;

// app.listen(process.env.PORT,()=>{
//     console.log("Listening....");
// });

import dotenv from "dotenv"
import connectDB from "./db/db.js";
import {app} from './app.js'
dotenv.config({
    path: './.env'
})



connectDB()
.then(() => {
    app.listen(8080, () => {
        console.log(`⚙️ Server is running at port : 8080`);
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
})

