import React, { useContext } from 'react';
import { AdminContext } from '../context/AdminContext';
import { Navigate } from 'react-router-dom'; // Import for redirecting

const Home = () => {
  const { token } = useContext(AdminContext);

  // Redirect to login if token is not available
  if (!token) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="flex">
      {/* Main Content */}
      <div className="flex-1 p-6 bg-gray-100">
        <header className="bg-blue-600 text-white py-4 px-6 rounded-md">
          <h1 className="text-2xl font-semibold">Welcome, Admin</h1>
        </header>

        {/* Dashboard Stats */}
        <section className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-lg font-semibold">Total Users</h3>
            <p className="text-3xl font-bold text-blue-600">1,234</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-lg font-semibold">Active Sessions</h3>
            <p className="text-3xl font-bold text-green-600">56</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-lg font-semibold">Pending Tasks</h3>
            <p className="text-3xl font-bold text-red-600">8</p>
          </div>
        </section>

        {/* Reports Section */}
        <section className="mt-8 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Recent Reports</h2>
          <p className="text-gray-600">No new reports to show.</p>
        </section>
      </div>
    </div>
  );
};

export default Home;
