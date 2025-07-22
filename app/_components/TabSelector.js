"use client";
import { useRouter, usePathname } from "next/navigation";
import clsx from "clsx";

export default function PeopleTabSelector() {
  const router = useRouter();
  const pathname = usePathname();

  const isStory = pathname.includes("/about/people/story");
  const isLeader = pathname.includes("/about/people/leader");

  return (
    <div className="mb-6 relative">
      <div className="flex gap-4 z-10 relative">
        <button
          className={clsx(
            "px-4 py-2 rounded-t-lg font-semibold transition",
            isStory
              ? "bg-primary-100 text-primary-950 shadow"
              : "bg-gray-100 text-gray-500 hover:text-primary-700"
          )}
          onClick={() => router.push("/about/people/story")}
        >
          Story
        </button>
        <button
          className={clsx(
            "px-4 py-2 rounded-t-lg font-semibold transition",
            isLeader
              ? "bg-primary-100 text-primary-950 shadow"
              : "bg-gray-100 text-gray-500 hover:text-primary-700"
          )}
          onClick={() => router.push("/about/people/leader")}
        >
          Leadership
        </button>
      </div>
      <div className="absolute left-1/2 -translate-x-1/2 w-screen h-0.5 bg-primary-950 rounded-b-lg z-0" />
    </div>
  );
}
