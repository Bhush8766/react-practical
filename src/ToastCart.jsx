import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const products = [
  { id: 1, name: "Laptop", price: 500 },
  { id: 2, name: "Phone", price: 200 },
];

export default function ToastCart() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
    toast.success(`${item.name} added to cart!`);
  };

  return (
    <div>
      <h2>Toast Notification Cart</h2>

      {products.map((p) => (
        <div key={p.id}>
          <h3>{p.name}</h3>
          <p>${p.price}</p>

          <button onClick={() => addToCart(p)}>
            Add to Cart
          </button>
        </div>
      ))}

      <ToastContainer />
    </div>
  );
}