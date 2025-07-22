"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const closeTimeout = useRef();
  const pathName = usePathname();

  const openDropdown = (key) => {
    window.clearTimeout(closeTimeout.current);
    setDropdownOpen(key);
  };

  const scheduleClose = () => {
    closeTimeout.current = window.setTimeout(() => {
      setDropdownOpen(null);
    }, 200);
  };

  useEffect(() => () => window.clearTimeout(closeTimeout.current), []);

  const links = [
    {
      href: "/about",
      label: "Siapa Kami",
      submenu: [
        { href: "/about/journey", label: "Cerita Kami" },
        { href: "/about/people", label: "Team Kami" },
        { href: "/about/achievement", label: "Pencapaian kami" },
      ],
    },
    { href: "/services", label: "Keahlian Kami" },
    { href: "/services/asset-management", label: "Menejemen Asset" },
    { href: "/contact", label: "Hubungi Kami" },
  ];

  return (
    <nav className="relative flex items-center justify-between">
      <button
        className="md:hidden relative z-50 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <svg className="w-6 h-6 text-primary-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {isOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-30" onClick={() => setIsOpen(false)} />}

      <ul
        className={`
          fixed inset-y-0 right-0 w-3/4 z-40
          transform transition-transform duration-300 ease-out
          ${isOpen ? "translate-x-0" : "translate-x-full"}
          flex flex-col pt-16 px-6 space-y-4
          shadow-xl bg-white
          md:static md:inset-auto md:w-auto md:transform-none md:shadow-none md:flex md:flex-row md:space-y-0 md:space-x-8 md:px-0 md:pt-0
        `}
      >
        {links.map(({ href, label, submenu }) => {
          const isActive =
            pathName === href || (submenu && submenu.some(item => item.href === pathName));

          if (submenu) {
            return (
              <li
                key={href}
                className="relative"
                onMouseEnter={() => openDropdown(href)}
                onMouseLeave={scheduleClose}
              >
                <Link
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className={`transition-colors font-bold cursor-pointer ${
                    isActive ? "text-primary-950" : "hover:text-accent-400"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {label}
                </Link>

                {dropdownOpen === href && (
                  <ul className="absolute left-0 mt-2 w-48 bg-white shadow-md rounded-md py-2 z-50">
                    {submenu.map(item => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          onClick={() => {
                            setIsOpen(false);
                            setDropdownOpen(null);
                          }}
                          className={`block px-4 py-2 text-sm ${
                            item.href === pathName ? "text-primary-950 font-semibold" : "hover:bg-primary-100"
                          }`}
                          aria-current={item.href === pathName ? "page" : undefined}
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}

                <ul className={`${isOpen ? "block" : "hidden"} md:hidden pl-4`}>
                  {submenu.map(item => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={`block px-4 py-2 text-sm font-medium ${
                          item.href === pathName ? "bg-gray-100 font-semibold" : ""
                        }`}
                        aria-current={item.href === pathName ? "page" : undefined}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            );
          }

          return (
            <li key={href}>
              <Link
                href={href}
                onClick={() => setIsOpen(false)}
                className={`transition-colors font-bold ${
                  isActive ? "text-primary-950" : "hover:text-accent-400"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
