import React from "react";
import Image from "next/image";

export default function HeroPage() {
  return (
    <section
      id="hero"
      className="relative w-full min-h-auto flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/bgherocenter.png"
          alt="Hero Background"
          fill
          className="object-contain"
          priority
        />
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 bg-linear-to-b from-black/10 via-black/10 to-black/10"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-14 py-10 text-center">
        <h1 className="mb-6 text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight font-inter">
          25 Shown, Qualified Roof Replacement Appointments Every 30 Days – Or
          you literally don&apos;t pay us
        </h1>

        <p className="mb-8 sm:mb-12 text-lg sm:text-xl md:text-2xl text-gray-200 font-inter max-w-3xl mx-auto leading-relaxed">
          We book you 25 proven roof replacement appointments each month, or you
          pay nothing. Zero risk, all results.
        </p>

        <div className="mb-76 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <button className="px-8 py-4 bg-[#4780B8] text-black rounded-full font-semibold text-lg sm:text-xl hover:bg-[#4780B8]/90 hover:scale-105 transition-all duration-300 transform font-inter shadow-lg hover:shadow-xl cursor-pointer">
            Book a call
          </button>
        </div>
      </div>
    </section>
  );
}
