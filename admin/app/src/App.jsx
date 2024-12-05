import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Add from './pages/Add';
import List from './pages/List';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './pages/Login';
import Home from './pages/Home';
import { AdminContext } from './context/AdminContext';

const App = () => {
  const { token } = useContext(AdminContext);

  return (
    <div className="h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      <ToastContainer />

      <div className="flex flex-1">
        {/* Conditionally render Sidebar */}
        {token && <Sidebar />}

        {/* Main Content */}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<Add />} />
            <Route path="/list" element={<List />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
