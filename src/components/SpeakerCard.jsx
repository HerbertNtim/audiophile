import Image from "next/image";
import React from "react";

const SpeakerCard = () => {
  return (
    <div className="relative w-full md:w-2/3 h-96 bg-amber-700 my-16 overflow-hidden rounded-lg">
      {/* Ripple Background */}
      <div className="absolute -bottom-[20%] left-[6rem] w-[20rem] h-[20rem] rounded-full border-2 border-white opacity-30 z-0" />
      <div className="absolute -bottom-[20%] left-[4rem] w-[25rem] h-[25rem] rounded-full border-2 border-white opacity-20 z-0" />
      <div className="absolute -bottom-[40%] left-[0rem] w-[40rem] h-[40rem] rounded-full border-2 border-white opacity-10 z-0" />

      {/* Speaker Image */}
      <div className="absolute bottom-0 left-0 translate-y-40 z-10">
        <Image
          src="/images/image-category-thumbnail-speakers.png"
          alt="speaker"
          width={500}
          height={500}
          className="object-contain"
        />
      </div>

      {/* Text Content */}
      <div className="relative z-20 flex items-center justify-end h-full pr-10 text-white">
        <div className="max-w-sm text-right">
          <h2 className="text-3xl font-bold uppercase">ZX9 Speaker</h2>
          <p className="text-white/80 mt-2">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <button className="mt-4 px-6 py-3 bg-black text-white rounded hover:bg-gray-800 transition">
            See Product
          </button>
        </div>
      </div>
    </div>
  );
};

export default SpeakerCard;
