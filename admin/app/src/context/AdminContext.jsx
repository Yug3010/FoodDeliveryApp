import { useState } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";

export const AdminContext = createContext(null);

const AdminContextProvider = (props) => {
    
    const [token,setToken]=useState(localStorage.getItem('token'));

    const nav=useNavigate();

    const handlelogout=()=>{
        if(localStorage.getItem('token'))
        {
            localStorage.removeItem('token');
            setToken(null);
            nav('/login');
        }
    }

    const contextValue = {
       token,setToken,handlelogout
    };

   

    return (
        <AdminContext.Provider value={contextValue}>
            {props.children}
        </AdminContext.Provider>
    );
};

export default AdminContextProvider;
