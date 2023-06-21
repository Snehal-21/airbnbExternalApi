import express from "express";
import morgan from "morgan";
import mongoose from "mongoose";
import router from "./routes/airroutes.js";

const app=express();

app.use(morgan('dev'));
app.use(express.json());
app.use('/api/v1',router);

mongoose.connect('mongodb+srv://Snehal:Snehal1234@mern-todo.va7rcii.mongodb.net/airbnbDb?retryWrites=true&w=majority')
.then(()=>console.log("DB connected"))
.catch((errpr)=>console.log("DB error"));

app.listen(8000);