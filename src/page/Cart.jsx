
import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useOutletContext();

  const [bookedItems, setBookedItems] = useState({});
  const [paymentMethod, setPaymentMethod] = useState("");

  if (!cart || cart.length === 0)
    return (
      <p className="text-center mt-10 text-lg font-medium">
        Your cart is empty
      </p>
    );

  const totalPrice = cart.reduce((a, b) => a + b.price * b.quantity, 0);

  // Add To Cart → Book animation
  const handleBook = (item) => {
    setBookedItems((prev) => ({
      ...prev,
      [item.id]: true,
    }));

    setTimeout(() => {
      setBookedItems((prev) => ({
        ...prev,
        [item.id]: false,
      }));
    }, 2000);
  };

  // Payment Function
const handlePayment = () => {

  if (!window.Razorpay) {
    alert("Razorpay SDK not loaded");
    return;
  }

  if (!paymentMethod) {
    alert("Please select a payment method!");
    return;
  }

  if (totalPrice <= 0) {
    alert("Cart total is zero!");
    return;
  }

  const options = {
    key: "rzp_test_1DP5mmOlF5G5ag",
    amount: Math.round(totalPrice * 100),
    currency: "INR",
    name: "Kuldeep Store",
    description: "Order Payment",

    handler: function (response) {
      console.log(response);
      alert("Payment Successful!");
    },

    modal: {
      ondismiss: function () {
        console.log("Payment popup closed");
      }
    },

    prefill: {
      name: "Kuldeep",
      email: "test@gmail.com",
      contact: "9999999999"
    },

    theme: {
      color: "#2563eb"
    }
  };

  const rzp = new window.Razorpay(options);

  rzp.on("payment.failed", function (response) {
    console.log(response.error);
    alert("Payment Failed: " + response.error.description);
  });

  rzp.open();
};

  return (
    <div className="max-w-5xl mx-auto p-4 sm:p-6">
      <h2 className="text-2xl font-bold mb-6 text-center sm:text-left">
        Your Cart
      </h2>

      <div className="flex flex-col gap-6">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex flex-col sm:flex-row items-center gap-4 p-4 border rounded shadow"
          >
            <img
              src={item.images?.[0]}
              alt={item.title}
              className="w-28 h-28 object-cover rounded"
            />

            <div className="flex-1">
              <h3 className="font-bold text-lg">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.description}</p>
              <p className="text-blue-600 font-semibold">
                Rs. {item.price}
              </p>
            </div>

            <div className="flex flex-col items-center gap-2">

              <div className="flex items-center gap-2">
                <button
                  onClick={() =>
                    updateQuantity(item.id, item.quantity - 1)
                  }
                  disabled={item.quantity === 1}
                  className="px-3 py-1 bg-red-500 text-white rounded"
                >
                  -
                </button>

                <span className="font-semibold">
                  {item.quantity}
                </span>

                <button
                  onClick={() =>
                    updateQuantity(item.id, item.quantity + 1)
                  }
                  className="px-3 py-1 bg-green-500 text-white rounded"
                >
                  +
                </button>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="px-3 py-1 bg-gray-700 text-white rounded"
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

      <h3 className="text-2xl font-bold mt-6">
        Grand Total: Rs. {totalPrice}
      </h3>

      <div className="mt-6 border-t pt-4">
        <h3 className="text-xl font-bold mb-2">
          Select Payment Method
        </h3>

        <div className="flex flex-col gap-2">
          <label>
            <input
              type="radio"
              value="Cash on Delivery"
              checked={paymentMethod === "Cash on Delivery"}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            Cash on Delivery
          </label>

          <label>
            <input
              type="radio"
              value="UPI"
              checked={paymentMethod === "UPI"}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            UPI
          </label>

          <label>
            <input
              type="radio"
              value="Card"
              checked={paymentMethod === "Card"}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            Card
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
