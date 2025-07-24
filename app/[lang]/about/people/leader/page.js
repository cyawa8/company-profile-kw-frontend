"use client";

import Container from "@/app//_components/Container";
import H1 from "@/app//_components/H1";
import AboutPeople from "@/app/_components/AboutPeople";
import { AnimatedDiv } from "@/app/_components/AnimatedDiv";
import Breadcrumbs from "@/app/_components/Breadcrumbs";
import PeopleTabSelector from "@/app/_components/TabSelector";
import { useParams } from "next/navigation";

// Teks multibahasa
const TEXT = {
  id: {
    title: "Pemangku Kepentingan",
    desc1: "Di sini, kami percaya bahwa setiap orang punya peran penting bukan soal siapa di atas atau di bawah. Bagi kami, kepemimpinan bukan sekadar jabatan, tapi tentang memberi contoh, punya visi jelas, dan menciptakan lingkungan kerja yang saling mendukung supaya semua bisa berkembang.",
    desc2: "Para pemimpin kami hadir bukan hanya untuk mengarahkan, tapi juga untuk terlibat langsung, mencari solusi bersama, dan memberikan dampak nyata di setiap tantangan. Semangat “bisa” dan kolaborasi selalu jadi pegangan kami dalam menghadapi perubahan dan peluang.",
  },
  en: {
    title: "Stakeholders",
    desc1: "Here, we believe everyone has an important role—not about who's on top or bottom. For us, leadership isn’t just a position, but about setting an example, having a clear vision, and creating a supportive work environment where everyone can grow.",
    desc2: "Our leaders are here not just to direct, but also to be hands on, seek solutions together, and make a real impact in every challenge. The 'can do' spirit and collaboration are always our compass in facing changes and opportunities.",
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
          <h2>{t.desc1}</h2>
          <h2>{t.desc2}</h2>
        </div>
      </AnimatedDiv>
      <AboutPeople lang={lang} />
    </Container>
  );
}
