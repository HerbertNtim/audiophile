import Image from "next/image";
import Link from "next/link";

const SpeakerCard = () => {
  return (
    <div className="w-full h-100 sm:py-32 sm:px-16 px-8 py-20">
      <div className="relative w-[90%] h-96 bg-amber-700 my-16 overflow-hidden rounded-lg">
        {/* Ripple Background */}
        <div className="absolute -bottom-[20%] left-[6rem] w-[20rem] h-[20rem] rounded-full border-2 border-white opacity-30 z-0" />
        <div className="absolute -bottom-[20%] left-[4rem] w-[25rem] h-[25rem] rounded-full border-2 border-white opacity-20 z-0" />
        <div className="absolute -bottom-[40%] left-[0rem] w-[40rem] h-[40rem] rounded-full border-2 border-white opacity-10 z-0" />

        <div className="relative w-full h-full flex flex-col sm:flex-row items-center justify-between px-8 py-3">
          {/* Speaker Image - Position remains unchanged */}
          <div className="absolute bottom-0 left-0 sm:translate-y-40 translate-y-25 z-10">
            <Image
              src="/images/image-category-thumbnail-speakers.png"
              alt="speaker"
              width={500}
              height={500}
              className="object-contain w-[70vw] sm:w-[300px] md:w-[400px] lg:w-[500px]"
            />
          </div>

          {/* Text Content - Made responsive */}
          <div className="absolute flex-1 sm:top-[40%] top-[35%] right-4 sm:right-16 transform -translate-y-1/2 z-20 text-white max-w-xl">
            <div className="text-center sm:text-left">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold uppercase leading-tight tracking-wider mb-1">
                ZX9 <br className="hidden lg:block" /> Speaker
              </h2>
              <p className="text-white/80 text-sm lg:text-base leading-relaxed mb-2 lg:mb-8">
                Upgrade to premium speakers that are <br /> phenomenally built
                to deliver truly remarkable <br /> sound.
              </p>
              <Link
                href="/speaker"
                className="px-6 py-3 bg-black text-white rounded hover:bg-gray-800 transition text-sm lg:text-base font-medium uppercase tracking-wider border border-transparent hover:border-gray-600"
              >
                See Product
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpeakerCard;
