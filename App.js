import React, { useState } from "react";
import MenuSection from "./Components/MenuSection";
import ShoppingCart from "./Components/ShoppingCart";
import menuData from "./Data/menuData";
import "./Components/styles.css";

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = item => {
    setCart([...cart, item]);
  };

  return (
    <div className="App">
      <h1>Zomato Clone</h1>
      <ShoppingCart cart={cart} />
      {Object.keys(menuData).map(section => (
        <MenuSection
          key={section}
          sectionTitle={section.toUpperCase()}
          items={menuData[section]}
          addToCart={addToCart}
        />
      ))}
    </div>
  );
};

export default App;
