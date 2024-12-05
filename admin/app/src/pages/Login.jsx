import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useContext } from 'react';
import { AdminContext } from '../context/AdminContext';
import { useEffect } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {token,setToken}=useContext(AdminContext);
  const nav=useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
   try{
    const res=await axios.post('http://localhost:3000/api/user/admin',{email,password});
    if(res.data.success)
    {
        toast.success("User logged in successfully");
        if(res.data.success)
        {
            localStorage.setItem("token",res.data.token);
            setToken(res.data.token);
            
        }
    }
    else
    {
        toast.error("error");
    }
   }
   catch(error)
   {
    console.log(error);
   }
  };

  useEffect(()=>{
    if(token)
    {
      nav('/');
    }
  },[token])

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-4 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-800">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-600">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
              className="w-full px-4 py-2 text-sm border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>

          {/* Password Input */}
          <div>
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter your password"
              className="w-full px-4 py-2 text-sm border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
