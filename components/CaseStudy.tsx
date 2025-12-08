import Image from "next/image";
import React from "react";

export default function CaseStudy() {
  return (
    <section
      id="case-studies"
      className="relative w-full h-auto md:min-h-[600px] flex items-center justify-center overflow-hidden py-10 md:py-20"
    >
      <div className="absolute inset-0 flex">
        <div className="relative flex-1">
          <Image
            src="/images/leftImage.png"
            alt="Left"
            fill
            className="object-cover object-left"
            sizes="50vw"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-r from-black/30 via-black/60 to-transparent" />
        </div>

        <div className="relative flex-1">
          <Image
            src="/images/rightImage.png"
            alt="Right"
            fill
            className="object-cover object-right"
            sizes="50vw"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-l from-black/10 via-black/60 to-transparent" />
        </div>
      </div>

      <div className="absolute inset-0 bg-linear-to-r from-transparent via-black/20 to-transparent z-5" />

      <div className="relative z-10 text-center px-6 container mx-auto">
        <div className="mb-6">
          <span className="text-base font-medium font-inter text-white bg-white/5 drop-shadow-2xl border border-white/30 rounded-full px-6 py-2 shadow-2xl">
            Case Studies
          </span>
        </div>
        <h1 className="text-[48px] font-semibold font-inter text-center mb-8 text-white">
          Check Our{" "}
          <span className="italic font-normal font-serif">Case Studies</span>
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center gap-6">
          <div className="flex flex-col bg-[#0D0D0D] px-6 py-8 border border-[#2A2A2A] space-y-6 rounded-2xl h-full">
            <div className="relative w-full">
              <div className="relative w-full h-48 rounded-2xl overflow-hidden">
                <Image
                  src="/images/casestudy.png"
                  alt="case study 1"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority
                />
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 flex items-center justify-center">
                    <Image
                      src="/images/play.png"
                      alt="play"
                      width={64}
                      height={64}
                      className="object-contain"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
            <h2 className="text-[19px] font-inter font-extrabold text-white text-start">
              Steven LeBlanc - Legacy Construction
            </h2>
          </div>

          <div className="flex flex-col bg-[#0D0D0D] px-6 py-8 border border-[#2A2A2A] space-y-6 rounded-2xl h-full">
            <div className="relative w-full">
              <div className="relative w-full h-48 rounded-2xl overflow-hidden">
                <Image
                  src="/images/casestudy.png"
                  alt="case study 2"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority
                />
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 flex items-center justify-center">
                    <Image
                      src="/images/play.png"
                      alt="play"
                      width={64}
                      height={64}
                      className="object-contain"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
            <h2 className="text-[19px] font-inter font-extrabold text-white text-start">
              Justin Szarek - L7 Roofing
            </h2>
          </div>

          <div className="flex flex-col bg-[#0D0D0D] px-6 py-8 border border-[#2A2A2A] space-y-6 rounded-2xl h-full">
            <div className="relative w-full">
              <div className="relative w-full h-48 rounded-2xl overflow-hidden">
                <Image
                  src="/images/casestudy.png"
                  alt="case study 3"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority
                />
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 flex items-center justify-center">
                    <Image
                      src="/images/play.png"
                      alt="play"
                      width={64}
                      height={64}
                      className="object-contain"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
            <h2 className="text-[19px] font-inter font-extrabold text-white text-start">
              Jacob Barker - Barker Family Roofing
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
