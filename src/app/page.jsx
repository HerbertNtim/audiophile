import Category from "@/components/Category";
import SpeakerCard from "@/components/SpeakerCard";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full h-screen">
      <div className="relative min-h-[600px] md:min-h-[700px] lg:min-h-screen w-full">
        {/* Background image */}
        <Image
          src="/images/image-hero.jpg"
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
              NEW PRODUCT
            </h4>
            <h1 className="text-4xl sm:text-7xl md:text-6xl 2xl:text-9xl font-bold uppercase leading-tight">
              XX99 Mark II <br /> Headphones
            </h1>
            <p className="text-sm sm:text-lg  text-gray-400 my-4 sm:my-8 mb-12">
              Experience natural, lifelike audio and exceptional <br /> build
              quality made for the passionate music <br /> enthusiast.
            </p>
            <Link
              href={"/headphones"}
              className="sm:mt-8 bg-orange-500 text-white sm:px-8 sm:py-4 px-6 py-3 rounded hover:bg-orange-700 transition cursor-pointer uppercase font-semibold tracking-wider"
            >
              See Product
            </Link>
          </div>
        </div>
      </div>

      {/* CATEGORIES */}
      <div className="bg-gray-200 pt-45 pb-25 flex flex-col items-center">
        <Category />
        <SpeakerCard />
      </div>
    </div>
  );
}
