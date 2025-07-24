"use client"

import Link from "next/link";
import AnimatedParagraph from "./AnimatedParagraph";
import H1 from "./H1";
import { useParams } from "next/navigation";

const TEXT = {
  id: {
    team: "Tim Kami",
    story: "Cerita",
    friend: "Rekan Kami",
    seeMore: "Lihat lebih jauh →",
    desc:
      "Tim KIWI terdiri dari individu-individu dengan keahlian, latar belakang, dan pengalaman yang beragam. Setiap anggota membawa cerita, ide, dan sudut pandang unik yang memperkaya perjalanan kami. Bersama, kami tumbuh dan berbagi inspirasi untuk memberikan solusi terbaik bagi dunia keuangan.",
    storyUrl: "/about/people/story",
  },
  en: {
    team: "Our Team",
    story: "Stories of",
    friend: "Our People",
    seeMore: "See more →",
    desc:
      "The KIWI team consists of individuals with diverse expertise, backgrounds, and experiences. Each member brings unique stories, ideas, and perspectives that enrich our journey. Together, we grow and share inspiration to deliver the best solutions for the world of finance.",
    storyUrl: "/about/people/story",
  },
};

export default function SectionHeader() {
  const { lang } = useParams();
  const t = TEXT[lang] || TEXT.id;

  return (
    <div className="flex flex-col gap-2 mb-8">
      <span className="font-bold text-base">{t.team}</span>

      <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between gap-2">
        <AnimatedParagraph delay={0}>
          <H1>
            {t.story} <span className="text-primary-950">{t.friend}</span>
          </H1>
        </AnimatedParagraph>

        <AnimatedParagraph delay={50}>
          <Link
            href={`/${lang}${t.storyUrl}`}
            className="text-primary-950 font-medium hover:underline text-lg text-right md:text-right md:ml-auto"
          >
            {t.seeMore}
          </Link>
        </AnimatedParagraph>
      </div>

      <AnimatedParagraph delay={100}>
        <p className="text-lg md:text-xl text-accent-900 max-w-2xl mt-4">
          {t.desc}
        </p>
      </AnimatedParagraph>
    </div>
  );
}
