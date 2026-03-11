import React, { useEffect, useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
const Headphone = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { addToCart } = useOutletContext();
  useEffect(() => {
    const fetchHeadphone = async () => {
      try {
        const response = await fetch(
          "https://dummyjson.com/products/category/smartphones",
        );
        const fdata = await response.json();
        setData(fdata.products);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };
    fetchHeadphone();
  }, []);

  if (loading)
    return <p className="text-center mt-10">Loading products...</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 p-6">
      {data.map((item) => (
        <div
          key={item.id}
          className="bg-gray-50 p-6 border rounded-lg shadow-md hover:shadow-[#2e2e2e] cursor-pointer duration-300 flex flex-col"
        >
          <img
            src={item.images[0]}
            alt={item.title}
            className="mb-4 w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56 object-cover rounded-md"
          />
          <h3 className="font-bold text-lg mb-2">{item.title}</h3>
          <p className="text-sm text-gray-600 flex-1 font-semibold mb-4">
            {item.description}
          </p>
          <div className="mb-4 flex flex-col">
            <p className="font-semibold text-blue-600">Rs.{item.price}</p>
            <p className="text-yellow-500">
              rating: {"⭐".repeat(Math.round(item.rating))}
            </p>
          </div>
          <div className="mt-auto">
            <button
              onClick={() => {
                addToCart({ ...item, quantity: 1 }); 
                navigate("/cart"); 
              }}
              className="bg-[#ffc311] text-black font-bold px-4 py-2 rounded w-full hover:bg-yellow-400 transition"
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Headphone;
