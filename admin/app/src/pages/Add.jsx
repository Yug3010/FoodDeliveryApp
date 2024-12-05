import React, { useContext, useEffect, useState } from 'react';
import { assets } from '../assets/admin_assets/assets';
import axios from 'axios';
import { toast } from 'react-toastify';
import { AdminContext } from '../context/AdminContext';

const Add = () => {
  const [image, setImage] = useState(null);
  const [name,setName]=useState('');
  const [description,setDescription]=useState('');
  const [price,setPrice]=useState('');
  const [category,setCategory]=useState('Salad');
  const {token}=useContext(AdminContext);

  useEffect(()=>{
    console.log(token);
  })

  const submithandler=async(e)=>{
      e.preventDefault();
     try{
        const formData=new FormData();
        formData.append("image",image);
        formData.append("name",name);
        formData.append("description",description);
        formData.append("price",price);
        formData.append("category",category);

        const res=await axios.post('http://localhost:3000/api/food/add',formData,{headers:{
          token:token
        }});

        if(res.data.success)
        {
          setName('');
          setCategory('');
          setPrice('');
          setDescription('');
          setCategory('');
          setImage(false);
          toast.success(res.data.message);
        }
        else{
          console.log("error");
          toast.error(res.data.message);
        }

     }
     catch(error)
     {
      console.log(error);
     }
  } 


  return (
    <div className="flex-grow p-8 bg-gray-50">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Add Product</h1>
      <form className="bg-white p-6 rounded-lg shadow-md space-y-6" onSubmit={submithandler}>
        {/* Image Upload */}
        <div>
          <label className="block text-gray-700 font-medium mb-2" htmlFor="image">
            {/* Displaying image or default upload icon */}
            <img
              src={image ? URL.createObjectURL(image) : assets.upload_area}
              alt="Upload Area"
              className="w-32 h-32 object-cover mx-auto" // Set fixed size for image
            />
          </label>
          <input
            type="file"
            id="image"
            onChange={(e) => setImage(e.target.files[0])}
            className="block w-full text-gray-600 border rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Product Name */}
        <div>
          <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
            Product Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            placeholder="Enter product name"
            className="block w-full text-gray-700 border rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e)=>setName(e.target.value)}
          />
        </div>

        {/* Price */}
        <div>
          <label className="block text-gray-700 font-medium mb-2" htmlFor="price">
            Price
          </label>
          <input
            type="number"
            id="price"
            value={price}
            placeholder="Enter product price"
            className="block w-full text-gray-700 border rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e)=>setPrice(e.target.value)}
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-gray-700 font-medium mb-2" htmlFor="description">
            Description
          </label>
          <textarea
            id="description"
            placeholder="Enter product description"
            value={description}
            className="block w-full text-gray-700 border rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
            onChange={(e)=>setDescription(e.target.value)}
          ></textarea>
        </div>

        {/* Category */}
        <div>
          <label className="block text-gray-700 font-medium mb-2" htmlFor="category">
            Category
          </label>
          <select
            id="category"
            value={category}
            className="block w-full text-gray-700 border rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e)=>setCategory(e.target.value)}
          >
            <option value="Salad">Salad</option>
            <option value="Rolls">Rolls</option>
            <option value="Deserts">Deserts</option>
            <option value="Sandwich">Sandwich</option>
            <option value="Cake">Cake</option>
            <option value="Pure Veg">Pure Veg</option>
            <option value="Pasta">Pasta</option>
            <option value="Noodles">Noodles</option>
          </select>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="bg-blue-500 text-white font-medium py-2 px-6 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Add;
