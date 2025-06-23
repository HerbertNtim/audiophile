"use client";

import { setFormData } from "@/store/checkoutSlice";
import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import OrderSummaryModal from "./OrderSummary";

const CheckoutModal = ({ onClose }) => {
  const initialFormData = useSelector((state) => state.checkout);
  const dispatch = useDispatch();
  const [formData, setLocalFormData] = useState(initialFormData);
  const [showOrderSummary, setShowOrderSummary] = useState(true);

  const handleChange = (e) => {
    setLocalFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    setLocalFormData(initialFormData);
  }, [initialFormData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setFormData(formData));
    console.log("Form submitted:", formData);
    setShowOrderSummary(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      {!showOrderSummary && (
        <div className="bg-white rounded-lg shadow-lg p-6 w-[90%] sm:w-[500px] relative">
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
            onClick={onClose}
          >
            <X />
          </button>

          <h2 className="text-xl font-semibold text-gray-800 mb-4">Checkout</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            {["name", "city", "email", "phone"].map((field) => (
              <div key={field}>
                <label className="block text-sm font-medium capitalize">
                  {field}
                </label>
                <input
                  required
                  type={
                    field === "email"
                      ? "email"
                      : field === "phone"
                      ? "tel"
                      : "text"
                  }
                  name={field}
                  className="w-full p-2 border rounded"
                  value={formData[field]}
                  onChange={handleChange}
                />
              </div>
            ))}

            {/* Payment Method */}
            <div>
              <label className="block text-sm font-medium">
                Payment Method
              </label>
              <select
                required
                name="paymentMethod"
                className="w-full p-2 border rounded"
                value={formData.paymentMethod}
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option value="card">Credit / Debit Card</option>
                <option value="paypal">PayPal</option>
                <option value="cash">Cash on Delivery</option>
              </select>
            </div>

            {/* Buttons */}
            <div className="flex justify-end gap-3 pt-2">
              <button
                type="button"
                className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400 cursor-pointer"
                onClick={onClose}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 cursor-pointer"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      )}

      {showOrderSummary && (
        <OrderSummaryModal
          onClose={() => setShowOrderSummary(!OrderSummaryModal)}
        />
      )}
    </div>
  );
};

export default CheckoutModal;
