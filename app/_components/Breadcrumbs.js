"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const links = [
  {
    href: "/about",
    label: "Who We Are",
    submenu: [
      { href: "/about/journey", label: "Our Journey" },
      { href: "/about/people", label: "Our People" },
      { href: "/about/achievement", label: "Our Achievement" },
    ],
  },
  { href: "/services", label: "Our Expertise" },
  { href: "/global", label: "Our Connection" },
  { href: "/contact", label: "Get In Touch" },
];

function getLabel(path) {
  for (const link of links) {
    if (link.href === path) return link.label;
    if (link.submenu) {
      const found = link.submenu.find((s) => s.href === path);
      if (found) return found.label;
    }
  }
  return decodeURIComponent(path.split("/").pop() || "")
    .replace(/-/g, " ")
    .replace(/^\w/, c => c.toUpperCase()) || "Home";

}

export default function Breadcrumbs({ articleTitle, loading }) {
  const pathname = usePathname();
  const router = useRouter();

  const segments = pathname.split("/").filter(Boolean);
  const crumbs = segments.map((seg, i) => {
    const href = "/" + segments.slice(0, i + 1).join("/");
    let label = getLabel(href);
    if (
      segments[0] === "article" &&
      i === segments.length - 1 &&
      (articleTitle || loading)
    ) {
      label = loading
        ? <span className="animate-pulse text-gray-400">Loading...</span>
        : articleTitle;
    }

    return { href, label };
  });
  const breadcrumbs = [{ href: "/", label: "Home" }, ...crumbs];

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
