"use client";
import Link from "next/link";
import { useMemo } from "react";
import MENU from "./Menu";
import Image from "next/image";

function FacebookIcon(props) { return <svg {...props} fill="none" viewBox="0 0 24 24"><path d="M17 2H7a5 5 0 00-5 5v10a5 5 0 005 5h5v-7H9v-3h3V9.5A3.5 3.5 0 0115.5 6H19v3h-3.5A1.5 1.5 0 0014 10.5V12h5l-1 3h-4v7h2a5 5 0 005-5V7a5 5 0 00-5-5z" fill="currentColor" /></svg>; }
function XIcon(props) { return <span {...props}>X</span> }
function InstagramIcon(props) { return <span {...props}>IG</span> }
function YoutubeIcon(props) { return <span {...props}>YT</span> }

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const columns = useMemo(() => {
    const flat = [];
    MENU.forEach(link => {
      if (link.submenu) flat.push(...link.submenu);
      else flat.push(link);
    });
    const perCol = Math.ceil(flat.length / 3);
    return [0, 1, 2].map(i => flat.slice(i * perCol, (i + 1) * perCol));
  }, []);

  return (
    <footer className="relative bg-primary-950 text-primary-0 pt-12 pb-8 px-4 md:px-16 rounded-t-[28px] shadow-lg mt-24 overflow-hidden">
      <div className="absolute left-3 top-5 w-full h-full bg-secondary-200 rounded-t-[34px] z-0 -rotate-1 pointer-events-none" style={{ filter: "blur(2px)" }}></div>
      
      <div className="relative z-10">
        <div className="flex flex-col md:flex-row md:justify-between gap-10">
          <div className="order-2 md:order-1 flex flex-col md:justify-start items-start md:items-start">
            <button
              className="mb-6 bg-primary-0/20 text-primary-0 rounded-xl p-2 flex items-center justify-center transition hover:bg-primary-0/40"
              aria-label="Scroll to top"
              onClick={scrollToTop}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7"/>
              </svg>
            </button>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-2 gap-x-4">
              {columns.map((col, i) => (
                <ul key={i} className="space-y-1 text-md font-semibold">
                  {col.map(item => (
                    <li key={item.href}>
                      <Link href={item.href} className="hover:underline">{item.label}</Link>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>

          <div className="order-1 md:order-2 flex-1 flex items-center justify-center mb-8 md:mb-0">
            <Image
              src="/kiwi-ceria.png"
              alt="Got a project in mind illustration"
              width={150}
              height={150}
              className="object-contain"
              priority
            />
          </div>

        </div>

        <div className="my-8 border-t border-dotted border-primary-0/40"></div>

        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6 text-xs">
          <div className="flex gap-5 justify-center md:justify-start text-sm font-semibold">
            <Link href="/legal">Ketentuan Layanan</Link>
            <Link href="/privasi">Kebijakan Privasi</Link>
          </div>
          <div className="flex gap-4 text-xl justify-center md:justify-end">
            <Link href="#"><FacebookIcon className="hover:opacity-70" /></Link>
            <Link href="#"><XIcon className="hover:opacity-70" /></Link>
            <Link href="#"><InstagramIcon className="hover:opacity-70" /></Link>
            <Link href="#"><YoutubeIcon className="hover:opacity-70" /></Link>
          </div>
        </div>
        <div className="flex items-center gap-2 justify-center text-xs mt-6 md:mt-0 opacity-80">
        <span>&copy; {new Date().getFullYear()} Kinerja Inovasi Wira Indonesia</span>
        </div>

      </div>
    </footer>
  );
}
