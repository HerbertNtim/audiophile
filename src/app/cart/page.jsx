"use client";

import {  Minus, Plus, Trash2 } from "lucide-react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseQuantity,
  deleteFromCart,
  increaseQuantity,
} from "@/store/cart";
import { useState } from "react";
import CheckoutModal from "@/components/CheckoutModal";
import { toast } from "react-toastify";

const CartPage = () => {
  const carts = useSelector((state) => state.cart.items);
   const subtotal = carts.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  const dispatch = useDispatch();

  const handleDeleteFromCart = (id) => {
    dispatch(deleteFromCart(id));
    toast.success("Item removed from cart")
  };

  const handleDecreaseQuantity = (id) => {
    dispatch(decreaseQuantity(id));
        toast.success("Item quantity decreased")
  };

  const handleIncreaseQuantity = (id) => {
    dispatch(increaseQuantity(id));
    toast.success("Item quantity increased")
  };

  const [showCheckout, setShowCheckout] = useState(false);

  return (
    <div className="min-h-screen w-full bg-gray-200 overflow-y-auto">
      <div className="pt-32 pb-5 flex flex-col items-center">
        <h2 className="font-semibold text-center text-2xl text-gray-500 tracking-wide">
          Shopping Cart
        </h2>
        {carts.length === 0 ? (
          <div className="text-gray-500 text-lg mt-4">
            <h1 className="mt-32 text-3xl font-semibold">No Items in Cart</h1>
          </div>
        ) : (
          <div className="w-[90%] mx-auto mt-8">
            <table className="min-w-full bg-white shadow-md rounded-md overflow-hidden">
              <thead className="bg-amber-500 text-white">
                <tr>
                  <th className="text-left py-3 px-6">Product</th>
                  <th className="text-left py-3 px-6">Price</th>
                  <th className="text-left py-3 px-6">Quantity</th>
                  <th className="text-left py-3 px-6">Total</th>
                </tr>
              </thead>
              <tbody>
                {carts.map((cart, index) => (
                  <tr key={index} className="border-b">
                    <td className="py-4 px-6 flex items-center">
                      <Image
                        src={cart.image}
                        alt={`cart ${cart.id}`}
                        width={50}
                        height={50}
                        className="w-12 h-12 rounded mr-4"
                      />
                      <div className="flex flex-col items-center">
                        <span className="text-gray-700 text-xs sm:text-sm">
                          {cart.name}
                        </span>
                        <button
                          onClick={() => handleDeleteFromCart(cart.id)}
                          className="text-red-500 hover:text-red-700 flex items-center gap-1 mt-1 text-sm cursor-pointer"
                        >
                          Remove <Trash2 size={12} />
                        </button>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-gray-700">${cart.price.toFixed(2)}</td>
                    <td className="py-4 px-6 text-gray-700">
                      <div className="flex items-center gap-2">
                        <button
                          className="bg-gray-200 px-2 py-1 rounded hover:bg-gray-300 cursor-pointer"
                          onClick={() => handleDecreaseQuantity(cart.id)}
                        >
                          <Minus size={14} />
                        </button>
                        <div className="px-3">{cart.quantity}</div>
                        <button
                          className="bg-gray-200 px-2 py-1 rounded hover:bg-gray-300 cursor-pointer"
                          onClick={() => handleIncreaseQuantity(cart.id)}
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-gray-700">
                      ${cart.price * cart.quantity}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <div className="mt-8 w-[90%] mx-auto">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex justify-between gap-5 text-xl">
              <span className="p-1">Subtotal</span>
              <span className="p-1 bg-amber-500 rounded text-[18px] text-gray-700">${subtotal.toFixed(2)}</span>
            </div>
            <p className="text-lg mt-2 text-gray-600">Taxes and shipping calculated at checkout</p>
            <button className="sm:mt-8 bg-orange-500 text-white sm:px-8 sm:py-2 px-6 py-3 rounded hover:bg-orange-700 transition cursor-pointer uppercase font-semibold tracking-wider" onClick={() => setShowCheckout(true)}>Check out</button>
          </div>
        </div>

        {showCheckout &&  <CheckoutModal onClose={() => setShowCheckout(false)} />}
      </div>
    </div>
  );
};

export default CartPage;
