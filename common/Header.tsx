"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "Services", href: "#services" },
    { name: "Case Studies", href: "#case-studies" },
    { name: "About", href: "#about" },
    { name: "FAQ", href: "#faq" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="w-full">
      <div
        className="hidden md:flex w-full py-2 px-4 justify-center items-center"
        style={{ backgroundColor: "#4780B8" }}
      >
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3">
          <button className="px-4 py-1.5 bg-transparent border border-white/30 rounded-full text-white text-xs hover:bg-white/10 transition-all duration-200 whitespace-nowrap font-inter">
            New
          </button>
          <span className="text-white text-base text-center font-medium text-[16px] font-inter">
            🚀 Now Accepting New Clients—Spots Are Limited
          </span>
        </div>
      </div>

      <nav className="w-full px-4 sm:px-6 lg:px-8 py-4">
        <div className="container mx-auto">
          <div className="hidden md:flex w-full items-center justify-center">
            <div className="flex items-center gap-10 bg-[#0A0A0A7A]/48 shadow-4xl border border-gray-700 rounded-xl px-6 py-3">
              <Link href="#">
                <div className="relative">
                  <Image
                    src="/logo.png"
                    alt="Logo"
                    width={43}
                    height={43}
                    className="object-contain"
                    priority
                  />
                </div>
              </Link>
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-white hover:text-white/90 font-medium text-sm transition-colors duration-200 whitespace-nowrap font-inter"
                >
                  {link.name}
                </Link>
              ))}
              <button className="px-5 py-2 bg-[#4780B8] border border-[#4780B8] rounded-full text-white font-medium text-sm hover:bg-transparent transition-all duration-200 whitespace-nowrap font-inter cursor-pointer">
                Book a Call
              </button>
            </div>
          </div>
          <div className="md:hidden flex items-center justify-between">
            <Link href="#" className="shrink-0">
              <div className="relative w-32 h-12">
                <Image
                  src="/logo.png"
                  alt="Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>
            <button
              onClick={toggleMenu}
              className="p-2 text-gray-100 hover:text-gray-200 cursor-pointer transition-colors font-inter"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <FiX className="w-6 h-6" />
              ) : (
                <FiMenu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`md:hidden fixed inset-0 z-50 transform transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-full pointer-events-none"
        }`}
      >
        <div
          className={`absolute inset-0 bg-black transition-opacity duration-300 ${
            isMenuOpen ? "opacity-50" : "opacity-0"
          }`}
          onClick={closeMenu}
        />

        <div
          className={`absolute right-0 top-0 h-full w-full max-w-sm bg-white shadow-xl transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between p-6 border-b">
            <div className="relative w-32 h-8">
              <Image
                src="/logo.png"
                alt="Logo"
                fill
                className="object-contain"
              />
            </div>
            <button
              onClick={closeMenu}
              className="p-2 text-gray-700 hover:text-gray-900 transition-colors"
              aria-label="Close menu"
            >
              <FiX className="w-6 h-6" />
            </button>
          </div>

          <div className="p-6 h-[calc(100%-80px)] overflow-y-auto">
            <div className="flex flex-col space-y-1 mb-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={closeMenu}
                  className="text-gray-700 hover:text-gray-900 font-medium text-base py-4 px-3 rounded-lg hover:bg-gray-50 transition-all duration-200 font-inter"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <button
              onClick={closeMenu}
              className="w-full px-6 py-3 bg-transparent border border-[#0A0A0A7A] rounded-full text-gray-800 font-medium text-sm hover:bg-gray-50 transition-all duration-200"
            >
              Book a Call
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
