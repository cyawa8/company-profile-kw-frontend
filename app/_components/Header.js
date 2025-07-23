"use client";
import Logo from "./Logo";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <header className="sticky top-0 w-full z-50 border-b border-primary-900 px-12 bg-white transition-transform duration-300 ease-in-out">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <Logo />
        <Navigation />
      </div>
    </header>
  );
}
