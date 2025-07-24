"use client";
import { useParams, usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";

function FlagID() {
  return (
    <span className="w-5 h-5 rounded-full overflow-hidden flex items-center justify-center mr-2">
      <svg viewBox="0 0 32 32" width={18} height={18}>
        <rect width="32" height="16" fill="#e70d19" />
        <rect y="16" width="32" height="16" fill="#fff" />
      </svg>
    </span>
  );
}
function FlagEN() {
  return (
    <span className="w-5 h-5 rounded-full overflow-hidden flex items-center justify-center mr-2">
      <svg viewBox="0 0 32 32" width={18} height={18}>
        <rect width="32" height="32" fill="#00247d" />
        <path d="M0,0L32,32M32,0L0,32" stroke="#fff" strokeWidth="7" />
        <path d="M0,0L32,32M32,0L0,32" stroke="#cf142b" strokeWidth="3.5" />
        <rect x="13" width="6" height="32" fill="#fff" />
        <rect y="13" width="32" height="6" fill="#fff" />
        <rect x="14.5" width="3" height="32" fill="#cf142b" />
        <rect y="14.5" width="32" height="3" fill="#cf142b" />
      </svg>
    </span>
  );
}

const LANGS = [
  { code: "id", label: "Indonesia", icon: <FlagID /> },
  { code: "en", label: "English", icon: <FlagEN /> },
];

function DownIcon({ open }) {
  return (
    <svg
      width="18"
      height="11"
      viewBox="0 0 18 11"
      className="ml-1 transition-transform duration-200"
      style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
    >
      <path
        d="M4 4l5 4 5-4"
        stroke="#BBB"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

export default function LanguageDropdown() {
  const { lang } = useParams();
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const current = LANGS.find((l) => l.code === lang) || LANGS[0];
  const minWidth = 150;

  return (
    <div className="relative z-40" style={{ minWidth }}>
      <button
        className={`
          flex items-center w-full px-3 py-1.5
          bg-white text-gray-900 rounded-xl shadow 
          border border-primary-950 font-semibold
          transition hover:bg-gray-100
          text-base
        `}
        style={{
          minWidth,
          justifyContent: "flex-start",
          boxShadow: "0 2px 12px 0 rgba(50,50,50,.06)",
        }}
        type="button"
        onClick={() => setOpen((v) => !v)}
      >
        {current.icon}
        <span className="text-base">{current.label}</span>
        <span className="ml-auto flex items-center">
          <DownIcon open={open} />
        </span>
      </button>

      <div
        className={`
          absolute left-0 mt-2 rounded-xl shadow-lg border border-primary-200 bg-white overflow-hidden
          transition-all duration-200 origin-top
          ${open ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"}
        `}
        style={{ minWidth, zIndex: 50 }}
      >
        {LANGS.map((l) => (
          <button
            key={l.code}
            className={`
              flex items-center w-full px-3 py-2 text-base gap-2 hover:bg-primary-50 transition
              ${l.code === lang ? "font-bold text-primary-950 bg-primary-50" : "text-gray-700 bg-white"}
            `}
            onClick={() => {
              if (l.code !== lang) {
                const newPath = pathname.replace(/^\/(id|en)/, `/${l.code}`);
                router.push(newPath);
              }
              setOpen(false);
            }}
          >
            {l.icon}
            <span>{l.label}</span>
          </button>
        ))}
      </div>

      {open && (
        <div
          className="fixed inset-0 z-30"
          onClick={() => setOpen(false)}
          aria-label="Close language dropdown"
        />
      )}
    </div>
  );
}
