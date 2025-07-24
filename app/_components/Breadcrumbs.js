"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const TEXT = {
  id: {
    home: "Beranda",
    about: "Siapa Kami",
    "about/journey": "Perjalanan Kami",
    "about/people": "Rekan Kami",
    "about/achievement": "Pencapaian Kami",
    services: "Keahlian Kami",
    global: "Jaringan Global",
    contact: "Hubungi Kami",
    article: "Artikel",
  },
  en: {
    home: "Home",
    about: "Who We Are",
    "about/journey": "Our Journey",
    "about/people": "Our People",
    "about/achievement": "Our Achievement",
    services: "Our Expertise",
    global: "Our Connection",
    contact: "Get In Touch",
    article: "Article",
  },
};

function getLabel(path, lang) {
  const t = TEXT[lang] || TEXT.id;
  if (t[path.replace(/^\//, "")]) return t[path.replace(/^\//, "")];
  if (t[path.split("/").slice(-1)[0]]) return t[path.split("/").slice(-1)[0]];
  return decodeURIComponent(path.split("/").pop() || "")
    .replace(/-/g, " ")
    .replace(/^\w/, c => c.toUpperCase());
}

export default function Breadcrumbs({ articleTitle, loading }) {
  const pathname = usePathname();
  const router = useRouter();

  const segments = pathname.split("/").filter(Boolean);
  let lang = segments[0] === "id" || segments[0] === "en" ? segments[0] : "id";
  const pathSegments = segments[0] === "id" || segments[0] === "en" ? segments.slice(1) : segments;

  const crumbs = pathSegments.map((seg, i) => {
    const href = "/" + [lang, ...pathSegments.slice(0, i + 1)].join("/");
    let pathKey = pathSegments.slice(0, i + 1).join("/");
    let label = getLabel(pathKey, lang);

    if (
      pathSegments[0] === "article" &&
      i === pathSegments.length - 1 &&
      (articleTitle || loading)
    ) {
      label = loading
        ? <span className="animate-pulse text-gray-400">Loading...</span>
        : articleTitle;
    }
    return { href, label };
  });

  const t = TEXT[lang] || TEXT.id;
  const breadcrumbs = [{ href: `/${lang}`, label: t.home }, ...crumbs];
  const lastCrumb = breadcrumbs[breadcrumbs.length - 1];
  const prevCrumb = breadcrumbs[breadcrumbs.length - 2];

  return (
    <nav className="mb-6 text-lg font-bold" aria-label="Breadcrumb">
      <ol className="hidden sm:flex gap-2 items-center">
        {breadcrumbs.map((c, i) => (
          <li key={i} className="flex items-center text-base font-semibold">
            {i > 0 && <span className="mx-2 text-gray-400">/</span>}
            {i === breadcrumbs.length - 1 ? (
              <span className="font-bold text-md text-primary-950">{c.label}</span>
            ) : (
              <Link href={c.href} className="text-gray-600">{c.label}</Link>
            )}
          </li>
        ))}
      </ol>
      <div className="flex sm:hidden items-center gap-1">
        {prevCrumb && (
          <button
            className="flex items-center text-primary-600 hover:underline"
            onClick={() => router.push(prevCrumb.href)}
          >
            <svg width="18" height="18" className="inline mr-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"/></svg>
            {lastCrumb.label}
          </button>
        )}
        {!prevCrumb && (
          <span className="font-semibold text-primary-950">{lastCrumb.label}</span>
        )}
      </div>
    </nav>
  );
}
