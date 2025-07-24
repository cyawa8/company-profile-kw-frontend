"use client";
import AnimatedParagraph from "./AnimatedParagraph";
import ArticleDetail from "./ArticleDetail";
import Container from "./Container";
import { useParams } from "next/navigation";

const TEXTS = {
  id: {
    title: "Ruang Baca KIWI",
    desc: `Kisah, inspirasi, dan update seru seputar perjalanan dan inovasi kami di dunia finansial. 
    Di sini, Anda bisa menemukan cerita-cerita menarik dari pengalaman tim KIWI, berbagai tips bermanfaat, 
    serta kabar terbaru mengenai langkah-langkah inovatif kami dalam mengelola aset dan menghadirkan solusi keuangan 
    untuk masa depan yang lebih baik.`
  },
  en: {
    title: "KIWI Reading Room",
    desc: `Stories, inspiration, and exciting updates about our journey and innovation in the financial world. 
    Here you can find interesting stories from the KIWI team’s experiences, useful tips, and the latest news 
    about our innovative steps in asset management and providing financial solutions for a better future.`
  }
};

export default function HomeHighlight() {
  const { lang } = useParams();
  const t = TEXTS[lang] || TEXTS["id"];

  return (
    <section className="bg-primary-950">
      <div className="text-primary-0">
        <Container>
          <div className="text-primary-0 py-10">
            <AnimatedParagraph delay={50}>
              <h1 className="font-semibold text-[40px] mb-3 text-primary-0">{t.title}</h1>
              <h2 className="font-semibold text-lg">
                {t.desc}
              </h2>
            </AnimatedParagraph>
          </div>
          <ArticleDetail />
        </Container>
      </div>
    </section>
  );
}
