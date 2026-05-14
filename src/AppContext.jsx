import React, { useState } from "react";
import { CartContext } from "./CartContext";
import Navbar from "./Navbar";
import Product from "./Product";

export default function AppContext() {
  const [cart, setCart] = useState([]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      <Navbar />
      <Product />
    </CartContext.Provider>
  );
}