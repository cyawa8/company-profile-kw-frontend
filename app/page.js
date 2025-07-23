"use client";
import { useHomeContent } from "./pages/hooks/useHomeContent";
import Loading from "./loading";
import H1 from "./_components/H1";
import Image from "next/image";
import Link from "next/link";
import { ArrowDownCircleIcon } from "@heroicons/react/24/solid";
import Container from "./_components/Container";
import HomeApproach from "./_components/HomeApproach";
import HomeHighlight from "./_components/HomeHighlight";
import People from "./_components/People";
import AnimatedParagraph from "./_components/AnimatedParagraph";
import { AnimatedDiv } from "./_components/AnimatedDiv";
import NoData from "./_components/NoData";

function isValidUrl(url) {
  if (!url) return false;
  return /^\/|^https?:\/\//.test(url);
}

export default function Page() {
  const { data, isLoading, error } = useHomeContent();

  if (isLoading) return <Loading />;
  if (error) return <NoData />;

  return (
    <>
      <Container>
        {data.map((content, index) => {
          const isImageExist = !!content.image;
          const isSubtitleExist = !!content.subtitle;
          const isLabel = !!content.action_label;
          const isLink = !!content.action_url;
          const isUrlValid = isValidUrl(content.action_url);

          if (!isImageExist && !isSubtitleExist && !isLabel && !isLink) {
            return (
              <div
                id={`section-${index}`}
                key={content.id}
                className="flex flex-col items-center justify-center min-h-[200px] py-16"
              >
                <H1 className="text-4xl font-bold text-primary-950 text-center">
                  {content.title}
                </H1>
              </div>
            );
          }

          const rowClass = index % 2 === 0
            ? "lg:flex-row"
            : "lg:flex-row-reverse";

          return (
            <div
              id={`section-${index}`}
              key={content.id}
              className={`flex flex-col-reverse ${rowClass} items-start lg:items-center gap-6 lg:gap-16`}
            >
              
              <div className="flex-1 flex flex-col justify-center lg:pl-12 space-y-4">
                <AnimatedParagraph delay={0}>
                  <H1 className="sm:text-3xl lg:text-5xl font-bold text-primary-950">
                    {content.title}
                  </H1>
                </AnimatedParagraph>

                <AnimatedParagraph delay={50}>
                  <p className="text-lg sm:text-xl text-secondary-950">
                    {content.subtitle}
                  </p>
                </AnimatedParagraph>

                <AnimatedParagraph delay={10}>
                {content.action_label && content.action_url ? (
                  isUrlValid ? (
                    <Link href={content.action_url}>
                      <button className="px-5 py-2 bg-primary-950 text-primary-0 rounded-lg hover:bg-primary-900 transition">
                        {content.action_label}
                      </button>
                    </Link>
                  ) : (
                    <button
                      disabled
                      className="px-5 py-2 bg-gray-300 text-gray-500 rounded-lg cursor-not-allowed"
                      title="URL tidak valid, cek kembali di portal admin"
                    >
                      {content.action_label}
                    </button>
                  )
                ) : (
                  index === 0 ? (
                    <button
                      onClick={() => {
                        document.getElementById(`section-${index + 1}`)
                          ?.scrollIntoView({ behavior: "smooth", block: "start" });
                      }}
                      className="flex items-center justify-center gap-2 px-5 py-2 bg-primary-0 text-primary-950 rounded-lg hover:text-primary-600 transition"
                    >
                      Let&apos;s Explore Further <ArrowDownCircleIcon className="w-12 h-12" />
                    </button>
                  ) : null
                )}
                </AnimatedParagraph>

              </div>

             {isImageExist && (
              <AnimatedDiv
                delay={100}
                className="w-full h-80 sm:h-[100px] md:h-[300px] lg:h-[500px] lg:w-1/2 relative overflow-hidden rounded-lg"
              >
                <Image
                  src={`https://api.kiwi.co.id/storage/${content.image}`}
                  alt={content.title}
                  fill
                  className="object-cover object-center"
                />
              </AnimatedDiv>
            )}

            </div>
          );
        })}
      </Container>

      <HomeApproach/>
      <HomeHighlight />
      <People />

    </>
  );
}
