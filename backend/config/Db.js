import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

const connectiondb=async()=>{
    await mongoose.connect(process.env.MONGODBURL).then(()=>{
        console.log('Database connected');
    }).catch(()=>{
        console.log('Error while connecting database');
    })
}

export default connectiondb;