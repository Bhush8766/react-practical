import React, { useContext } from "react";
import { CartContext } from "./CartContext";

export default function Product() {
  const { cart, setCart } = useContext(CartContext);

  const addItem = (item) => {
    setCart([...cart, item]);
  };

  return (
    <div>
      <h2>Products</h2>

      <button onClick={() => addItem("Laptop")}>
        Add Laptop
      </button>

      <button onClick={() => addItem("Phone")}>
        Add Phone
      </button>
    </div>
  );
}