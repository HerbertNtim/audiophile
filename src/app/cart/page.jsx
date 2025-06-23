"use client";

import { Trash2 } from "lucide-react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { deleteFromCart } from "@/store/cart";

const CartPage = () => {
  const carts = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleDeleteFromCart = (id) => {
    dispatch(deleteFromCart(id));
    console.log(`Item with id ${id} deleted from cart`);
  };

  return (
    <div className="w-full min-h-screen bg-gray-200">
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
                        <span className="text-gray-700 text-sm">
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
                          className="bg-gray-200 px-2 py-1 rounded hover:bg-gray-300"
                          onClick={() => handleDecreaseCart(cartItem)}
                        >
                          −
                        </button>
                        <div className="px-3">{cart.quantity}</div>
                        <button
                          className="bg-gray-200 px-2 py-1 rounded hover:bg-gray-300"
                          onClick={() => handleAddToCart(cartItem)}
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
      </div>
      {/* <div className="pt-25 pb-10 flex flex-col items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6 md:px-16">
          {carts.map((cart) => (
            <div key={cart.id} className="bg-gray-300 p-4 rounded-lg shadow-md">
              <Image
                src={cart.image}
                alt={`cart ${cart.id}`}
                width={300}
                height={300}
                className="w-full h-auto rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold text-black">{cart.name}</h3>
              <div className="flex items-center justify-between mt-2">
                <p className="text-gray-500 text-xl">${cart.price}</p>
                <button
                  className="bg-orange-500 px-2 py-1 rounded hover:bg-orange-700 transition cursor-pointer"
                  onClick={() => {handleDeleteFromCart(cart.id)}}
                >
                 <Trash2 size={28} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default CartPage;
