import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, addToCart } =
    useOutletContext();
  const [bookedItems, setBookedItems] = useState({});
  const [paymentMethod, setPaymentMethod] = useState(""); // Payment state

  if (!cart || cart.length === 0)
    return (
      <p className="text-center mt-10 text-lg font-medium">
        Your cart is empty
      </p>
    );

  const totalPrice = cart.reduce((a, b) => a + b.price * b.quantity, 0);

  const handleBook = (item) => {
    addToCart({ ...item, quantity: 1 });
    setBookedItems((prev) => ({ ...prev, [item.id]: true }));
    setTimeout(() => {
      setBookedItems((prev) => ({ ...prev, [item.id]: false }));
    }, 2000);
  };

  // Payment handler
  const handlePayment = () => {
    if (!paymentMethod) {
      alert("Please select a payment method!");
      return;
    }
    alert(`Payment successful via ${paymentMethod} for Rs. ${totalPrice}`);
  };

  return (
    <>
      <div className="max-w-5xl mx-auto p-4 sm:p-6">
        <h2 className="text-2xl font-bold mb-6 text-center sm:text-left">
          Your Cart
        </h2>

        <div className="flex flex-col gap-6">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row items-center sm:items-start gap-4 p-4 border rounded shadow hover:shadow-lg transition"
            >
              <img
                src={item.images?.[0]}
                alt={item.title}
                className="w-28 h-28 sm:w-32 sm:h-32 lg:w-36 lg:h-36 object-cover rounded"
              />
              <div className="flex-1 flex flex-col justify-center sm:items-start lg:items-start gap-1 m-3">
                <h3 className="font-bold text-lg">{item.title}</h3>
                <p className="text-sm text-gray-600 flex-1 font-semibold">
                  {item.description}
                </p>
                <p className="text-blue-600 font-semibold">
                  ₹{Math.floor(item.price * 83)}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row lg:flex-col items-center gap-2 w-full sm:w-auto lg:w-auto mt-4 sm:mt-0">
                <div className="flex flex-col  sm:flex-row items-center gap-2 w-full sm:w-auto">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    disabled={item.quantity === 1}
                    className="px-3 py-1 bg-red-500 text-white rounded w-full sm:w-auto hover:bg-red-600 transition"
                  >
                    -
                  </button>
                  <span className="font-semibold">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="px-3 py-1 bg-green-500 text-white rounded w-full sm:w-auto hover:bg-green-600 transition"
                  >
                    +
                  </button>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="px-2 py-1 bg-gray-700 text-white rounded w-full sm:w-auto hover:bg-gray-800 transition"
                  >
                    Delete
                  </button>
                </div>
                <div className="mt-2 sm:mt-0 lg:mt-4 w-full sm:w-auto">
                  <button
                    onClick={() => handleBook(item)}
                    className="bg-yellow-400 text-black font-bold px-4 py-2 rounded w-full sm:w-auto hover:bg-yellow-500 transition"
                  >
                    Add To Cart
                  </button>
                </div>
                {bookedItems[item.id] && (
                  <span className="text-green-600 font-bold animate-bounce sm:ml-2 lg:mt-2 block text-center sm:inline-block">
                    Book
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
        <h3 className="text-2xl font-bold mt-6 ">
          Grand Total: Rs. {totalPrice}
        </h3>

        <div className="mt-6 border-t pt-4">
          <h3 className="text-xl font-bold mb-2">Select Payment Method</h3>
          <div className=" flex-col sm:flex-row gap-4">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="payment"
                value="Cash on Delivery"
                checked={paymentMethod === "Cash on Delivery"}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              Cash on Delivery
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="payment"
                value="Paytm"
                checked={paymentMethod === "Paytm"}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              Paytm
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="payment"
                value="Phone-Pay"
                checked={paymentMethod === "Phone-Pay"} //
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              Phone-Pay
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="payment"
                value="Google-Pay"
                checked={paymentMethod === "Google-Pay"} // fix here
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              Google-Pay
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="payment"
                value="UPI"
                checked={paymentMethod === "UPI"}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              UPI
            </label>
          </div>

          <button
            onClick={handlePayment}
            className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Pay Now
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;
