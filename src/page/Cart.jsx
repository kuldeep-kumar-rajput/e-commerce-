import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, addToCart } =
    useOutletContext();

  const [bookedItems, setBookedItems] = useState({});
  const [paymentMethod, setPaymentMethod] = useState("");

  const rate = 83;

  if (!cart || cart.length === 0)
    return (
      <p className="text-center mt-10 text-lg font-medium mt-7">
        Your cart is empty
      </p>
    );

  const totalPrice = cart.reduce(
    (a, b) => a + Math.floor(b.price * rate) * b.quantity,
    0,
  );

  const handleBook = (item) => {
    addToCart({ ...item, quantity: 1 });

    setBookedItems((prev) => ({ ...prev, [item.id]: true }));

    setTimeout(() => {
      setBookedItems((prev) => ({ ...prev, [item.id]: false }));
    }, 2000);
  };

  const handlePayment = async () => {
    if (!paymentMethod) {
      alert("Please select a payment method!");
      return;
    }

    try {
      const response = await fetch(
        `https://dummyjson.com/carts?method=${paymentMethod}&amount=${totalPrice}`,
        {
          method: "GET",
        },
      );

      const data = await response.json();

      console.log("Payment Response:", data);

      alert(`Payment successful via ${paymentMethod} for Rs. ${totalPrice}`);
    } catch (error) {
      console.error("Payment error:", error);
      alert("Payment failed. Try again.");
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-4 sm:p-6 mt-15">
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
              className="w-28 h-28 object-cover rounded"
            />

            <div className="flex-1 flex flex-col gap-2">
              <h3 className="font-bold text-lg">{item.title}</h3>

              <p className="text-sm text-gray-600">{item.description}</p>

              <p className="text-blue-600 font-semibold">
                ₹{Math.floor(item.price * rate)}
              </p>
            </div>

            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  disabled={item.quantity === 1}
                  className="px-3 py-1 bg-red-500 text-white rounded"
                >
                  -
                </button>

                <span className="font-semibold">{item.quantity}</span>

                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="px-3 py-1 bg-green-500 text-white rounded"
                >
                  +
                </button>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="px-2 py-1 bg-gray-700 text-white rounded"
                >
                  Delete
                </button>
              </div>

              <button
                onClick={() => handleBook(item)}
                className="bg-yellow-400 text-black font-bold px-4 py-2 rounded hover:bg-yellow-500"
              >
                Add To Cart
              </button>

              {bookedItems[item.id] && (
                <span className="text-green-600 font-bold animate-bounce">
                  Book
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      <h3 className="text-2xl font-bold mt-6">Grand Total: Rs. {totalPrice}</h3>

      <div className="mt-6 border-t pt-4">
        <h3 className="text-xl font-bold mb-3">Select Payment Method</h3>

        <div className="flex flex-col sm:flex-row gap-4">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              value="Cash on Delivery"
              checked={paymentMethod === "Cash on Delivery"}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            Cash on Delivery
          </label>

          <label className="flex items-center gap-2">
            <input
              type="radio"
              value="Paytm"
              checked={paymentMethod === "Paytm"}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            Paytm
          </label>

          <label className="flex items-center gap-2">
            <input
              type="radio"
              value="PhonePe"
              checked={paymentMethod === "PhonePe"}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            PhonePe
          </label>

          <label className="flex items-center gap-2">
            <input
              type="radio"
              value="Google Pay"
              checked={paymentMethod === "Google Pay"}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            Google Pay
          </label>

          <label className="flex items-center gap-2">
            <input
              type="radio"
              value="UPI"
              checked={paymentMethod === "UPI"}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            UPI
          </label>
        </div>

        <button
          onClick={handlePayment}
          className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Pay Now
        </button>
      </div>
    </div>
  );
};

export default Cart;
