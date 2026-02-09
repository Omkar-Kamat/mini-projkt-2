import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

const app = express();

dotenv.config()
connectDB();


app.use(express.json());


app.get("/",(req,res)=>{
    res.send("Mini Project 2 Running.")
})

export default app;