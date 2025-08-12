"use client";
import Spinner from "@/app/_components/Spinner";
import Image from "next/image";
import { useArticleDetail } from "@/app/pages/hooks/useArticleDetail";
import H1 from "./H1";
import Breadcrumbs from "./Breadcrumbs";
import { AnimatedDiv } from "./AnimatedDiv";
import NoData from "./NoData";

export default function ArticleDetailClient({ id, lang }) {
  const { data, isLoading, error } = useArticleDetail({ id, lang });

  if (isLoading) return <Spinner />;
  if (error) return <div className="text-center py-12 text-primary-500">{error.message}</div>;

  const article = Array.isArray(data) ? data[0] : data;
  if (!article) return <NoData />;

  return (
    <>
      <Breadcrumbs articleTitle={article.title} />
      <AnimatedDiv delay={0}>

        <div className="relative w-screen left-1/2 right-1/2 -mx-[50vw] h-[400px] md:h-[600px] mb-8 overflow-hidden shadow-lg">
          <Image
            src={`https://api.kiwi.co.id/storage/${article.image}`}
            alt={article.title}
            fill
            className="object-cover"
            priority
            />
        </div>
      </AnimatedDiv>

      <AnimatedDiv delay={100}>

        <div className="flex flex-col items-center">
          <H1>{article.title}</H1>
          <p className="text-lg mt-6 md:text-xl text-center text-gray-600 mb-6">{article.subtitle}</p>
          <div
            className="prose prose-lg max-w-none w-full"
            dangerouslySetInnerHTML={{ __html: article.content }}
            />
        </div>
      
      </AnimatedDiv>
        

    </>
  );
}
