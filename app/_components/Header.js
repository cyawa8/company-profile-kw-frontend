"use client";
import { useEffect, useRef, useState } from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";
import LanguageFlagSwitcher from "./Switcher";

export default function Header() {
  const [show, setShow] = useState(true);
  const lastScroll = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      if (y < 60) {
        setShow(true);
        lastScroll.current = y;
        return;
      }
      if (y > lastScroll.current && y > 100) {
        // Scroll down, hide header
        setShow(false);
      } else if (y < lastScroll.current) {
        // Scroll up, show header
        setShow(true);
      }
      lastScroll.current = y;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`
        sticky top-0 w-full z-50 border-b border-primary-900 bg-white
        transition-transform duration-300 ease-in-out
        px-4 md:px-12
        ${show ? "translate-y-0" : "-translate-y-full"}
      `}
      style={{ willChange: "transform" }}
    >
      <div className="flex items-center max-w-7xl mx-auto relative">
        <div className="flex-shrink-0">
          <Logo />
        </div>
        <div className="hidden md:flex flex-1 justify-center">
          <Navigation />
        </div>
        <div className="hidden md:flex flex-shrink-0 ml-6">
          <LanguageFlagSwitcher />
        </div>
        <div className="flex md:hidden flex-1 justify-end">
          <Navigation />
        </div>
      </div>
    </header>
  );
}
