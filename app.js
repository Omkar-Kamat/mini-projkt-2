import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

const app = express();

dotenv.config()
connectDB();


app.use(express.json());


app.get("/",(req,res)=>{
    res.send("User Management API is Running.")
})

export default app;