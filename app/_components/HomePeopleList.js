"use client"

import { useState } from "react";
import PeopleCard from "./CardPeople";
import Spinner from "./Spinner";
import NoData from "./NoData";
import { useParams } from "next/navigation";
import { useAboutStory } from "../pages/hooks/getAboutStory";

export default function PeopleList() {
  const {lang} = useParams();
  const { data, isLoading, error } = useAboutStory(lang);
  const [current, setCurrent] = useState(0);

  if (isLoading) return <Spinner />;
  if (error) return <div className="text-red-500">Error: {error.message}</div>;
  if (!data || data.length === 0) return <NoData />;

  const people = data.slice(0, 2);

  const getPrevIdx = () => (current === 0 ? people.length - 1 : current - 1);
  const getNextIdx = () => (current === people.length - 1 ? 0 : current + 1);

  const stack = [
    { ...people[getPrevIdx()], pos: "prev" },
    { ...people[current], pos: "current" },
    { ...people[getNextIdx()], pos: "next" },
  ];

  const showNav = people.length > 1;

  return (
    <div className="w-full max-w-4xl mx-auto relative min-h-[450px]">
      <div className="relative h-[420px] items-center justify-center select-none hidden md:flex">
        {stack.map((person) => {
          let style = "";
          if (person.pos === "prev") {
            style = "z-10 opacity-60 scale-90 -translate-x-10";
          } else if (person.pos === "next") {
            style = "z-10 opacity-60 scale-90 translate-x-10";
          } else {
            style = "z-20 opacity-100 scale-100";
          }
          return (
            <div
              key={`${person.id || person.name}-${person.pos}`}
              className={`absolute left-0 right-0 mx-auto transition-all duration-500 ${style}`}
              style={{ width: "90%" }}
            >
              <PeopleCard
                name={person.name}
                title={person.title}
                location={person.job}
                image={person.image}
                quote={person.word}
              />
            </div>
          );
        })}
      </div>
      <div className="block md:hidden w-full">
        <PeopleCard
          name={people[current].name}
          title={people[current].title}
          location={people[current].job}
          image={people[current].image}
          quote={people[current].word}
        />
      </div>
      {showNav && (
        <>
          <button
            aria-label="Prev"
            onClick={() => setCurrent(getPrevIdx())}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 bg-primary-950 text-white rounded-full p-2 shadow hover:bg-primary-900 transition"
          >
            <svg width={24} height={24} fill="none" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
          <button
            aria-label="Next"
            onClick={() => setCurrent(getNextIdx())}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 bg-primary-950 text-white rounded-full p-2 shadow hover:bg-primary-900 transition"
          >
            <svg width={24} height={24} fill="none" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
          <div className="flex md:hidden justify-center gap-4 mt-4">
            <button
              aria-label="Prev"
              onClick={() => setCurrent(getPrevIdx())}
              className="bg-primary-950 text-white rounded-full p-2 shadow hover:bg-primary-900 transition"
            >
              <svg width={24} height={24} fill="none" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
            <button
              aria-label="Next"
              onClick={() => setCurrent(getNextIdx())}
              className="bg-primary-950 text-white rounded-full p-2 shadow hover:bg-primary-900 transition"
            >
              <svg width={24} height={24} fill="none" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
          </div>
        </>
      )}
      <div className="flex justify-center mt-4 gap-2">
        {people.map((_, idx) => (
          <span
            key={idx}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              idx === current ? "bg-primary-950" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
