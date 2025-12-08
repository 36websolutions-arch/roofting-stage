"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question:
      "How does Roofer Stage get qualified roof replacement appointments?",
    answer:
      "Looking for reliable siding installation? We install premium siding that’s built for durability, insulation, and long-lasting curb appeal. Our process includes removing old siding, repairing structural issues, and installing new materials with precision for a flawless finish that protects your home year-round.",
  },
  {
    id: 2,
    question: "What counts as a “qualified” appointment?",
    answer:
      "Standard shipping takes 3-5 business days within the US. Express shipping is available for 1-2 business days.",
  },
  {
    id: 3,
    question: "What happens if you don’t deliver 25 appointments in 30 days?",
    answer:
      "Yes, we ship to over 50 countries worldwide. International shipping typically takes 7-14 business days.",
  },
  {
    id: 4,
    question: "Do you lock clients into contracts?",
    answer:
      "Once your order ships, you'll receive a tracking number via email. You can also track it from your account dashboard.",
  },
  {
    id: 5,
    question: "Do you have a guarantee?",
    answer:
      "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and Apple Pay.",
  },
];

export default function Faq() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleAnswer = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="faq" className="relative">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/Card.png"
          alt="FAQ Background"
          fill
          className="object-center"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>
      <div className="relative z-10 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-5xl mx-auto ">
          <div className="text-center">
            <div className="mb-8">
              <span className="text-base font-medium font-inter text-white bg-black/10 drop-shadow-2xl border border-white/30 rounded-full px-6 py-2 shadow-2xl">
                FAQ
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-inter text-white mb-12">
              Answers to your{" "}
              <span className="italic font-normal font-serif">questions</span>
            </h1>
          </div>
          <div className=" p-6 md:p-2">
            {faqData.map((item) => (
              <div
                key={item.id}
                className={`mb-4 last:mb-0 border-b border-[#B7B7B7] last:border-b-0 transition-all duration-300 ${
                  expandedId === item.id ? "pb-4" : ""
                }`}
              >
                <button
                  onClick={() => toggleAnswer(item.id)}
                  className="w-full flex items-center justify-between p-3 text-left rounded-xl transition-all duration-300 group"
                >
                  <h3 className="text-lg md:text-xl font-semibold text-white pr-4">
                    {item.question}
                  </h3>
                  <div className="flex-shrink-0">
                    <FaArrowRightLong
                      className={`text-white transition-all duration-300 ${
                        expandedId === item.id
                          ? "rotate-45"
                          : "group-hover:translate-x-1"
                      }`}
                      size={20}
                    />
                  </div>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    expandedId === item.id
                      ? "max-h-96 opacity-100 translate-x-0"
                      : "max-h-0 opacity-0 -translate-x-4"
                  }`}
                >
                  <div className="px-2">
                    <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
