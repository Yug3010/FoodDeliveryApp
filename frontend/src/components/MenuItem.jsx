import React, { useContext } from 'react';
import { StoreContext } from '../context/StoreContext';

const MenuItem = ({ id,name, image, price, description  }) => {

    const {addtocart}=useContext(StoreContext);

  return (
    <div className="border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
        <p className="text-gray-600 text-sm">{description}</p>
        <p className="text-green-600 font-bold mt-2">${price}</p>
        <button className="mt-4 bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-colors" onClick={()=>addtocart(id)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default MenuItem;
