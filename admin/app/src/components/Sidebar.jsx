import React from 'react';
import {Link} from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-gray-800 text-white flex flex-col items-start p-4 space-y-4">
      <h2 className="text-xl font-bold mb-6">Sidebar</h2>
      <Link to='/add'><button className="w-full px-4 py-2 text-left bg-gray-700 rounded hover:bg-gray-600">
        Add
      </button>
      </Link>


      <Link to='/list'><button className="w-full px-4 py-2 text-left bg-gray-700 rounded hover:bg-gray-600">
        List
      </button>
      </Link>
    </div>
  );
};

export default Sidebar;
