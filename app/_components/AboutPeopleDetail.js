"use client";

import Image from "next/image";
import NoData from "./NoData";

const TEXT = {
  id: {
    company: "Perusahaan",
    quote: "Kutipan",
  },
  en: {
    company: "Company",
    quote: "Quote",
  }
};

export default function AboutPeopleDetail({ data, lang = "id" }) {
  const t = TEXT[lang] || TEXT.id;
  if (!data) return <NoData />;

  return (
    <>
      <div className="flex flex-col md:flex-row gap-10 items-start md:items-center">
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-primary-950 mb-2">{data.name}</h1>
          <div className="text-primary-700 text-lg font-semibold mb-1">{data.job}</div>
          {data.company && (
            <div className="mb-1 text-gray-700">{t.company}: {data.company}</div>
          )}
          <blockquote className="border-l-4 border-primary-600 pl-4 italic text-lg text-primary-900 mb-6">
            &quot;{data.word}&quot;
          </blockquote>
        </div>
        <div className="w-full md:w-72 flex-shrink-0 flex justify-center">
          <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-2xl overflow-hidden shadow-lg">
            <Image
              src={`https://api.kiwi.co.id/storage/${data.image}`}
              alt={data.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 224px, 288px"
              priority
            />
          </div>
        </div>
      </div>
      <div className="mt-10">
        <div
          className="prose max-w-none"
          dangerouslySetInnerHTML={{ __html: data[`description_${lang}`] || data.description }}
        />
      </div>
    </>
  );
}
