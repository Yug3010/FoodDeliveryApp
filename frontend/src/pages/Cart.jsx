import React, { useContext, useEffect, useState } from 'react';
import { StoreContext } from '../context/StoreContext';

const Cart = () => {
  const { cartitems, food_list, deletefromcart, gettotalprice } = useContext(StoreContext);

  const [cartData, setCartData] = useState([]);

  // Effect to update cart data when cartitems changes
  useEffect(() => {
    let tempData = [];
    for (let id in cartitems) {
      if (cartitems[id] > 0) {
        tempData.push({
          _id: id,
          quantity: cartitems[id],
        });
      }
    }
    setCartData(tempData);
  }, [cartitems]);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Your Cart</h1>
      {cartData.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty!</p>
      ) : (
        <>
          <div className="grid grid-cols-1 gap-6">
            {cartData.map((e, i) => {
              let foodData = food_list.find((item) => item._id === e._id);
              return (
                <div
                  key={i}
                  className="flex items-center justify-between bg-white shadow-lg rounded-lg p-4"
                >
                  {/* Food Image */}
                  <img
                    src={foodData.image}
                    alt={foodData.name}
                    className="w-16 h-16 object-cover rounded-lg"
                  />

                  {/* Food Info */}
                  <div className="flex-1 ml-4">
                    <h2 className="text-lg font-semibold text-gray-800">
                      {foodData.name}
                    </h2>
                    <p className="text-gray-600 text-sm">{foodData.description}</p>
                  </div>

                  {/* Quantity and Price */}
                  <div className="text-center">
                    <p className="text-gray-800 font-bold">
                      Quantity: {e.quantity}
                    </p>
                    <p className="text-gray-600 text-sm">Price: ${foodData.price}</p>
                  </div>

                  {/* Delete Button */}
                  <button
                    onClick={() => deletefromcart(e._id)}
                    className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition"
                  >
                    Delete
                  </button>
                </div>
              );
            })}
          </div>

          {/* Total Price */}
          <p className="mt-6 text-2xl font-bold text-center text-gray-800">
            Total Price: ${gettotalprice().toFixed(2)}
          </p>
        </>
      )}
    </div>
  );
};

export default Cart;
