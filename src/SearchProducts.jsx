import React, { useState } from "react";

export default function SearchProducts() {
  const products = [
    { id: 1, name: "Laptop" },
    { id: 2, name: "Phone" },
    { id: 3, name: "Tablet" },
  ];

  const [search, setSearch] = useState("");

  return (
    <div>
      <h2>Search Products</h2>

      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {products
        .filter((p) =>
          p.name.toLowerCase().includes(search.toLowerCase())
        )
        .map((p) => (
          <p key={p.id}>{p.name}</p>
        ))}
    </div>
  );
}