"use client";
import { useState, useEffect } from "react";
import { Menu, X, Phone, Plant2 } from "tabler-icons-react";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // مراقبة السكرول لتغيير خلفية الهيدر
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "الرئيسية", href: "/" },
    { name: "خدماتنا", href: "#services" },
    { name: "مشاريعنا", href: "#projects" },
    { name: "من نحن", href: "#about" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-100 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-5 flex justify-between items-center">
        {/* اللوجو */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-main p-2 rounded-xl group-hover:rotate-12 transition-transform">
            <Plant2 size={28} className="text-white" />
          </div>
          <div className="flex flex-col">
            <span
              className={`font-black text-xl leading-none ${scrolled ? "text-main" : "text-slate-600"}`}
            >
              RAVINALA
            </span>
            <span
              className={`text-[10px] tracking-[3px] font-bold ${scrolled ? "text-slate-500" : "text-slate-400"}`}
            >
              LANDSCAPE
            </span>
          </div>
        </Link>

        {/* المنيو لـ Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`font-bold hover:text-accent transition-colors ${
                scrolled ? "text-slate-700" : "text-slate-500"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* زر اتصل بنا */}
        <div className="hidden md:block">
          <Link
            href="#contact"
            className="bg-main hover:bg-main-light text-white px-6 py-2.5 rounded-full font-bold flex items-center gap-2 transition-all hover:scale-105 active:scale-95"
          >
            <Phone size={18} />
            اتصل بنا
          </Link>
        </div>

        {/* زر الموبايل */}
        <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <X size={30} className={scrolled ? "text-main" : "text-white"} />
          ) : (
            <Menu size={30} className={scrolled ? "text-main" : "text-white"} />
          )}
        </button>
      </div>

      {/* المنيو للموبايل */}
      <div
        className={`absolute top-full left-0 w-full bg-white shadow-2xl transition-all duration-300 overflow-hidden md:hidden ${isOpen ? "max-h-96 border-t" : "max-h-0"}`}
      >
        <div className="flex flex-col p-6 gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-slate-800 font-bold text-lg border-b border-slate-100 pb-2"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="#contact"
            className="bg-main text-white text-center py-4 rounded-xl font-black flex items-center justify-center gap-2"
          >
            <Phone size={20} />
            ابدأ مشروعك الآن
          </Link>
        </div>
      </div>
    </nav>
  );
}
