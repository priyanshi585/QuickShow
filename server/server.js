import express from "express";
import cors from 'cors'
import 'dotenv/config'
import connectDB from "./config/db.js";
import { clerkMiddleware } from '@clerk/express'
import { serve } from "inngest/express";
import { inngest, functions } from "./inngest/index.js"

const app = express();
const PORT = process.env.PORT || 3000;

await connectDB();

// Middlewares 
app.use(express.json());
app.use(cors());
app.use(clerkMiddleware())
app.use("/api/inngest", serve({ client: inngest, functions }));

// API Routes 
app.get("/" , (req,res)=>{
    res.send("Hello from server");
})

// Server Starting 
app.listen(PORT , ()=>{
    console.log(`Server is running at ${PORT}`);
})