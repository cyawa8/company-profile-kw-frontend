"use client";

import { useParams } from "next/navigation";
import Container from "@/app/_components/Container";
import H1 from "@/app/_components/H1";
import AboutStory from "@/app/_components/AboutStory";
import { AnimatedDiv } from "@/app/_components/AnimatedDiv";
import Breadcrumbs from "@/app/_components/Breadcrumbs";
import PeopleTabSelector from "@/app/_components/TabSelector";

const TEXT = {
  id: {
    title: "Cerita Rekan Kami",
    desc: "Banyak teman-teman yang pernah magang bersama kami kini telah sukses meniti karier yang membanggakan. Di sisi lain, para senior kami juga sudah bertahun-tahun setia berkontribusi di Pepper. Ada begitu banyak kisah seru dan inspiratif di sini—dan kami selalu senang berbagi cerita itu bersama Anda.",
  },
  en: {
    title: "Our People's Story",
    desc: "Many friends who have interned with us are now pursuing successful careers. On the other hand, our seniors have loyally contributed to Pepper for years. There are so many exciting and inspiring stories here—and we’re always happy to share those stories with you.",
  }
};

export default function People() {
  const { lang } = useParams();
  const t = TEXT[lang] || TEXT.id;

  return (
    <Container>
      <Breadcrumbs lang={lang} />
      <PeopleTabSelector lang={lang} />
      <AnimatedDiv delay={0}>
        <H1>{t.title}</H1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <h2>{t.desc}</h2>
        </div>
      </AnimatedDiv>
      <AboutStory lang={lang} />
    </Container>
  );
}
