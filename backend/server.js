import express from "express";
import dotenv from 'dotenv';
import connectDB from "./config/db.js";
import registerRoute from "./routes/registerRoute.js"
import cors from 'cors'




//configure env 
dotenv.config()

//database config
connectDB();

//rest object
const app = express();

//middleware 
app.use(express.json())
app.use(cors())

//routes

app.use("/api/v1/register", registerRoute)




const PORT = process.env.PORT || 10000;

//run listen
app.listen(PORT, ()=>{
    console.log(`Server Running on ${PORT}`);
});