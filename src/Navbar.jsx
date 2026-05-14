import React, { useContext } from "react";
import { CartContext } from "./CartContext";

export default function Navbar() {
  const { cart } = useContext(CartContext);

  return (
    <div>
      <h2>🛒 Cart Items: {cart.length}</h2>
    </div>
  );
}