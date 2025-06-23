"use client";

import { X } from "lucide-react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import OrderCompleteModal from "./OrderCompleteModal";

const OrderSummaryModal = ({ onClose }) => {
  const cartItems = useSelector((state) => state.cart.items);
  const checkoutForm = useSelector((state) => state.checkout.formData);
  const [showOrderComplete, setShowOrderComplete] = useState(false);

  const productTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const shippingCost = 50;
  const vat = productTotal * 0.2;
  const finalTotal = productTotal + vat + shippingCost;

  const handleOrderComplete = () => {
    setShowOrderComplete(true); 
    toast.success("Order placed successfully!");
  }

  return (
    <div className="z-50 flex items-center justify-center bg-black/40 overflow-y-auto fixed inset-0">
      {!showOrderComplete && (
        <div className="bg-white p-6 rounded shadow-lg w-[90%] sm:w-[500px] relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-black cursor-pointer"
          >
            <X />
          </button>

          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

          <div className="mb-4 border-b pb-3">
            <h3 className="font-medium">Shipping Details</h3>
            <p className="flex justify-between">
              Name: <span>{checkoutForm.name}</span>
            </p>
            <p className="flex justify-between">
              Email: <span>{checkoutForm.email}</span>
            </p>
            <p className="flex justify-between">
              Phone: <span>{checkoutForm.phone}</span>
            </p>
            <p className="flex justify-between">
              City: <span>{checkoutForm.city}</span>
            </p>
            <p className="flex justify-between">
              Payment Method: <span>{checkoutForm.paymentMethod}</span>
            </p>
          </div>

          {/* Table */}
          <div className="overflow-x-auto my-5">
            <table className="w-full border">
              <thead>
                <tr className="bg-gray-100 text-left">
                  <th className="p-2 border">Image</th>
                  <th className="p-2 border">Name</th>
                  <th className="p-2 border">Price</th>
                  <th className="p-2 border">Qty</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id}>
                    <td className="p-2 border">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-12 h-12 object-cover rounded"
                      />
                    </td>
                    <td className="p-2 border">{item.name}</td>
                    <td className="p-2 border">${item.price.toFixed(2)}</td>
                    <td className="p-2 border">{item.quantity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mb-4 border-t pt-3">
            <h3 className="font-medium mb-2">Order Breakdown</h3>
            <p className="flex justify-between">
              <span>Product Total:</span>
              <span>${productTotal.toFixed(2)}</span>
            </p>
            <p className="flex justify-between">
              <span>VAT (20%):</span>
              <span>${vat.toFixed(2)}</span>
            </p>
            <p className="flex justify-between">
              <span>Shipping:</span>
              <span>${shippingCost.toFixed(2)}</span>
            </p>
            <hr className="my-2" />
            <p className="flex justify-between font-bold">
              <span>Total:</span>
              <span>${finalTotal.toFixed(2)}</span>
            </p>
          </div>

          <div className="text-right">
            <button
              onClick={handleOrderComplete}
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 cursor-pointer"
            >
              Order
            </button>
          </div>
        </div>
      )}

      {showOrderComplete && (
        <OrderCompleteModal onClose={() => setShowOrderComplete(false)} />
      )}
    </div>
  );
};

export default OrderSummaryModal;
