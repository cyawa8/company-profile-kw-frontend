"use client"

import Image from "next/image";
import { useAboutJourney } from "../pages/hooks/useAboutJourney";
import Spinner from "./Spinner";
import H1 from "./H1";
import { useParams } from "next/navigation";
import NoData from "./NoData";


export default function AboutJourney() {
  const { lang } = useParams();
  const { data, isLoading, error } = useAboutJourney(lang);

  if (isLoading) return <Spinner />;
  if (error) return <NoData />;

  return (
    <div className="relative px-2 sm:px-4">
      <div className="relative">

        <div className="hidden sm:block relative space-y-16">
          <div className="absolute left-1/2 top-0 bottom-3 w-1 bg-gray-300 transform -translate-x-1/2" />
          {data.map((item) => (
            <div
              key={item.id}
              className="relative flex flex-col lg:flex-row items-center"
            >
              <div className="absolute left-1/2 transform -translate-x-1/2 bg-white border-4 border-primary-500 rounded-full w-6 h-6 z-10" />
              <div className="w-full lg:w-1/2 pr-8 text-right lg:text-left">
                <H1>{item.title}</H1>
                <p className="mt-2 text-xl text-secondary-950 font-bold">{item.subtitle}</p>
                <p>{item.content}</p>
              </div>
              <div className="w-full lg:w-1/2 pl-8 mt-6 lg:mt-0">
                <div className="relative w-full h-64 rounded-lg overflow-hidden">
                  <Image
                    src={`https://api.kiwi.co.id/storage/${item.image}`}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
          <div className="relative flex justify-center">
            <div className="absolute left-1/2 transform -translate-x-1/2 bg-white border-4 border-primary-500 rounded-full w-6 h-6 z-10 -mt-3" />
          </div>
        </div>

        <div className="block sm:hidden relative">
          <div className="absolute left-4 top-0 bottom-3 w-[2px] bg-gray-300 z-0" />
          <div className="flex flex-col gap-16">
            {data.map((item) => (
              <div key={item.id} className="relative flex min-h-[120px]">
                <div className="absolute left-[7px] top-6 flex items-center z-10">
                  <div className="w-5 h-5 rounded-full border-4 border-white bg-primary-400 shadow" />
                </div>
                <div className="flex-1 pl-12">
                  <div className="flex flex-col gap-1">
                    <span className="text-4xl font-bold text-red-600 leading-tight break-words">{item.title}</span>
                    <span className="font-bold text-xl mt-0.5 break-words">{item.subtitle}</span>
                    <span className="text-base text-gray-800 mb-4 break-words">{item.content}</span>
                  </div>
                  <div className="w-full h-44 mt-2 rounded-tr-2xl rounded-tl-none rounded-b-2xl overflow-hidden relative">
                    <Image
                      src={`https://api.kiwi.co.id/storage/${item.image}`}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="relative flex justify-start mt-2">
            <div className="absolute left-[7px] bg-white border-4 border-primary-500 rounded-full w-5 h-5 z-10 -mt-3" />
          </div>
        </div>
        
      </div>
      <div className="flex justify-start sm:justify-center mt-8">
        <H1>Today</H1>
      </div>
    </div>
  );
}
