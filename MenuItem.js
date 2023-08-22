import React from "react";
import Burger from "./Burger.jpeg"

const MenuItem = ({ item, addToCart }) => {
  const handleAddToCart = () => {
    addToCart(item);
  };

  return (
    <div className="menu-item">
      <div className="menu-item-image">
        <img src={Burger} alt={item.name} />
      </div>
      <div className="menu-item-details">
        <h3>{item.name}</h3>
        <p>${item.price.toFixed(2)}</p>
        <button className="Button" onClick={handleAddToCart}>Add to Cart</button>
      </div>
    </div>
  );
};

export default MenuItem;
