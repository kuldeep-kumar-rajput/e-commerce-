import React, { useEffect, useState } from "react";
import { useParams, useNavigate, useOutletContext } from "react-router-dom";

const Product = () => {
  const { id } = useParams(); 
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1); 
  const [booked, setBooked] = useState(false);
  const navigate = useNavigate();
  const { addToCart } = useOutletContext();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        const result = await response.json();
        setProduct(result);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) return <p className="text-center mt-10">Loading product...</p>;

  const total = quantity * product.price;

  const handleAddToCart = () => {
    addToCart({ ...product, quantity }); 
    setBooked(true);
    navigate("/cart"); 
    setTimeout(() => setBooked(false), 2000);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 border border-yellow-300 rounded-lg shadow-md my-8">
      <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
      <img
        src={product.images[0]}
        alt={product.title}
        className="w-40 h-40 sm:w-60 sm:h-60 object-cover rounded-md mb-4"
      />

      <p className="text-gray-700 mb-2">{product.description}</p>
      <p className="font-semibold text-blue-600 mb-2">
        Price: ${product.price}
      </p>
      <p className="text-yellow-500 mb-4">
        Rating: {"⭐".repeat(Math.round(product.rating))}
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-4">
        <button
          onClick={handleAddToCart}
          className="px-4 py-2 bg-yellow-400 text-black font-bold rounded hover:bg-yellow-500 transition"
        >
          Add to Cart
        </button>

        <button
          onClick={() => setQuantity(quantity + 1)}
          className="px-4 py-2 bg-red-500 text-white font-bold rounded hover:bg-red-600 transition"
        >
          +
        </button>

        <button
          onClick={() => setQuantity(Math.max(1, quantity - 1))}
          className="px-4 py-2 bg-red-500 text-white font-bold rounded hover:bg-red-600 transition"
        >
          -
        </button>

        <button
          onClick={() => setQuantity(1)}
          className="px-4 py-2 bg-red-500 text-white font-bold rounded hover:bg-red-600 transition"
        >
          Reset
        </button>
      </div>

      <div className="mt-4 flex justify-between w-full">
        <p className="font-semibold">Quantity: {quantity}</p>
        <p className="font-semibold">Total: {total}</p>
      </div>

      {booked && (
        <p className="mt-4 text-green-600 font-bold animate-pulse">
          Added to cart!
        </p>
      )}
    </div>
  );
};

export default Product;
