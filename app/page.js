"use client"

import { useHomeContent } from "./pages/hooks/useHomeContent";
import Loading from "./loading";
import H1 from "./_components/H1";
import Image from "next/image";
import Link from "next/link";
import { ArrowDownCircleIcon } from "@heroicons/react/24/solid";
import Container from "./_components/Container";
import ArticleDetail from "./_components/ArticleDetail";
export default function Page() {
  const { data, isLoading, error } = useHomeContent();

  if (isLoading) return <Loading />;
  if (error) return <p>Error: {error.message}</p>;

  const actionMap = [
    { label: "Learn More", href: "/about" },
    { label: "Our Services", href: "/services" },
    { label: "Contact Us", href: "/contact" },
  ];


  return (
    <>
    <Container>

      {data.map((content, index) => {
        const rowClass = index % 2 === 0
        ? "lg:flex-row"
        : "lg:flex-row-reverse"
        
        const action = actionMap[index] || { label: "Read More", href: "/" };
        
        return (
          <div
          id={`section-${index}`}
          key={content.id}
          className={`flex flex-col ${rowClass} items-start lg:items-center gap-6 lg:gap-16`}>
            {/* text */}
            <div className="flex-1 flex flex-col justify-center lg:pl-12 space-y-4">

              <H1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-primary-950">
                {content.title}
              </H1>
              <p className="text-lg sm:text-xl text-secondary-950">
                {content.subtitle}
              </p>

              {index === 0 ? (
                <button
                onClick={() => {
                  document.getElementById(`section-${index + 1}`)
                  ?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                className="flex items-center justify-center gap-2 px-5 py-2 bg-primary-0 text-primary-950 rounded-lg hover:text-primary-600 transition">
                  Let&apos;s Explore Further <ArrowDownCircleIcon className="w-12 h-12" />
                </button>
              ) : (
                <Link href={action.href}>
                  <button className="px-5 py-2 bg-primary-950 text-primary-0 rounded-lg hover:bg-primary-900 transition">
                    {action.label}
                  </button>
                </Link>
              )}

            </div>

            {/* image */}
            <div
              className="w-full h-48 sm:h-64 md:h-80 lg:h-[500px] lg:w-1/2 relative overflow-hidden rounded-lg">
              <Image
                src={`http://localhost:8000/storage/${content.image}`}
                alt={content.title}
                fill
                className="object-cover object-center"
                />
            </div>

          </div>
        );
      }
      )}
    </Container>
      <section className="bg-primary-950">
        <div className=" text-primary-0">
            <Container>
            <div className="text-primary-0 py-10">
              <h1 className="font-semibold text-[40px] mb-3 text-primary-0">Paper Works</h1>
              <h2 className="font-semibold text-lg">Stories from around our network. Over the years, our work has got the attention of the world’s financial press.</h2>
            </div>
              <ArticleDetail />
            </Container>
        </div>
      </section>
    </>
  );
}
