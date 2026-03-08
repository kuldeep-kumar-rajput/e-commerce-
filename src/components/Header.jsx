import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-[#F3F4F6] shadow-md z-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          <h1 className="text-2xl font-bold text-gray-800 cursor-pointer">
            <span className="text-red-500">R</span>eactify
          </h1>
          <div className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
            <Link to="/" className="hover:text-amber-500 transition">
              Home
            </Link>
            <Link to="/about" className="hover:text-amber-500 transition">
              About
            </Link>
            <Link to="/products" className="hover:text-amber-500 transition">
              Products
            </Link>
            <Link to="/contact" className="hover:text-amber-500 transition">
              Contact
            </Link>
            <Link
              to="/cart"
              className="bg-amber-500 px-4 py-1.5 rounded-lg hover:text-white transition"
            >
              Cart
            </Link>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-6 py-4 space-y-4 text-gray-700 font-medium">
          <Link to="/" onClick={() => setIsOpen(false)} className="block">
            Home
          </Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="block">
            About
          </Link>
          <Link
            to="/products"
            onClick={() => setIsOpen(false)}
            className="block"
          >
            Products
          </Link>
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="block"
          >
            Contact
          </Link>
          <Link
            to="/cart"
            onClick={() => setIsOpen(false)}
            className="block bg-amber-500 px-4 py-2 rounded-lg text-center"
          >
            Cart
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
