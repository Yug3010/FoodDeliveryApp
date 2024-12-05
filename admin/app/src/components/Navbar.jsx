import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AdminContext } from '../context/AdminContext';
import { assets } from '../../src/assets/admin_assets/assets';

const Navbar = () => {
  const { token, handlelogout } = useContext(AdminContext);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left Section: Logo and Home Link */}
          <div className="flex items-center space-x-6">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img src={assets.logo} alt="Logo" className="h-8 w-auto" />
            </div>
            {/* Home Link */}
            <Link
              to="/"
              className="text-gray-700 text-lg font-medium hover:text-blue-600"
            >
              Home
            </Link>
          </div>

          {/* Right Section: Profile Icon / Sign In */}
          <div className="flex items-center space-x-4">
            {token ? (
              <div className="relative">
                <img
                  src={assets.profile_image}
                  alt="Profile"
                  className="h-8 w-8 rounded-full cursor-pointer"
                  title="Profile"
                  onClick={toggleDropdown}
                />
                {/* Dropdown Menu */}
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg z-10">
                    <button
                      onClick={handlelogout}
                      className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link to="/login">
                <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300">
                  Sign In
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
