import React from "react";
import Image from "next/image";

export default function QulifiedLead() {
  return (
    <section className="relative w-full min-h-screen bg-[#0a0a0a] overflow-hidden">
      <div className="absolute -top-44 left-0 w-full h-full z-10">
        <Image
          src="/images/leftImage.png"
          alt="Left decoration"
          fill
          className="object-contain object-top-left"
          sizes="(max-width: 768px) 33vw, 25vw"
          priority
        />
      </div>
      <div className="absolute -bottom-56 right-0 w-full h-full z-10">
        <Image
          src="/images/rightImage.png"
          alt="Right decoration"
          fill
          className="object-contain object-bottom-right"
          sizes="(max-width: 768px) 33vw, 25vw"
          priority
        />
      </div>

      <div className="relative z-20 min-h-screen flex items-center justify-center px-4 py-16">
        <div className="container mx-auto text-center">
          <div className="mb-8">
            <span className="text-base font-medium font-inter text-white bg-white/5 drop-shadow-2xl border border-white/30 rounded-full px-6 py-2 shadow-2xl">
              Qualified Leads
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-inter text-white mb-6">
            What is a{" "}
            <span className="italic font-normal font-serif">
              &quot;qualified&quot;
            </span>{" "}
            appointment?
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="flex flex-col bg-[#0D0D0D] px-6 py-8 border border-[#2A2A2A] space-y-6 rounded-2xl h-full">
              <Image
                src={"/images/qulifyicon1.png"}
                alt="work icons 1"
                width={56}
                height={56}
                priority
                className="p-3 bg-white/10 rounded-full border border-[#303030]"
              />
              <h3 className="text-white font-inter text-2xl tracking-wider text-start">
                Storm / Insurance
              </h3>
              <p className="text-white text-base font-inter text-start grow">
                Hail & wind footprints, policy‑holder scripting, adjuster‑ready
                appointments.
              </p>
            </div>

            <div className="flex flex-col bg-[#0D0D0D] px-6 py-8 border border-[#2A2A2A] space-y-6 rounded-2xl h-full">
              <Image
                src={"/images/qulifyicon2.png"}
                alt="work icons 1"
                width={56}
                height={56}
                priority
                className="p-3 bg-white/10 rounded-full border border-[#303030]"
              />
              <h3 className="text-white font-inter text-2xl tracking-wider text-start">
                Retail
              </h3>
              <p className="text-white text-base font-inter text-start grow">
                Bid‑ready homeowners. Upsell upgrades, financing‑friendly.
              </p>
            </div>

            <div className="flex flex-col bg-[#0D0D0D] px-6 py-8 border border-[#2A2A2A] space-y-6 rounded-2xl h-full">
              <Image
                src={"/images/qulifyicon3.png"}
                alt="work icons 3"
                width={56}
                height={56}
                priority
                className="p-3 bg-white/10 rounded-full border border-[#303030]"
              />
              <h3 className="text-white font-inter text-2xl tracking-wider text-start">
                All Homeowners Present
              </h3>
              <p className="text-white text-base font-inter text-start grow">
                All decision makers present, with the ability to be closed.
              </p>
            </div>
            <div className="flex flex-col bg-[#0D0D0D] px-6 py-8 border border-[#2A2A2A] space-y-6 rounded-2xl h-full">
              <Image
                src={"/images/qulifyicon4.png"}
                alt="work icons 4"
                width={56}
                height={56}
                priority
                className="p-3 bg-white/10 rounded-full border border-[#303030]"
              />
              <h3 className="text-white font-inter text-2xl tracking-wider text-start">
                Show Rate
              </h3>
              <p className="text-white text-base font-inter text-start grow">
                We don&apos;t count no shows. You only pay for qualified sits
              </p>
            </div>
            <div className="flex flex-col bg-[#0D0D0D] px-6 py-8 border border-[#2A2A2A] space-y-6 rounded-2xl h-full">
              <Image
                src={"/images/qulifyicon5.png"}
                alt="work icons 5"
                width={56}
                height={56}
                priority
                className="p-3 bg-white/10 rounded-full border border-[#303030]"
              />
              <h3 className="text-white font-inter text-2xl tracking-wider text-start">
                Real Need. Not curiosity.
              </h3>
              <p className="text-white text-base font-inter text-start grow">
                We have a 100% moneyback quality guarantee for any appointment
                that doesn&apos;t actually NEED a roof replacement. No tire
                kickers.
              </p>
            </div>
            <div className="flex flex-col bg-[#0D0D0D] px-6 py-8 border border-[#2A2A2A] space-y-6 rounded-2xl h-full">
              <Image
                src={"/images/qulifyicon6.png"}
                alt="work icons 6"
                width={56}
                height={56}
                priority
                className="p-3 bg-white/10 rounded-full border border-[#303030]"
              />
              <h3 className="text-white font-inter text-2xl tracking-wider text-start">
                Income qualified
              </h3>
              <p className="text-white text-base font-inter text-start grow">
                Homeowner appointments in areas with a 70k/year minimum income
              </p>
            </div>
          </div>

          <div className="max-w-3xl mx-auto bg-[#0D0D0D]  border border-[#2A2A2A] rounded-4xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 items-center px-12 py-8">
              <div className="flex flex-col items-start space-y-4">
                <h2 className="text-3xl text-white md:text-[32px] font-semibold font-inter text-start">
                  Exclusions & Filters
                </h2>
                <ul className="list-disc text-white text-start pl-4">
                  <li>Exclude roof types (e.g., Tile/Flat)</li>
                  <li>Exact ZIP or radius targeting</li>
                  <li>Homeowner type & roof age filters</li>
                </ul>
              </div>
              <div>
                <button className="px-8 py-3 bg-[#4780B8] hover:bg-[#3b77b4] backdrop-blur-sm text-black font-semibold rounded-2xl cursor-pointer transition-all duration-300 font-inter text-base">
                  Tell us your targeting
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
