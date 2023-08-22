import React from "react";
import MenuItem from "./MenuItem";

const MenuSection = ({ sectionTitle, items, addToCart }) => {
  return (
    <div className="menu-section">
      <h2>{sectionTitle}</h2>
      <div className="menu-item-container">
        {items.map(item => (
          <MenuItem key={item.id} item={item} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default MenuSection;
