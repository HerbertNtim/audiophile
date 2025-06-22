import Image from "next/image";
import Link from "next/link";
import React from "react";

const EarphoneCard = () => {
  return (
    <div className="min-h-[300px] md:min-h-[400px] lg:min-h-[450px] w-full rounded-2xl overflow-hidden">
      <div className="flex flex-col md:flex-row w-full h-full gap-0 py-32">
        {/* EARPHONE IMAGE */}
        <div className="w-[90%] h-48 px-16">
          <Image
            src="/images/image-earphones-yx1.jpg"
            alt="YX1 Earphones"
            width={450}
            height={450}
            className="object-cover rounded-2xl"
          />
        </div>
        
        {/* TEXT CONTENT */}
        <div className="w-[80%] h-48 sm:w-[90%] sm:h-68 bg-gray-300 flex items-center justify-center mx-6 sm:mx-16 rounded-2xl">
          <div className="flex flex-col items-center md:items-start justify-center text-center md:text-left space-y-4 ">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-black/75 uppercase tracking-wider">
              YX1 EARPHONES
            </h2>
            <Link
              href="/earphones"
              className="bg-transparent border-2 border-black/40 text-black/80 px-6 py-3 rounded hover:bg-black hover:text-white transition-all duration-300 cursor-pointer uppercase font-semibold tracking-wider text-sm md:text-base lg:text-lg max-w-fit"
            >
              See Product
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EarphoneCard;
