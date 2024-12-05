import userModel from "../models/UserModel.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const createtoken = (id) => {
    return jwt.sign({ id }, process.env.SECRETKEY);
}


const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const userexits = await userModel.findOne({ email: email });
        if (userexits) {
            return res.json({ message: "User already registered", success: false });
        }
        const salt = await bcrypt.genSalt(10);
        const hashpass = await bcrypt.hash(password, salt);
        const newuser = new userModel({
            name,
            email,
            password: hashpass
        })

        const user = await newuser.save();

        const token = createtoken(user._id);

        return res.json({ message: "User successfully registered", success: true, token });
    }
    catch (error) {
        console.log(error);
        return res.json({ message: "Error while doing registration", success: false });
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const userexists = await userModel.findOne({ email, email });
        if (!userexists) {
            return res.json({ message: "User not registered", success: false });
        }
        const passcomp = await bcrypt.compare(password, userexists.password);
        if (!passcomp) {
            return res.json({ message: "Invalid credentials", success: false });
        }
        const token = createtoken(userexists._id);
        return res.json({ message: "User loggedIn successfully", success: true, token });
    }
    catch (error) {
        console.log(error);
        return res.json({ message: "Error while doing login", success: false });
    }


}

const adminlogin=async(req,res)=>{
    try{
        const {email,password}=req.body;
        if(email==process.env.ADMINEMAIL && password==process.env.ADMINPASS)
        {
            const token=jwt.sign(email+password,process.env.SECRETKEY);
            res.json({success:true,token});
        }
        else
        {
            res.json({success:false,message:"Invalid credentials"});
        }
    }
    catch(error)
    {
        console.log(error);
        return res.json({ message: "Error while doing admin login", success: false });
    }
}

export { register, login ,adminlogin};