"use client";

import { useState } from "react";

export default function HomePage() {
  const [amount, setAmount] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!amount || isNaN(amount) || amount <= 0) {
      alert("Please enter a valid amount");
      return;
    }

    // Call the backend API to create a Checkout Session
    const response = await fetch("/api/create-checkout-session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount }),
    });

    const data = await response.json();

    if (response.ok) {
      // Redirect to Stripe Checkout
      window.location.href = data.url;
    } else {
      alert(data.error || "Something went wrong");
    }
  };

  return (
    <div className="text-center">
      <h1 className="py-4 text-4xl font-black bg-gradient-to-tl from-blue-400 to-lime-500 bg-clip-text text-transparent">
        Donate Me Now! ❤️💖
      </h1>
      <form onSubmit={handleSubmit}>
        <input
          className="w-60  text-center select:border-none select-none h-12 border-2 rounded-md border-green-400 font-bold text-lg"
          type="text"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          min="1"
          step="0.01"
          placeholder="Enter A Fair Amount 🌴"
        />
        <br />
        <button
          className="py-2 text-white font-bold rounded-xl bg-gradient-to-tr from-blue-400 to-lime-500 my-4 px-8"
          type="submit"
        >
          Donate
        </button>
      </form>
    </div>
  );
}
