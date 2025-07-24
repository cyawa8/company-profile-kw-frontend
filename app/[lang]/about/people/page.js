"use client";
import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

export default function RedirectPeople() {
  const router = useRouter();
  const pathname = usePathname();
  const lang = pathname.split("/")[1] || "id";

  useEffect(() => {
    router.replace(`/${lang}/about/people/story`);
  }, [router, lang]);

  return null;
}
