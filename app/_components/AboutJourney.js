"use client"

import Image from "next/image";
import { useAboutJourney } from "../pages/hooks/useAboutJourney";
import Spinner from "./Spinner";
import H1 from "./H1";

export default function AboutJourney() {
  const { data, isLoading, error } = useAboutJourney();

  if (isLoading) return <Spinner />;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="relative px-4">
      {/* wrapper untuk semua event + dot (tanpa label) */}
      <div className="relative space-y-16">
        {/* Garis timeline — berhenti 0.75rem di atas dot terakhir */}
        <div
          className="absolute left-1/2 top-0 bottom-3 w-1 bg-gray-300
                     transform -translate-x-1/2"
        />

        {data.map((item) => (
          <div
            key={item.id}
            className="relative flex flex-col lg:flex-row items-center"
          >
            {/* titik setiap event */}
            <div
              className="absolute left-1/2 transform -translate-x-1/2
                         bg-white border-4 border-primary-500
                         rounded-full w-6 h-6 z-10"
            />

            {/* Kiri: teks */}
            <div className="w-full lg:w-1/2 pr-8 text-right lg:text-left">
              <H1 className="text-4xl font-bold text-primary-950">
                {item.title}
              </H1>
              <p className="mt-2 text-lg text-secondary-950 font-bold">
                {item.subtitle}
              </p>
            <p>
                {item.content}
            </p>
            </div>

            {/* Kanan: gambar */}
            <div className="w-full lg:w-1/2 pl-8 mt-6 lg:mt-0">
              <div className="relative w-full h-64 rounded-lg overflow-hidden">
                <Image
                  src={`http://localhost:8000/storage/${item.image}`}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        ))}
        <div className="relative flex justify-center">
          <div
            className="absolute left-1/2 transform -translate-x-1/2
                       bg-white border-4 border-primary-500
                       rounded-full w-6 h-6 z-10 -mt-3"
          />
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <H1 className="text-2xl font-bold text-primary-950">Today</H1>
      </div>
    </div>
  );
}
