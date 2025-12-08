import React from "react";
import Image from "next/image";
import {
  FaFacebook,
  FaYoutube,
  FaInstagram,
  FaArrowRight,
} from "react-icons/fa";

export default function Footer() {
  const mainSiteLinks = [
    { name: "Home", href: "#" },
    { name: "Services", href: "#services" },
    { name: "Case Study", href: "#case-studies" },
    { name: "About Us", href: "#about" },
    { name: "FAQ", href: "#faq" },
  ];

  const contactInfo = [
    {
      value: "chad@rooferstage.com",
      href: "mailto:chad@rooferstage.com",
    },
    { value: "858 290 7392", href: "tel:858 290 7392" },
  ];

  const socialLinks = [
    { icon: <FaFacebook size={24} />, href: "#", label: "Facebook" },
    { icon: <FaYoutube size={24} />, href: "#", label: "YouTube" },
    { icon: <FaInstagram size={24} />, href: "#", label: "Instagram" },
  ];

  return (
    <footer className="relative w-full bg-[#0F0F0F] text-white overflow-hidden">
      <div className="absolute -top-10 left-0 w-full h-50 z-0">
        <Image
          src="/images/footertop.png"
          alt="Footer Gradient"
          fill
          className="object-center"
          priority
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 pt-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="space-y-6">
            <Image
              src="/images/footerlogo.png"
              alt="Logo"
              width={140}
              height={50}
              className="mb-2"
            />
            <p className="text-[#CECECE] font-inter leading-relaxed">
              We provide top-quality digital solutions to help businesses grow
              and succeed. Innovation, performance, and trust are our core
              values.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-inter mb-6 text-[#CECECE] uppercase tracking-wider">
              Main Site
            </h3>
            <ul className="space-y-4">
              {mainSiteLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="flex items-center gap-3 text-[#CECECE] hover:text-white transition-colors duration-300 group"
                  >
                    <FaArrowRight
                      className="text-white/60 group-hover:text-white group-hover:translate-x-1 transition-all duration-300"
                      size={16}
                    />

                    <span className="font-inter">{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-inter mb-6 text-[#CECECE] uppercase tracking-wider">
              Contact Info
            </h3>
            <ul className="space-y-4">
              {contactInfo.map((contact, index) => (
                <li key={index}>
                  <a
                    href={contact.href}
                    className="flex items-start gap-3 text-[#CECECE] hover:text-white transition-colors duration-300 group"
                  >
                    <FaArrowRight
                      className="text-white/60 group-hover:text-white group-hover:translate-x-1 transition-all duration-300 mt-1 shrink-0"
                      size={16}
                    />

                    <div>
                      <span className="font-inter">{contact.value}</span>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-inter mb-6 text-[#CECECE] uppercase tracking-wider">
              Social Info
            </h3>
            <div className="flex gap-4 mb-8">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="relative p-3 border-2 border-white/20 rounded-full hover:border-white/50 hover:scale-110 transition-all duration-300 group"
                >
                  {social.icon}
                  <div className="absolute inset-0 border-2 border-white/30 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-4 mb-8">
          <FaArrowRight className="text-white/30 rotate-180" size={20} />
          <div className="h-px w-16 bg-linear-to-r from-transparent via-white/30 to-transparent"></div>
          <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/10 to-transparent"></div>
          <div className="h-px w-16 bg-linear-to-r from-transparent via-white/30 to-transparent"></div>
          <FaArrowRight className="text-white/30" size={20} />
        </div>

        <div className="text-center py-6 border-t border-white/10">
          <div className="mb-4 md:mb-0">
            <span className="font-inter">
              © Copyright {new Date().getFullYear()} All Rights Reserved.
            </span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-10 opacity-5">
        <FaArrowRight size={100} className="rotate-45" />
      </div>
      <div className="absolute top-20 right-10 opacity-5">
        <FaArrowRight size={80} className="-rotate-45" />
      </div>
    </footer>
  );
}
