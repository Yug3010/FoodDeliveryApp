import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const List = () => {
  const [list, setList] = useState([]);

 
    const fetchData = async () => {
      try {
        const res = await axios.get('http://localhost:3000/api/food/list'); // Ensure the URL is correct
        if (res.data.success) {
          setList(res.data.food);
        }
      } catch (error) {
        console.error(error);
        toast.error('Error fetching food list');
      }
    };
  


  const handledelete=async(id)=>{
    const res=await axios.post('http://localhost:3000/api/food/delete',{id});
    if(res.data.success)
    {
      toast.success(res.data.message);
      fetchData();
    }
    else
    {
      toast.error(res.data.message);
    }
  }

  useEffect(()=>{
    fetchData();
  },[list])
  

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6 text-center">Food List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {list.length > 0 ? (
          list.map((item) => (
            <div
              key={item._id}
              className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-200"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800">{item.name}</h2>
                <p className="text-gray-600 mt-2"><strong>Price:</strong> ${item.price}</p>
                <p className="text-gray-600"><strong>Category:</strong> {item.category}</p>
                <p className="text-gray-600 mt-2">{item.description}</p>
                <button 
                  onClick={()=>handledelete(item._id)}
                  className="mt-4 w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition duration-300"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">No food items found.</p>
        )}
      </div>
    </div>
  );
};

export default List;
