import SpeakerCard from "@/components/SpeakerCard";
import { speakers } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Speakers = () => {
  return (
    <div>
      <div className="relative w-full h-120 bg-amber-700 overflow-hidden">
        {/* Ripple Background */}
        <div className="absolute -bottom-[20%] left-[6rem] w-[20rem] h-[20rem] rounded-full border-2 border-white opacity-30 z-0" />
        <div className="absolute -bottom-[20%] left-[4rem] w-[25rem] h-[25rem] rounded-full border-2 border-white opacity-20 z-0" />
        <div className="absolute -bottom-[40%] left-[0rem] w-[40rem] h-[40rem] rounded-full border-2 border-white opacity-10 z-0" />

        <div className="relative w-full h-full flex flex-col sm:flex-row items-center justify-between px-8 py-3">
          {/* Speaker Image */}
          <div className="absolute bottom-0 left-0 sm:translate-y-40 translate-y-25 z-10">
            <Image
              src="/images/image-category-thumbnail-speakers.png"
              alt="speaker"
              width={500}
              height={500}
              className="object-contain w-[70vw] sm:w-[300px] md:w-[400px] lg:w-[500px]"
            />
          </div>

          {/* Text Content */}
          <div className="absolute flex-1 sm:top-[55%] top-[35%] right-4 sm:right-16 transform -translate-y-1/2 z-20 text-white max-w-xl">
            <div className="text-center sm:text-left">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase leading-tight tracking-wider mb-1">
                Speakers
              </h2>
              <p className="text-white/70 text-sm lg:text-base leading-relaxed mb-2 lg:mb-8">
                Listen to your favorite music with the <br />
                best sound quality. Our speakers are <br /> phenomenally built
                to deliver truly remarkable <br /> sound.
              </p>
              <Link
                href="#speakers"
                className="px-6 py-3 bg-black text-white rounded hover:bg-gray-800 transition text-sm lg:text-base font-medium uppercase tracking-wider border border-transparent hover:border-gray-600"
              >
                See Products
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Speaker Cards Section */}
      <div
        className="bg-gray-200 pt-25 pb-10 flex flex-col items-center"
        id="speakers"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6 md:px-16">
          {speakers.map((speaker) => (
            <div
              key={speaker.id}
              className="bg-gray-300 p-4 rounded-lg shadow-md"
            >
              <Image
                src={speaker.image}
                alt={`Headphone ${speaker.id}`}
                width={300}
                height={300}
                className="w-full h-auto rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold text-black">
                {speaker.name}
              </h3>
              <div className="flex items-center justify-between mt-2">
                <p className="text-gray-500 text-xl">${speaker.price}</p>
                <button className="bg-orange-500 px-2 py-1 rounded hover:bg-orange-700 transition cursor-pointer">
                  <Image
                    src={"/icons/icon-cart.svg"}
                    alt="cart"
                    width={25}
                    height={25}
                    className="object-cover"
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

export default Speakers;
