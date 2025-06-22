"use client";

import Link from "next/link";
import Image from "next/image";

import { earphones } from "@/constants";
import { addToCart } from "@/store/cart";
import { useDispatch, useSelector } from "react-redux";

const Earphones = () => {
  const cart = useSelector((state) => state.cart.items);
  console.log("Cart items:", cart);
  const dispatch = useDispatch();
  const handleAddToCart = (earphone) => {
    dispatch(addToCart({
      id: earphone.id,
      name: earphone.name,
      image: earphone.image,
      price: earphone.price,
    }))
  }

  return (
    <div className="w-full h-full">
      <div className="relative min-h-[250px] md:min-h-[350px] lg:h-[450px] w-full overflow-hidden">
        {/* Background image */}
        <Image
          src="/images/image-earphones-yx1.jpg"
          alt="hero image"
          fill
          className="object-cover z-0"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 z-10" />

        {/* Text content */}
        <div className="relative z-20 flex items-center justify-center md:justify-start h-full px-6 md:px-16 pb-20">
          <div className="w-full md:text-left pt-20 2xl:pt-84">
            <h4 className="text-sm md:text-lg font-light text-gray-500 tracking-[0.9em] mb-2">
              EARPHONES
            </h4>
            <h1 className="text-4xl sm:text-7xl md:text-6xl 2xl:text-9xl font-bold uppercase leading-tight">
              quality <br /> earphones
            </h1>
            <p className="text-sm sm:text-lg  text-gray-400 my-1 sm:my-6 mb-12">
              Hear your favorite music with the <br />
              best sound quality. Our earphones are <br /> designed to deliver
              good sounds.
            </p>
            <Link
              href={"#earphones"}
              className="sm:mt-8 bg-orange-500 text-white sm:px-8 sm:py-4 px-6 py-3 rounded hover:bg-orange-700 transition cursor-pointer uppercase font-semibold tracking-wider"
            >
              See Product
            </Link>
          </div>
        </div>
      </div>

      <div
        className="bg-gray-200 pt-25 pb-10 flex flex-col items-center"
        id="earphones"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6 md:px-16">
          {earphones.map((earphone) => (
            <div
              key={earphone.id}
              className="bg-gray-300 p-4 rounded-lg shadow-md"
            >
              <Image
                src={earphone.image}
                alt={`earphone ${earphone.id}`}
                width={300}
                height={300}
                className="w-full h-auto rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold text-black">
                {earphone.name}
              </h3>
              <div className="flex items-center justify-between mt-2">
                <p className="text-gray-500 text-xl">${earphone.price}</p>
                <button className="bg-orange-500 px-2 py-1 rounded hover:bg-orange-700 transition cursor-pointer" onClick={() => handleAddToCart(earphone)}>
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

export default Earphones;
