import express from 'express';
const userRouter=express.Router();
import { register,login, adminlogin } from '../controllers/UserController.js';

userRouter.post('/register',register);
userRouter.post('/login',login);
userRouter.post('/admin',adminlogin);

export default userRouter;