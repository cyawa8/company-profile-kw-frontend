"use client"

import { ArrowRightCircleIcon } from "@heroicons/react/24/solid";
import H1 from "./H1";
import Link from "next/link";
import Image from "next/image";
import { useArticleContent } from "../pages/hooks/useArticleContent";
import Spinner from "./Spinner";
import { AnimatedDiv } from "./AnimatedDiv";
import AnimatedParagraph from "./AnimatedParagraph";
import { useParams } from "next/navigation";

const TEXTS = {
  id: {
    readMore: "Baca selengkapnya →",
    explore: "Selengkapnya"
  },
  en: {
    readMore: "Read more →",
    explore: "Let's Explore Further"
  }
};

export default function ArticleDetail() {
  const { data, isLoading, error } = useArticleContent();
  const { lang } = useParams();
  const t = TEXTS[lang] || TEXTS["id"];

  if (isLoading) return <Spinner />;
  if (error) return <p>Error: {error.message}</p>;

  const latest2 = data.slice(0, 2);

  return (
   <div
      className="
        px-4
        flex flex-col gap-y-4
        md:grid md:grid-cols-[repeat(2,1fr)_auto] md:items-center md:gap-8
        md:px-0
      "
    >
      <div
        className="
          order-1
          flex overflow-x-auto gap-4 pb-4
          md:overflow-visible md:flex-none md:col-span-2
        "
      >
        {latest2.map((content) => (
          <AnimatedDiv delay={50} key={content.id}
              className="flex-shrink-0 w-72 bg-white shadow-md rounded-lg overflow-hidden">
              <div className="relative h-48 w-full">
                <Image
                  src={`https://api.kiwi.co.id/storage/${content.image}`}
                  alt={content.title}
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <h1 className="text-xl font-bold mb-2 text-gray-900">
                  {content.title}
                </h1>
                <p className="text-gray-600 mb-4 flex-1 text-sm">
                  {content.subtitle || content.excerpt}
                </p>
                <Link
                  href={`/${lang}/article/${content.id}`}
                  className="mt-auto inline-block text-primary-600 hover:underline font-medium"
                >
                  {t.readMore}
                </Link>
              </div>
          </AnimatedDiv>
        ))}
      </div>

      <AnimatedDiv delay={75} className="order-2">
        <Link href={`/${lang}/article`}>
          <button
            className="
              self-center
              inline-flex items-center
              text-base
              px-4 py-2
              bg-white text-primary-950
              rounded-full
              hover:bg-gray-100
              transition
              md:mt-0 md:self-center
            "
          >
            {t.explore}
            <ArrowRightCircleIcon className="w-12 h-12 flex-shrink-0 gap-8 mr-2" />
          </button>
        </Link>
      </AnimatedDiv>

    </div>
  );
}
