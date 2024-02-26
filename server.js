// const express= require("express");
import  express  from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js'
import cors from 'cors'
import postRoutes from './routes/postRoutes.js'
import ngoRoutes from './routes/ngoRoutes.js'
dotenv.config();
connectDB();
const app = express();

app.use(express.json())
app.use(morgan('dev'));
app.use(cors());

app.use('/api/v1/auth1',authRoutes);
app.use('/api/v1/post1',postRoutes);
app.use('/api/v1/ngo1',ngoRoutes);
app.get("/",(req,res)=>{
    res.send({message : "welcome to ngo app !"});
})
const PORT = process.env.PORT || 8080;
app.listen(PORT,()=>{
    console.log(`server running on ${PORT}`)
})