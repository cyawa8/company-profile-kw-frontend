"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function RedirectPeople() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/about/people/story");
  }, [router]);

  return null;
}
