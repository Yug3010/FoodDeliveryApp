import React, { useContext } from 'react';
import MenuItem from './MenuItem';
import { StoreContext } from '../context/StoreContext';

const Menu = ({category}) => {

    const {food_list}=useContext(StoreContext);

    const filteritrm=food_list.filter((item)=>{
        const matchcategory=category!='All'?category.includes(item.category):true;
        return matchcategory;
    })

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Explore Our Menu</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteritrm.map((item) => (
          <MenuItem
            key={item._id}
            id={item._id}
            name={item.name}
            image={item.image}
            price={item.price}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Menu;
