import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];

    case "TOTAL":
      return state.reduce((sum, item) => sum + item.price, 0);

    default:
      return state;
  }
};

export default function CartReducer() {
  const [cart, dispatch] = useReducer(reducer, []);

  return (
    <div>
      <h2>Calculate Total Price (useReducer)</h2>

      <button
        onClick={() =>
          dispatch({
            type: "ADD",
            payload: { name: "Laptop", price: 50000 },
          })
        }
      >
        Add Laptop
      </button>

      <button
        onClick={() =>
          dispatch({
            type: "ADD",
            payload: { name: "Phone", price: 20000 },
          })
        }
      >
        Add Phone
      </button>

      <button
        onClick={() => {
          const total = dispatch({ type: "TOTAL" });
          alert("Check console for total");
          console.log(total);
        }}
      >
        Show Total
      </button>

      <ul>
        {cart.map((item, i) => (
          <li key={i}>
            {item.name} - ₹{item.price}
          </li>
        ))}
      </ul>

      <h3>
        Total: ₹
        {cart.reduce((sum, item) => sum + item.price, 0)}
      </h3>
    </div>
  );
}