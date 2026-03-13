import React, { useEffect, useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";

const ProductsList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { addToCart } = useOutletContext();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const result = await response.json();
        setData(result.products);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <p className="text-center mt-10">Loading products...</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 p-6">
      {data.map((item) => (
        <div
          key={item.id}
          className="bg-white p-6 border rounded-lg shadow-md hover:shadow-[#2e2e2e] cursor-pointer duration-300 flex flex-col h-140"
        >
          <img
            src={item.images[0]}
            alt={item.title}
            className="mb-4 w-60 h-60 object-cover rounded-md"
          />
          <h3 className="font-bold text-lg mb-2">{item.title}</h3>
          <p className="text-sm text-gray-600 flex-1 font-semibold">
            {item.description}
          </p>
          <div className="mb-6 flex flex-col ">
            <p className="font-semibold text-blue-600">
              {" "}
              ₹{Math.floor(item.price * 83)}
            </p>
            <div>
              <p className="text-yellow-500">
                rating: {"⭐".repeat(Math.round(item.rating))}
              </p>
              <div className="items-center mt-4">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    addToCart({ ...item, quantity: 1 });
                    navigate("/cart");
                  }}
                  className="bg-[#ffc311] text-black font-bold px-4 py-2 rounded mt-2 cursor-pointer"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductsList;
