import React, { useState } from 'react';
import axios from 'axios';
import {toast} from 'react-toastify';
import { useContext } from 'react';
import { StoreContext } from '../context/StoreContext';
import {useNavigate} from 'react-router-dom';
import { useEffect } from 'react';

const Login = () => {
  const [currstate, setCurrState] = useState('Sign In');
  const [name,setName]=useState('');
  const [password,setPassword]=useState('');
  const [email,setEmail]=useState('');
  const {token,setToken}=useContext(StoreContext);
  const nav=useNavigate();


  const onsubmithandler=async(e)=>{
    e.preventDefault();
    try{
      if(currstate=='Sign In')
      {
        //register
        const res=await axios.post('http://localhost:3000/api/user/register',{name,email,password});
        if(res.data.success)
        {
          
          toast.success(res.data.message);
          setToken(res.data.token);
          localStorage.setItem('token',res.data.token);
          setName('');
          setEmail('');
          setPassword('');
          
        }
        else
        {
          console.log("error");
        }

      }
      else
      {
        //login
        const res=await axios.post('http://localhost:3000/api/user/login',{email,password});
        if(res.data.success)
        {
          localStorage.setItem('token',res.data.token);
          setToken(res.data.token);
          console.log(res.data.token);
          toast.success(res.data.message);
          
          
          setEmail('');
          setPassword('');
          
        }
        else
        {
          console.log("error");
        }

      }
    }
    catch(error)
    {
      console.log(error);
    }
    
  }

  useEffect(()=>{
    if(token)
    {
      nav('/');
    }
  },[token])


  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
          {currstate === 'Sign In' ? 'Sign In' : 'Login'}
        </h2>
        <form className="space-y-4" onSubmit={onsubmithandler}>
          {/* Conditional Name Input */}
          {currstate === 'Sign In' && (
            <div>
              <label
                htmlFor="name"
                className="block text-gray-700 font-medium mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                className="w-full px-4 py-2 border rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={name}
                onChange={(e)=>setName(e.target.value)}
              />
            </div>
          )}

          {/* Email Input */}
          <div>
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e)=>setEmail(e.target.value)}
            />
          </div>

          {/* Password Input */}
          <div>
            <label
              htmlFor="password"
              className="block text-gray-700 font-medium mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              {currstate === 'Sign In' ? 'Sign In' : 'Login'}
            </button>
          </div>
        </form>

        {/* Toggle State Button */}
        <div className="text-center mt-4">
          <button
            onClick={() =>
              setCurrState(currstate === 'Login' ? 'Sign In' : 'Login')
            }
            className="text-blue-500 hover:underline"
          >
            {currstate === 'Login'
              ? "Don't have an account? Sign In"
              : 'Already have an account? Login'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
