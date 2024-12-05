import React, { useContext, useState, useEffect } from 'react';
import { assets } from '../assets/frontend_assets/assets';
import { StoreContext } from '../context/StoreContext';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const { gettotalcount, token,handleLogout } = useContext(StoreContext);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const nav = useNavigate();

  return (
    <div className="bg-white shadow-md relative z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-6 relative">
        {/* Logo */}
        <img src={assets.logo} alt="Logo" className="h-8 w-auto" />

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-6 text-gray-800">
          <Link to="/">
            <li className="hover:text-blue-600 cursor-pointer">Home</li>
          </Link>
          {token && (
            <>
              <li className="hover:text-blue-600 cursor-pointer">Menu</li>
              <li className="hover:text-blue-600 cursor-pointer">Mobile App</li>
              <li className="hover:text-blue-600 cursor-pointer">Contact Us</li>

              {/* Admin Panel Link - Only show for admins */}
              <li className="hover:text-blue-600 cursor-pointer">
                <Link to="http://localhost:5174/" target="_blank" rel="noopener noreferrer">
                  Admin Panel
                </Link>
              </li>
            </>
          )}
        </ul>

        {/* Icons and Profile Dropdown */}
        <div className="flex items-center space-x-4">
          {token ? (
            <>
              <img src={assets.search_icon} alt="Search" className="h-6 w-6 cursor-pointer" />

              <div className="relative">
                <Link to="/cart">
                  <img src={assets.basket_icon} alt="Basket" className="h-6 w-6 cursor-pointer" />
                </Link>
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {gettotalcount()}
                </span>
              </div>

              <div className="relative">
                <img
                  src={assets.profile_icon}
                  alt="Profile"
                  className="h-8 w-8 rounded-full border border-gray-300 cursor-pointer"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                />
                {isDropdownOpen && (
                  <div
                    className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg z-50"
                    style={{ zIndex: 1000 }}
                  >
                    <Link to="/profile">
                      <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Profile</div>
                    </Link>
                    <div
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={handleLogout}
                    >
                      Logout
                    </div>
                  </div>
                )}
              </div>
            </>
          ) : (
            <Link to="/login">
              <button className="hidden md:inline-block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                Sign In
              </button>
            </Link>
          )}
        </div>
      </div>

      {token && (
        <div className="md:hidden">
          <ul className="flex flex-col items-center space-y-4 py-4 bg-gray-100">
            <li className="hover:text-blue-600 cursor-pointer">Home</li>
            <li className="hover:text-blue-600 cursor-pointer">Menu</li>
            <li className="hover:text-blue-600 cursor-pointer">Mobile App</li>
            <li className="hover:text-blue-600 cursor-pointer">Contact Us</li>

            {/* Admin Panel Link for mobile view */}
            <li className="hover:text-blue-600 cursor-pointer">
              <Link to="http://localhost:5174/" target="_blank" rel="noopener noreferrer">
                Admin Panel
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
