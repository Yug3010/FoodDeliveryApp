import React from 'react';
import { menu_list } from '../assets/frontend_assets/assets';

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Explore Our Menu</h2>
        <p className="text-gray-600 mt-2">Discover a variety of delicious options to satisfy your cravings.</p>
      </div>

      {/* Category Buttons */}
      <div className="flex justify-center space-x-4 mb-8">
        <button
          onClick={() => setCategory("All")}
          className={`px-4 py-2 rounded-lg ${
            category === "All"
              ? "bg-green-500 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          } transition-colors`}
        >
          All
        </button>
        {menu_list.map((item, index) => (
          <button
            key={index}
            onClick={() => setCategory(item.menu_name)}
            className={`px-4 py-2 rounded-lg ${
              category === item.menu_name
                ? "bg-green-500 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            } transition-colors`}
          >
            {item.menu_name}
          </button>
        ))}
      </div>

      {/* Menu Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 container mx-auto px-4">
        {(category === "All" ? menu_list : menu_list.filter((item) => item.menu_name === category)).map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform"
          >
            <img
              src={item.menu_image}
              alt={item.menu_name}
              className="w-full h-32 object-cover"
              onClick={() => setCategory(item.menu_name)}
            />
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold text-gray-800">{item.menu_name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreMenu;
