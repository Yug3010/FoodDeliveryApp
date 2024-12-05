import foodModel from "../models/FoodModel.js";
import Cloudinary from 'cloudinary';

const addproduct=async(req,res)=>{
    try{
        const imagepath=req.file;
        const result = await Cloudinary.uploader.upload(imagepath.path, { resource_type: 'image' });
        const imageUrl = result.secure_url;
        const food=new foodModel({
            name:req.body.name,
            description:req.body.description,
            price:req.body.price,
            category:req.body.category,
            image:imageUrl
        })
        await food.save();
        return res.json({message:"Product saved successfully",success:true});
    }
    catch(error)
    {
        console.log(error);
        return res.json({message:"Error while adding product",success:false});
    }
}

const deleteproduct=async(req,res)=>{
    try{
        await foodModel.findByIdAndDelete(req.body.id);
        return res.json({message:"Product deleted successfully",success:true});
         
    }
    catch(error)
    {
        console.log(error);
        return res.json({message:"Error while deleting product",success:false});
    }
}

const listproduct=async(req,res)=>{
    try{
        const food=await foodModel.find({});
        return res.json({food,success:true});
    }
    catch(error)
    {
        console.log(error);
        return res.json({message:"Error while listing product",success:false});
    }
    
}

export {addproduct,deleteproduct,listproduct};