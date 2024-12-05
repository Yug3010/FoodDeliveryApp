import express from 'express';
const app=express();
const port=3000;
import connectiondb from './config/Db.js';
import userRouter from './routes/UserRoute.js';
import foodRouter from './routes/FoodRoute.js';
import connectcloudinary from './config/Cloudinary.js';
import cors from 'cors';


//Database and Cloudinary connection
connectiondb();
connectcloudinary()

//middlewares
app.use(express.json());
app.use(cors());


//api routes
app.use('/api/user',userRouter);
app.use('/api/food',foodRouter);


app.listen(port,()=>{
    console.log(`Server is running at ${port}`);
})

