import React from "react";
import "./styles.css"; 

const ShoppingCart = ({ cart }) => {
  return (
    <div className="shopping-cart">
      <h2>Shopping Cart</h2>
      <ul>
        {cart.map(item => (
          <li key={item.id}>
            {item.name} - ${item.price.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingCart;
