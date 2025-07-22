"use client"

import Image from "next/image";
import Spinner from "./Spinner";
import H1 from "./H1";
import Button from "./Button";
import { useGetService } from "../pages/hooks/useGetService";
import Link from "next/link";
import Container from "./Container";
import { AnimatedDiv } from "./AnimatedDiv";

export default function Service() {
  const { data, isLoading, error } = useGetService();

  if (isLoading) return <Spinner />;
  if (error) return <p>Error: {error.message}</p>;

  const sorted = [...data].sort((a, b) => {
    if (a.action_url && !b.action_url) return -1;
    if (!a.action_url && b.action_url) return 1;
    return 0;
  });

  return (
      <div className="flex flex-col items-center gap-8">
        {sorted.map((item) => (
          <AnimatedDiv
            delay={150}
            key={item.id}
            className="flex flex-col md:flex-row bg-white rounded-xl overflow-hidden w-full"
          >
            <div className="relative w-full md:w-80 aspect-square flex-shrink-0">
              <Image
                src={`http://localhost:8001/storage/${item.image}`}
                alt={item.image}
                fill
                className="object-cover rounded-xl"
                sizes="(max-width: 768px) 100vw, 20rem"
              />
            </div>
            <div className="flex-1 flex flex-col justify-center p-6 gap-4 md:gap-6">
              <H1>{item.title}</H1>
              <p className="text-base text-gray-600">{item.short_desc}</p>
              {item.slug ? (
                <Link href={`/services/${item.slug}`} className="w-max">
                    <Button size="large">Explore {item.title}</Button>
                </Link>
              ) : null}
            </div>
          </AnimatedDiv>
        ))}
      </div>
  );
}
