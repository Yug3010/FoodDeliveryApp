import { createContext, useEffect, useState } from "react";
// import { food_list } from "../assets/frontend_assets/assets";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const [cartitems, setCartItems] = useState({});
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [food_list,setfoodlist]=useState([]);
    const nav = useNavigate();

    const addtocart = (id) => {
        const cartData = structuredClone(cartitems);
        if (cartData[id]) {
            cartData[id] += 1;
        } else {
            cartData[id] = 1;
        }
        setCartItems(cartData);
    };

    const deletefromcart = (id) => {
        const cartData = structuredClone(cartitems);
        cartData[id] = 0;
        setCartItems(cartData);
    };

    const gettotalcount = () => {
        let total = 0;
        for (let id in cartitems) {
            total += cartitems[id];
        }
        return total;
    };

    const gettotalprice = () => {
        let total = 0;
        for (let id in cartitems) {
            let iteminfo = food_list.find((item) => item._id == id);
            total += iteminfo.price * cartitems[id];
        }
        return total;
    };

    const handleLogout = () => {
        if (localStorage.getItem('token')) {
            localStorage.removeItem('token');
            setToken(null);  // Clear token state explicitly
            nav('/login');
        }
    };

    useEffect(() => {
        // You can use this useEffect to handle token changes or cleanup actions
        if (!token) {
            nav('/login'); // Redirect to login if token is not available
        }
    }, [token, nav]);

    useEffect(() => {
        console.log(cartitems);
    }, [cartitems]);

    const getfoodlist=async()=>{
        try{
           const res=await axios.get('http://localhost:3000/api/food/list');
           if(res.data.success)
           {
                setfoodlist(res.data.food);
           }
        }
        catch(error)
        {
            console.log(error);
        }
    }

    useEffect(()=>{
        getfoodlist();
    },[food_list])

    const contextValue = {
        food_list,
        addtocart,
        gettotalcount,
        cartitems,
        deletefromcart,
        gettotalprice,
        token,
        setToken,
        handleLogout,
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;
