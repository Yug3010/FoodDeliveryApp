import React from 'react';
import { assets } from '../assets/frontend_assets/assets';

const Header = () => {
  return (
    <div 
      className="relative bg-cover bg-center h-screen text-white flex items-center justify-center"
      style={{ backgroundImage: `url(${assets.header_img})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Delicious Food Delivered To Your Doorstep
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Craving something tasty? Choose from a wide variety of dishes and enjoy quick delivery!
        </p>
        <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700">
          Order Now
        </button>
      </div>
    </div>
  );
};

export default Header;
