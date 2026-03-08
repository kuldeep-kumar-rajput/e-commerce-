import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [cart, setCart] = useState([]);
  const addToCart = (item) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i,
        );
      } else {
        return [...prev, item];
      }
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((i) => i.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    if (quantity < 1) return;
    setCart((prev) => prev.map((i) => (i.id === id ? { ...i, quantity } : i)));
  };

  return (
    <>
      <div className="pt-8 max-w-full mx-4 sm:pt-12 sm:max-w-2xl sm:mx-auto lg:pt-16 lg:max-w-6xl lg:mx-auto">
        <Header />
        <Outlet context={{ cart, addToCart, removeFromCart, updateQuantity }} />
      </div>
      <Footer />
    </>
  );
}

export default App;
