"use client";

import { Trash2 } from "lucide-react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseQuantity,
  deleteFromCart,
  increaseQuantity,
} from "@/store/cart";

const CartPage = () => {
  const carts = useSelector((state) => state.cart.items);
   const subtotal = carts.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  const dispatch = useDispatch();

  const handleDeleteFromCart = (id) => {
    dispatch(deleteFromCart(id));
  };

  const handleDecreaseQuantity = (id) => {
    dispatch(decreaseQuantity(id));
  };

  const handleIncreaseQuantity = (id) => {
    dispatch(increaseQuantity(id));
  };

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
                    <td className="py-4 px-6 text-gray-700">${cart.price}</td>
                    <td className="py-4 px-6 text-gray-700">
                      <div className="flex items-center gap-2">
                        <button
                          className="bg-gray-200 px-2 py-1 rounded hover:bg-gray-300 cursor-pointer"
                          onClick={() => handleDecreaseQuantity(cart.id)}
                        >
                          -
                        </button>
                        <div className="px-3">{cart.quantity}</div>
                        <button
                          className="bg-gray-200 px-2 py-1 rounded hover:bg-gray-300 cursor-pointer"
                          onClick={() => handleIncreaseQuantity(cart.id)}
                        >
                          +
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

        <div className="flex justify-between mt-8 w-[90%] mx-auto">
          <div></div>
          <div className="flex flex-col items-center justify-end">
            <div className="flex justify-between gap-5 text-xl">
              <span className="p-2">Subtotal</span>
              <span className="p-2 bg-amber-500 rounded text-lg text-gray-700">${subtotal}</span>
            </div>
            <p className="text-sm mt-2 text-gray-600">Taxes and shipping calculated at checkout</p>
            <button>Check out</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
