"use client"

import { useGetAchievement } from "../pages/hooks/useGetAchievement";
import AchievementMarqueeRow from "./Achievement";
import { AnimatedDiv } from "./AnimatedDiv";
import Container from "./Container";
import NoData from "./NoData";
import Spinner from "./Spinner";
import Image from "next/image";

function mapImage(img) {
  if (!img || typeof img !== "string" || img.trim() === "") return "/icon.png";
  if (img.startsWith("http") || img.startsWith("https")) return img;
  if (img.startsWith("/")) return img;
  return "/" + img;
}

export default function Achievements(){
  const {data, isLoading, error} = useGetAchievement()
  const safeData = (Array.isArray(data) && data.length > 0
    ? data
    : [{ image: "/icon.png", title: "Coming Soon", description: "Akan hadir pencapaian terbaru." }]
  ).map(a => ({
    ...a,
    image: mapImage(a.image)
  }));

  if(isLoading) return <Spinner/>;
  if(error) return <NoData />;

  return(
    <div className="w-full bg-gradient-to-b from-primary-50/60 to-white min-h-[50vh] py-6">
      <Container>
   
        <div className="mb-10">
          <div className="block sm:hidden">
            <AchievementMarqueeRow items={safeData} speed={20} />
          </div>
          <div className="hidden sm:flex flex-col gap-2">
            <AchievementMarqueeRow items={safeData} speed={20} />
            <AchievementMarqueeRow items={safeData} reverse speed={22} />
            <AchievementMarqueeRow items={safeData} speed={18} />
          </div>  
        </div>

  
        <div className="flex flex-col gap-8">
          {safeData.map((item, idx) => (
            <AnimatedDiv
              key={idx}
              className="group flex flex-col-reverse md:flex-row items-start bg-white rounded-2xl p-5 md:p-8 shadow-lg transition hover:shadow-2xl"
            >

              <div className="flex-1 md:pr-10 text-left mb-4 md:mb-0">
                <h2 className="font-bold text-2xl text-primary-950">{item.title || "Tanpa Judul"}</h2>
                <p className="text-accent-800 mt-2 leading-relaxed">{item.description || "-"}</p>
              </div>

              <div className="relative w-full aspect-[1/1] h-40 md:w-44 md:h-44 rounded-xl overflow-hidden shadow-md bg-white flex-shrink-0 mb-4 md:mb-0 md:ml-2 mx-auto md:mx-0
                transition-transform duration-300
                group-hover:scale-105">
                <Image
                  src={`https://api.kiwi.co.id/storage/${item.image}`}
                  alt={item.title || "Achievement"}
                  fill
                  className="object-contain"
                  priority={idx === 0}
                />
              </div>
            </AnimatedDiv>
          ))}
        </div>

      </Container>
    </div>
  );
}
