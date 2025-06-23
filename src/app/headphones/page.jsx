'use client';

import { headphones } from "@/constants";
import { addToCart } from "@/store/cart";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useDispatch } from "react-redux";

const Headphones = () => {
  const dispatch = useDispatch();
  const handleAddToCart = (headphone) => {
    dispatch(addToCart({
      id: headphone.id,
      name: headphone.name,
      image: headphone.image,
      price: headphone.price,
      quantity: 1
    }))
  }

  return (
    <div className="w-full h-full">
      <div className="relative min-h-[600px] md:min-h-[700px] lg:min-h-screen w-full">
        {/* Background image */}
        <Image
          src="/images/headphones/image-gallery-3 copy 2.jpg"
          alt="hero image"
          fill
          className="object-cover z-0"
          priority
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 z-10" />

        {/* Text content */}
        <div className="relative z-20 flex items-center justify-center md:justify-start h-full px-6 md:px-16">
          <div className="w-full md:text-left pt-40 2xl:pt-84">
            <h4 className="text-sm md:text-lg font-light text-gray-500 tracking-[0.9em] mb-4">
              HEADPHONES
            </h4>
            <h1 className="text-4xl sm:text-7xl md:text-6xl 2xl:text-9xl font-bold uppercase leading-tight">
              ALL KINDS OF <br /> Headphones
            </h1>
            <p className="text-sm sm:text-lg  text-gray-400 my-4 sm:my-8 mb-12">
              Enjoy your music with the best headphones <br /> available in the
              market. From noise-cancelling <br /> to wireless, we have it all.
            </p>
            <Link
              href={"#products"}
              className="sm:mt-8 bg-orange-500 text-white sm:px-8 sm:py-4 px-6 py-3 rounded hover:bg-orange-700 transition cursor-pointer uppercase font-semibold tracking-wider"
            >
              See Products
            </Link>
          </div>
        </div>
      </div>
      
      {/* PRODUCTS */}
      <div
        className="bg-gray-200 pt-25 pb-10 flex flex-col items-center"
        id="products"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6 md:px-16">
          {headphones.map((headphone) => (
            <div key={headphone.id} className="bg-gray-300 p-4 rounded-lg shadow-md">
              <Image
                src={headphone.image}
                alt={`Headphone ${headphone.id}`}
                width={300}
                height={300}
                className="w-full h-auto rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold text-black">{headphone.name}</h3>
              <div className="flex items-center justify-between mt-2">
                <p className="text-gray-500 text-xl">${headphone.price}</p>
                <button className="bg-orange-500 px-2 py-1 rounded hover:bg-orange-700 transition cursor-pointer" onClick={() => handleAddToCart(headphone)}>
                  <Image src={'/icons/icon-cart.svg'} alt="cart" width={25} height={25} className="object-cover" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Headphones;
