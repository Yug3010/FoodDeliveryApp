import {v2 as cloudinary} from 'cloudinary';
import dotenv from 'dotenv'
dotenv.config();

const connectcloudinary=async()=>{
    cloudinary.config({
        cloud_name:process.env.CLOUDINARYNAME,
        api_key:process.env.CLOUDINARYAPIKEY,
        api_secret:process.env.CLOUDINARYSECRETKEY
    })
}

export default connectcloudinary;

