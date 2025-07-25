"use client";
import { useState, useMemo } from "react";
import { useArticleContent } from "@/app/pages/hooks/useArticleContent";
import { Input, Select } from "antd";
import Image from "next/image";
import Spinner from "../../_components/Spinner";
import Container from "../../_components/Container";
import Link from "next/link";
import Breadcrumbs from "../../_components/Breadcrumbs";
import { AnimatedDiv } from "../../_components/AnimatedDiv";

export default function Article() {
  const { data = [], isLoading, error } = useArticleContent();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  const categories = useMemo(() => {
    return Array.from(new Set(data.map(a => a.category?.title).filter(Boolean)));
  }, [data]);

  const filtered = useMemo(() => {
    return data.filter(a =>
      (!category || a.category?.title === category) &&
      (a.title.toLowerCase().includes(search.toLowerCase()) ||
        a.subtitle.toLowerCase().includes(search.toLowerCase()))
    );
  }, [data, search, category]);

  if (isLoading) return <Spinner />;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <Container>
        <Breadcrumbs />
        <AnimatedDiv delay={0}>
        <div className="flex flex-col sm:flex-row gap-4 mb-8 items-center">
            <Input.Search
            allowClear
            placeholder="Cari artikel..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full sm:w-72"
            size="large"
            />
            <Select
            allowClear
            placeholder="Semua Kategori"
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
        {filtered.map(article => (
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
                <Link href={`/article/${article.id}`}>
                  <div className="mt-3 inline-block text-primary-600 hover:underline text-sm font-semibold">
                    Selengkapnya &rarr;
                  </div>
                </Link>

            </div>
            </AnimatedDiv>
        ))}
        </div>
    </Container>
  );
}
