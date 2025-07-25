"use client"

import H1 from "./H1";
import Image from "next/image";
import Button from "./Button";
import Spinner from "./Spinner";
import { useAboutPeople } from "../pages/hooks/useAboutPeople";
import Link from "next/link";
import { AnimatedDiv } from "./AnimatedDiv";
import NoData from "./NoData";
import { useParams } from "next/navigation";

export default function AboutPeople() {
  const { lang } = useParams();
  const { data, isLoading, error } = useAboutPeople(lang);
  
  if (isLoading) return <Spinner />;
  if (error) return <NoData />;

  if (!data || data.length === 0) return <NoData />;

  return (
    <div className="flex flex-col gap-10 max-w-4xl mx-auto">
      {data.map((person) => (
        <AnimatedDiv delay={100}
          key={person.id}
          className="flex flex-col-reverse md:flex-row items-center gap-8 p-6 bg-white rounded-lg"
        >
          <div className="flex-1 text-left">
            <H1 className="text-3xl font-bold text-primary-950">{person.name}</H1>
            <p className="mt-1 text-lg text-secondary-800">{person.job}</p>
            <p className="mt-1 italic text-secondary-700">&quot;{person.word}&quot;</p>
            <div className="mt-4">
             <Link href={`/${lang}/about/people/${encodeURIComponent(person.name)}`}>
                <Button variation="primary">
                  Lihat Profil {person.name}
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden">
            <Image
              src={`https://api.kiwi.co.id/storage/${person.image}`}
              alt={person.name}
              fill
              className="object-cover"
            />
          </div>
        </AnimatedDiv>
      ))}
    </div>
  );
}
