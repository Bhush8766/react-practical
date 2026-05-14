import React, { useState } from "react";

export default function CartDemo() {
  const [cart, setCart] = useState([]);

  const addItem = (item) => {
    setCart([...cart, item]);
  };

  return (
    <div>
      <h2>Add Item to Cart</h2>

      <button onClick={() => addItem("Laptop")}>
        Add Laptop
      </button>

      <button onClick={() => addItem("Phone")}>
        Add Phone
      </button>

      <p>Cart: {cart.join(", ")}</p>
    </div>
  );
}