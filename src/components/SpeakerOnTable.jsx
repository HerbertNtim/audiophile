import Image from "next/image";
import Link from "next/link";
import React from "react";

const SpeakerOnTable = () => {
  return (
    <div className="relative min-h-[300px] md:min-h-[400px] lg:min-h-[450px] w-[90%] rounded-2xl overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/image-speaker-zx7.jpg"
        alt="ZX7 Speaker"
        fill
        className="object-cover z-0"
        priority
      />

      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/20 z-10" />

      {/* Content container */}
      <div className="relative z-20 flex flex-col justify-center h-full px-6 py-16 sm:px-28 sm:py-26">
        <h3 className="text-2xl sm:text-6xl font-bold text-black/75 mb-6 sm:mb-8 uppercase tracking-wider text-center sm:text-left">
          ZX7 Speaker
        </h3>
        <Link
          href="/speakers"
          className="bg-transparent border-2 border-black/40 text-black/80 px-6 py-3 rounded hover:bg-black hover:text-white transition-all duration-300 cursor-pointer uppercase font-semibold tracking-wider text-lg sm:text-2xl text-center sm:text-left self-center sm:self-start max-w-fit"
        >
          See Product
        </Link>
      </div>
    </div>
  );
};

export default SpeakerOnTable;
