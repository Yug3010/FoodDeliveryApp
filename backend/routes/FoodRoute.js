import express from 'express';
import { addproduct, deleteproduct, listproduct } from '../controllers/FoodController.js';
import upload from '../middlewares/Multer.js';
import adminauth from '../middlewares/AuthMiddleware.js';
const foodRouter=express.Router();

foodRouter.post('/add',adminauth,upload.single('image'),addproduct);
foodRouter.post('/delete',deleteproduct);
foodRouter.get('/list',listproduct);

export default foodRouter;