import Image from "next/image";
import Link from "next/link";
import React from "react";

const HumanPlay = () => {
  return (
    <div className="min-h-[300px] md:min-h-[400px] lg:min-h-[450px] w-full rounded-2xl overflow-hidden">
      <div className="flex flex-col lg:flex-row w-full h-full gap-0 py-32">
        {/* TEXT CONTENT */}
        <div className="w-[80%] h-90 sm:w-[90%] flex items-center justify-center mx-6 lg:mx-16 rounded-2xl py-10 my-10">
          <div className="flex flex-col items-center md:items-start justify-center text-center md:text-left space-y-4 ">
            <h2 className="text-2xl lg:text-3xl font-bold text-black/75 uppercase tracking-wider">
              You the got the <br /> best Gear to Play
            </h2>
            <p className="text-sm md:text-base lg:text-lg text-gray-500 max-w-md">
              Experience the ultimate in sound quality and comfort with our
              latest headphones, designed for the true audiophile.
            </p>
            <p className="text-sm md:text-base lg:text-lg text-gray-500 max-w-md mb-10">
              Make every moment count with our premium audio gear, crafted to
              elevate your listening experience to new heights.
            </p>

            <Link
              href="/earphones"
              className="bg-transparent border-2 border-black/40 text-black/80 px-6 py-3 rounded hover:bg-black hover:text-white transition-all duration-300 cursor-pointer uppercase font-semibold tracking-wider text-sm md:text-base lg:text-lg max-w-fit"
            >
              See Product
            </Link>
          </div>
        </div>

        {/* EARPHONE IMAGE */}
        <div className="w-[90%] h-70 px-16">
          <Image
            src="/images/image-best-gear.jpg"
            alt="YX1 Earphones"
            width={450}
            height={450}
            className="object-cover rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default HumanPlay;
