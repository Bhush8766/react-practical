import React, { useState } from "react";

export default function RemoveCart() {
  const [cart, setCart] = useState(["Laptop", "Phone"]);

  const removeItem = (item) => {
    setCart(cart.filter((c) => c !== item));
  };

  return (
    <div>
      <h2>Remove Item from Cart</h2>

      {cart.map((c, i) => (
        <div key={i}>
          {c}

          <button onClick={() => removeItem(c)}>
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}