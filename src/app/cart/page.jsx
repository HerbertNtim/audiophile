"use client";

import Image from "next/image";
import { useSelector } from "react-redux";

const CartPage = () => {
  const carts = useSelector((state) => state.cart.items);
  console.log(carts);

  return (
    <div className="w-full h-screen bg-amber-600 p-10">
      <div className="pt-25 pb-10 flex flex-col items-center">
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
                  onClick={() => {}}
                >
                  <Image
                    src={"/icons/icon-cart.svg"}
                    alt="cart"
                    width={25}
                    height={25}
                    className="object-contain"
                    style={{ width: "auto", height: "auto" }}
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CartPage;
