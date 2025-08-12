"use client";
import { useMemo, useState } from "react";
import { useParams } from "next/navigation";
import { useArticleContent } from "@/app/pages/hooks/useArticleContent";
import { Input, Select } from "antd";
import Image from "next/image";
import Spinner from "../../_components/Spinner";
import Container from "../../_components/Container";
import Link from "next/link";
import Breadcrumbs from "../../_components/Breadcrumbs";
import { AnimatedDiv } from "../../_components/AnimatedDiv";
import LanguageDropdown from "@/app/_components/Switcher";
import PaginationControl from "@/app/_components/Pagination";

export default function Article() {
  const { lang } = useParams();
  const currentLang = typeof lang === "string" ? lang : "id";

  const { data = [], isLoading, error } = useArticleContent(currentLang);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 9;

  const label = useMemo(() => ({
    search: currentLang === "id" ? "Cari artikel..." : "Search articles...",
    category: currentLang === "id" ? "Semua Kategori" : "All Categories",
    more: currentLang === "id" ? "Selengkapnya" : "Read more",
    notFound: currentLang === "id" ? "Tidak ada artikel ditemukan" : "No articles found",
  }), [currentLang]);

  const categories = useMemo(() => {
    return Array.from(new Set(data.map(a => a.category?.title).filter(Boolean)));
  }, [data]);

  const filtered = useMemo(() => {
    return data.filter(a =>
      (!category || a.category?.title === category) &&
      (a.title?.toLowerCase().includes(search.toLowerCase()) ||
        a.subtitle?.toLowerCase().includes(search.toLowerCase()))
    );
  }, [data, search, category]);

  const paginatedData = useMemo(
  () => filtered.slice((currentPage - 1) * pageSize, currentPage * pageSize),
  [filtered, currentPage, pageSize]
  );

  if (isLoading) return <Spinner />;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <Container>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-2">
        <Breadcrumbs />
      </div>

      <AnimatedDiv delay={0}>
        <div className="flex flex-col sm:flex-row gap-4 mb-8 items-center">
          <Input.Search
            allowClear
            placeholder={label.search}
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full sm:w-72"
            size="large"
          />
          <Select
            allowClear
            placeholder={label.category}
            value={category || undefined}
            onChange={value => setCategory(value)}
            className="w-full sm:w-48"
            size="large"
            options={categories.map(cat => ({
              value: cat,
              label: cat
            }))}
          />
        </div>
      </AnimatedDiv>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {paginatedData.length > 0 ? paginatedData.map(article => (
          <AnimatedDiv delay={100}
            key={article.id}
            className="bg-white rounded-xl shadow hover:shadow-lg overflow-hidden transition group flex flex-col"
          >
            <div className="overflow-hidden w-full h-48 relative">
              <Image
                src={`https://api.kiwi.co.id/storage/${article.image}`}
                alt={article.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
                priority={false}
              />
            </div>
            <div className="p-4 flex flex-col flex-1">
              <div className="text-sm mb-1 text-gray-500">{article.category?.title}</div>
              <h2 className="font-bold text-lg line-clamp-2">{article.title}</h2>
              <p className="text-gray-700 mt-1 line-clamp-2">{article.subtitle}</p>
              <Link href={`/${currentLang}/article/${article.translation_group_id}`}>
                <div className="mt-3 inline-block text-primary-600 hover:underline text-sm font-semibold">
                  {label.more} &rarr;
                </div>
              </Link>

            </div>
          </AnimatedDiv>
        )) : (
          <div className="col-span-full text-center text-gray-400 italic my-6">
            {label.notFound}
          </div>
        )}
      </div>
      <AnimatedDiv delay={0} className="mt-8 flex justify-center">
        <PaginationControl
          current={currentPage}
          pageSize={pageSize}
          total={filtered.length}
          onChange={setCurrentPage}
          showSizeChanger={false}
        />
      </AnimatedDiv>
    </Container>
  );
}
