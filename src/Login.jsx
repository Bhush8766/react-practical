import React, { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "" || password === "") {
      setError("Email and Password are required");
    } else {
      setError("");

      // SAVE TOKEN
      localStorage.setItem("token", "user_logged_in");

      alert("Login Successful");
      console.log(email, password);
    }
  };

  return (
    <div>
      <h2>Login Form Validation</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <br />
        <br />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <br />
        <br />

        <button type="submit">Login</button>
      </form>

      <p>{error}</p>
    </div>
  );
}