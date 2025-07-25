"use client";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import LanguageFlagSwitcher from "./Switcher";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const closeTimeout = useRef();
  const { lang } = useParams();
  const pathName = usePathname();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.position = "relative";
      document.body.style.width = "100vw";
    } else {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    };
  }, [isOpen]);

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
      label: lang === "en" ? "About Us" : "Siapa Kami",
      submenu: [
        { href: "/about/journey", label: lang === "en" ? "Our Journey" : "Cerita Kami" },
        { href: "/about/people", label: lang === "en" ? "Our Team" : "Team Kami" },
        { href: "/about/achievement", label: lang === "en" ? "Achievements" : "Pencapaian Kami" },
      ],
    },
    { href: "/services", label: lang === "en" ? "Our Services" : "Keahlian Kami" },
    { href: "/services/asset-management", label: lang === "en" ? "Asset Management" : "Manajemen Aset" },
    { href: "/contact", label: lang === "en" ? "Contact" : "Hubungi Kami" },
  ];

  function navIsActive(navHref) {
    return pathName === `/${lang}${navHref}`;
  }

  return (
    <>
      <button
        className="md:hidden block relative z-50"
        onClick={() => setIsOpen(true)}
        aria-label="Open menu"
      >
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      <ul className="hidden md:flex flex-row space-x-8 font-bold text-base items-center">
        {links.map(({ href, label, submenu }) => {
          const isActive =
            navIsActive(href) ||
            (submenu && submenu.some(item => navIsActive(item.href)));

          if (submenu) {
            return (
              <li
                key={href}
                className="relative group"
                onMouseEnter={() => openDropdown(href)}
                onMouseLeave={scheduleClose}
              >
                <Link
                  href={`/${lang}${href}`}
                  className={`transition-colors cursor-pointer ${isActive ? "text-primary-950" : "hover:text-accent-400"}`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {label}
                </Link>
                <ul
                  className={`absolute left-0 top-full bg-white rounded shadow-md mt-2 min-w-[200px] z-50 ${
                    dropdownOpen === href ? "block" : "hidden"
                  }`}
                  onMouseEnter={() => openDropdown(href)}
                  onMouseLeave={scheduleClose}
                >
                  {submenu.map(item => (
                    <li key={item.href}>
                      <Link
                        href={`/${lang}${item.href}`}
                        className={`block px-4 py-2 text-sm hover:bg-primary-100 ${
                          navIsActive(item.href) ? "text-primary-950 font-semibold" : ""
                        }`}
                        aria-current={navIsActive(item.href) ? "page" : undefined}
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
                href={`/${lang}${href}`}
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

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      <ul
        className={`
          fixed top-0 right-0 h-full w-3/4 bg-white shadow-xl z-50
          transform transition-transform duration-300 ease-out
          ${isOpen ? "translate-x-0" : "translate-x-full"}
          md:hidden flex flex-col pt-8 px-6 space-y-4
        `}
        onClick={e => e.stopPropagation()}
      >
        <div className="flex justify-end mb-2">
          <button
            className="z-50 p-2"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        {links.map(({ href, label, submenu }) => {
          const isActive =
            navIsActive(href) ||
            (submenu && submenu.some(item => navIsActive(item.href)));
          if (submenu) {
            return (
              <li key={href}>
                <div className="font-bold">{label}</div>
                <ul className="pl-4">
                  {submenu.map(item => (
                    <li key={item.href}>
                      <Link
                        href={`/${lang}${item.href}`}
                        onClick={() => setIsOpen(false)}
                        className={`block px-4 py-2 text-sm font-medium ${
                          navIsActive(item.href) ? "bg-gray-100 font-semibold" : ""
                        }`}
                        aria-current={navIsActive(item.href) ? "page" : undefined}
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
                href={`/${lang}${href}`}
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
        <LanguageFlagSwitcher className="mt-4" onSwitch={() => setIsOpen(false)} />
      </ul>
    </>
  );
}
