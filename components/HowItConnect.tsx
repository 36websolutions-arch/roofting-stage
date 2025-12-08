import Image from "next/image";

export default function HowItConnect() {
  return (
    <section
      id="about"
      className="relative w-full h-auto md:min-h-[691px] flex items-center justify-center overflow-hidden py-10 md:py-20"
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
          <div className="absolute inset-0 bg-linear-to-l from-black/30 via-black/60 to-transparent" />
        </div>
      </div>

      <div className="absolute inset-0 bg-linear-to-r from-transparent via-black/20 to-transparent z-5" />

      <div className="relative z-10 text-center px-6 container mx-auto">
        <div className="mb-6">
          <span className="text-base font-medium font-inter text-white bg-white/5 drop-shadow-2xl border border-white/30 rounded-full px-6 py-2 shadow-2xl">
            How It Work
          </span>
        </div>
        <h1 className="text-[48px] font-semibold font-inter text-center mb-8 text-white">
          Connect with Your{" "}
          <span className="italic font-normal font-serif">Ideal</span> Customers
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="flex flex-col bg-[#0D0D0D] px-6 py-8 border border-[#2A2A2A] space-y-6 rounded-2xl h-full">
            <Image
              src={"/images/workicon1.png"}
              alt="work icons 1"
              width={80}
              height={80}
              priority
              className="p-4 bg-black rounded-full border border-[#4780B8]/35"
            />
            <h2 className="text-white font-inter text-2xl tracking-wider text-start">
              Target
            </h2>
            <p className="text-white text-base font-inter text-start grow">
              You door knock the best areas. We do the same. You don&apos;t find
              the best quality everywhere. It has to be intentional.
            </p>
          </div>
          <div className="flex flex-col bg-[#0D0D0D] px-6 py-8 border border-[#2A2A2A] space-y-6 rounded-2xl h-full">
            <Image
              src={"/images/workicon2.png"}
              alt="work icons 2"
              width={80}
              height={80}
              priority
              className="p-4 bg-black rounded-full border border-[#4780B8]/35"
            />
            <h2 className="text-white font-inter text-2xl tracking-wider text-start">
              Qualify
            </h2>
            <p className="text-white text-base font-inter text-start grow">
              We make sure that every single lead coming through is filtered and
              vetted for roof age, damage, need, and financial ability to get a
              roof replaced – no wasted time or gas.
            </p>
          </div>

          <div className="flex flex-col bg-[#0D0D0D] px-6 py-8 border border-[#2A2A2A] space-y-6 rounded-2xl h-full">
            <Image
              src={"/images/workicon3.png"}
              alt="work icons 3"
              width={93}
              height={93}
              priority
              className="p-4 bg-black rounded-full border border-[#4780B8]/35"
            />
            <h2 className="text-white font-inter text-2xl tracking-wider text-start">
              Win
            </h2>
            <p className="text-white text-base font-inter text-start grow">
              We don&apos;t send you &quot;leads&quot;. We send you BOOKED
              APPOINTMENTS. You have the sales guys, we supply them with the
              sits. All they have to do is close the deal. We make it easy.
            </p>
          </div>
        </div>
        <button className="mt-8 px-8 py-3 bg-[#4780B8] hover:bg-[#3b77b4] backdrop-blur-sm text-black font-semibold rounded-2xl cursor-pointer transition-all duration-300 font-inter text-base">
          Book a call
        </button>
      </div>
    </section>
  );
}
