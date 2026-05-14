import React from "react";

export default function ProductList() {
  const products = [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Phone", price: 20000 },
    { id: 3, name: "Headphones", price: 3000 },
  ];

  const addToCart = (name) => {
    console.log(name, "added to cart");
  };

  return (
    <div>
      <h2>Show Products from Array</h2>

      {products.map((p) => (
        <div key={p.id}>
          <h3>{p.name}</h3>

          <p>Price: ₹{p.price}</p>

          <button onClick={() => addToCart(p.name)}>
            Add to Cart
          </button>

          <hr />
        </div>
      ))}
    </div>
  );
}
