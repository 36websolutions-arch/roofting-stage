"use client";
import Image from "next/image";
import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";

export default function TabCard() {
  const [activeTab, setActiveTab] = useState(1);

  const [formData, setFormData] = useState({
    role: "",
    roofType: "",
    revenue: "",
    fullName: "",
    phone: "",
    email: "",
    businessName: "",
  });

  const tabs = [
    { id: 1, title: "Role in the company", requiredField: "role" },
    { id: 2, title: "Roof Type", requiredField: "roofType" },
    { id: 3, title: "Monthly Revenue", requiredField: "revenue" },
    { id: 4, title: "Fill Form", requiredField: "allFields" },
  ];

  const isCurrentStepCompleted = () => {
    const currentTab = tabs.find((tab) => tab.id === activeTab);

    if (!currentTab) return false;

    if (currentTab.requiredField === "allFields") {
      return (
        formData.fullName.trim() !== "" &&
        formData.phone.trim() !== "" &&
        formData.email.trim() !== "" &&
        formData.businessName.trim() !== ""
      );
    }

    const fieldName = currentTab.requiredField as keyof typeof formData;
    return formData[fieldName] !== "";
  };

  const goNext = () => {
    if (activeTab < tabs.length && isCurrentStepCompleted()) {
      setActiveTab(activeTab + 1);
    }
  };

  const goPrev = () => {
    if (activeTab > 1) setActiveTab(activeTab - 1);
  };

  const handleSubmit = async () => {
    if (!isCurrentStepCompleted()) return;

    try {
      const response = await fetch("/api/form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        alert("Form submitted successfully!");
        console.log("Email response:", result);

        setFormData({
          role: "",
          roofType: "",
          revenue: "",
          fullName: "",
          phone: "",
          email: "",
          businessName: "",
        });
      } else {
        alert("Failed to submit form. Please try again.");
        console.error(result);
      }
    } catch (error) {
      console.error("Submit error:", error);
      alert("Something went wrong!");
    }
  };

  return (
    <section
      id="services"
      className="bg-linear-to-t h-auto md:h-[400px] from-[#2A2A2A]/30 to-[#2A2A2A]/10 -mt-42 relative z-20">
      <div className="max-w-[967px] mx-auto h-auto md:h-[505px] relative -top-28 bg-[#2A2A2A] shadow-2xl border border-[#E1E1E6] rounded-md p-4 space-y-2 flex flex-col">
        <div>
          <h2 className="text-center text-white text-2xl md:text-3xl lg:text-[32px] font-inter font-bold py-6">
            Fill out the form to see if you qualify
          </h2>

          <div className="flex flex-wrap items-center justify-center border-b-4 border-[#E1E1E6] pb-8 gap-4">
            {tabs.map((tab, index) => (
              <div key={tab.id} className="flex items-center gap-6">
                <div
                  onClick={() => {
                    // const isCompleted = tabs.find((t) => t.id === tab.id);
                    if (tab.id <= activeTab) {
                      setActiveTab(tab.id);
                    }
                  }}
                  className={`w-8 h-8 flex items-center justify-center cursor-pointer border font-bold border-white/20 rounded-full 
                    ${
                      tab.id < activeTab
                        ? "bg-[#4780B8] text-white"
                        : tab.id === activeTab
                        ? "bg-[#4780B8] text-white"
                        : "bg-[#E1E1E6]/60 text-gray-700"
                    }
                    ${
                      tab.id <= activeTab
                        ? "cursor-pointer"
                        : "cursor-not-allowed"
                    }
                  `}>
                  {tab.id}
                </div>

                <h4
                  onClick={() => {
                    if (tab.id <= activeTab) {
                      setActiveTab(tab.id);
                    }
                  }}
                  className={`text-lg font-bold ${
                    tab.id <= activeTab
                      ? "text-white cursor-pointer"
                      : "text-[#8D8D99] cursor-not-allowed"
                  }`}>
                  {tab.title}
                </h4>

                {index !== tabs.length - 1 && (
                  <IoIosArrowForward className="text-lg" />
                )}
              </div>
            ))}
          </div>

          <div className="p-6 text-center text-white text-lg">
            {activeTab === 1 && (
              <div className="flex flex-wrap items-center justify-center gap-8">
                {[
                  { text: "CEO / Owner", icon: "/images/tab1icon1.png" },
                  {
                    text: "Marketing Director / other C-Level",
                    icon: "/images/tab1icon2.png",
                  },
                  { text: "Sales rep", icon: "/images/tab1icon3.png" },
                  { text: "Other", icon: "/images/tab1icon4.png" },
                ].map((item) => (
                  <div
                    key={item.text}
                    onClick={() =>
                      setFormData({ ...formData, role: item.text })
                    }
                    className={`flex flex-col items-center justify-center gap-3 w-48 h-48 rounded-2xl cursor-pointer
                      ${
                        formData.role === item.text
                          ? "border border-[#4092FF] bg-[#0A0A0A]"
                          : "border border-black bg-[#0A0A0A]"
                      }`}>
                    <div className="bg-black h-16 w-16 rounded-full flex items-center justify-center">
                      <Image
                        src={item.icon}
                        alt="tabicons"
                        width={30}
                        height={30}
                      />
                    </div>
                    <h2 className="text-white text-base font-semibold">
                      {item.text}
                    </h2>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 2 && (
              <div className="flex flex-wrap items-center justify-center gap-8">
                {[
                  { text: "Residential", icon: "/images/tab2icon1.png" },
                  { text: "Commercial", icon: "/images/tab2icon2.png" },
                  { text: "Both", icon: "/images/tab2icon3.png" },
                ].map((item) => (
                  <div
                    key={item.text}
                    onClick={() =>
                      setFormData({ ...formData, roofType: item.text })
                    }
                    className={`flex flex-col items-center justify-center gap-3 w-48 h-48 rounded-2xl cursor-pointer
                      ${
                        formData.roofType === item.text
                          ? "border border-[#4092FF] bg-[#0A0A0A]"
                          : "border border-black bg-[#0A0A0A]"
                      }`}>
                    <div className="bg-black h-16 w-16 rounded-full flex items-center justify-center">
                      <Image
                        src={item.icon}
                        alt="tabicons"
                        width={36}
                        height={36}
                      />
                    </div>
                    <h2 className="text-white text-base font-semibold">
                      {item.text}
                    </h2>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 3 && (
              <div className="flex flex-col items-center justify-center space-y-6">
                <h3 className="text-lg font-bold">
                  Approximate Monthly Revenue
                </h3>

                <div className="grid grid-cols-2 gap-6 w-full justify-evenly">
                  {[
                    "0 - $100k",
                    "$100k - $250k",
                    "$250k - $500k",
                    "$500k - $1M",
                    "$1M+",
                  ].map((range) => (
                    <label
                      key={range}
                      className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="revenue"
                        checked={formData.revenue === range}
                        onChange={() =>
                          setFormData({ ...formData, revenue: range })
                        }
                        className="w-6 h-6 accent-blue-400"
                      />
                      <span className="text-white text-lg">{range}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 4 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col space-y-2">
                  <label className="text-sm">Full Name</label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) =>
                      setFormData({ ...formData, fullName: e.target.value })
                    }
                    className="w-full bg-gray-400 text-white h-12 px-7 rounded-2xl outline-none"
                    placeholder="John Doe"
                  />
                </div>

                <div className="flex flex-col space-y-2">
                  <label className="text-sm">Phone</label>
                  <input
                    type="phone"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full bg-gray-400 text-white h-12 px-7 rounded-2xl outline-none"
                    placeholder="+440000000"
                  />
                </div>

                <div className="flex flex-col space-y-2">
                  <label className="text-sm">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full bg-gray-400 text-white h-12 px-7 rounded-2xl outline-none"
                    placeholder="john@gmail.com"
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <label className="text-sm">Business Name</label>
                  <input
                    type="text"
                    value={formData.businessName}
                    onChange={(e) =>
                      setFormData({ ...formData, businessName: e.target.value })
                    }
                    className="w-full bg-gray-400 text-white h-12 px-7 rounded-2xl outline-none"
                    placeholder="ABC Company"
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="flex items-center justify-between mt-auto pt-4">
          <button
            onClick={goPrev}
            disabled={activeTab === 1}
            className={`px-6 py-2 rounded-xl text-lg font-semibold text-black 
              ${
                activeTab === 1
                  ? "bg-gray-600 cursor-not-allowed"
                  : "bg-[#E62E50]"
              }`}>
            Previous
          </button>

          {activeTab < 4 ? (
            <button
              onClick={goNext}
              disabled={!isCurrentStepCompleted()}
              className={`px-6 py-2 rounded-xl text-lg font-semibold text-black
                ${
                  isCurrentStepCompleted()
                    ? "bg-[#4780B8]"
                    : "bg-gray-600 cursor-not-allowed"
                }`}>
              Next
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              disabled={!isCurrentStepCompleted()}
              className={`px-6 py-2 rounded-xl text-lg font-semibold text-black
                ${
                  isCurrentStepCompleted()
                    ? "bg-[#4092FF]"
                    : "bg-gray-600 cursor-not-allowed"
                }`}>
              Finish
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
