import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const adminauth=async(req,res,next)=>{
    try{
        const {token}=req.headers;
        if(!token)
        {
            return res.json({success:false,message:"Not authorized"});
        }
        const tokendecode=jwt.verify(token,process.env.SECRETKEY);
        if(tokendecode!=process.env.ADMINEMAIL+process.env.ADMINPASS)
        {
            return res.json({success:false,message:"Not authorized"});
        }
        next();
    }
    catch(error) {
        console.log(error);
    }
}

export default adminauth;