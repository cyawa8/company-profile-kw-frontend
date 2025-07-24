"use client"

import AboutJourney from "@/app/_components/AboutJourney";
import AnimatedParagraph from "@/app/_components/AnimatedParagraph";
import Breadcrumbs from "@/app/_components/Breadcrumbs";
import Container from "@/app/_components/Container";
import H1 from "@/app/_components/H1";
import { useParams } from "next/navigation";

const dictionary = {
  id: {
    title: "Perjalanan Kami",
    desc: `Inovasi menuntun langkah kami; inspirasi menggerakkan setiap perjalanan. Dari benih ide berani, kami mengubah tantangan menjadi peluang dan mimpi menjadi kenyataan. Setiap tahun, kami tumbuh, beradaptasi, dan membentuk masa depan bersama, satu pencapaian demi pencapaian. Perjalanan kami bukan hanya tentang tujuan akhir, melainkan menciptakan dampak positif sepanjang perjalanan.`,
  },
  en: {
    title: "Our Journey",
    desc: `Innovation lights our path; inspiration drives every step. From the seeds of a bold idea, we’ve transformed challenges into opportunities and dreams into reality. Each year, we grow, adapt, and shape the future together, one milestone at a time. Our journey is not just about reaching a destination, but about creating lasting impact along the way.`,
  },
};


export default function Journey() {
  const { lang } = useParams();
  const t = dictionary[lang] || dictionary.id;

  return (
    <Container>
      <Breadcrumbs/>
      <AnimatedParagraph delay={0}>
        <div className="flex justify-center">
          <H1>{t.title}</H1>
        </div>
      </AnimatedParagraph>
      <AnimatedParagraph delay={50}>
        <div>
          <h1 className="flex text-justify">
            {t.desc}
          </h1>
        </div>
      </AnimatedParagraph>
      <AnimatedParagraph delay={100}>
        <AboutJourney />
      </AnimatedParagraph>
    </Container>
  );
}
