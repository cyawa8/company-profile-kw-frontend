"use client";

import Achievements from "@/app/_components/Achievements";
import AnimatedParagraph from "@/app/_components/AnimatedParagraph";
import Breadcrumbs from "@/app/_components/Breadcrumbs";
import Container from "@/app/_components/Container";
import H1 from "@/app/_components/H1";
import { useParams } from "next/navigation";

const TEXT = {
  id: {
    title: "Pencapaian kami",
    desc1:
      "Setiap pencapaian adalah bukti nyata dari dedikasi, kerja sama tim, dan semangat inovasi kami. Mulai dari keberhasilan menyelesaikan berbagai proyek hingga meraih kepercayaan para klien, kami bangga atas setiap langkah kemajuan yang telah diraih dan lebih bangga lagi atas dampak positif yang berhasil kami ciptakan. Setiap keberhasilan ini mendorong kami untuk terus melangkah lebih tinggi, menetapkan standar baru bagi diri kami sendiri dan bagi semua yang kami layani.",
    quote: '"Driven by Progress, Inspired by Impact"',
    desc2:
      "Setiap keberhasilan mencerminkan tekad dan antusiasme kami untuk terus berkembang. Bersama, setiap sukses menjadi energi baru untuk melangkah ke tahap berikutnya.",
  },
  en: {
    title: "Our Achievements",
    desc1:
      "Every achievement is a testament to our dedication, teamwork, and spirit of innovation. From successfully completing various projects to gaining the trust of our clients, we are proud of every step forward we have made and even prouder of the positive impact we have created. Each accomplishment motivates us to keep moving higher, setting new standards for ourselves and everyone we serve.",
    quote: '"Driven by Progress, Inspired by Impact"',
    desc2:
      "Each success reflects our determination and enthusiasm to keep growing. Together, every win becomes new energy to take the next step.",
  },
};

export default function Achievement() {
  const { lang } = useParams();
  const t = TEXT[lang] || TEXT.id;

  return (
    <>
      <Container>
        <Breadcrumbs />
        <AnimatedParagraph delay={0}>
          <H1>{t.title}</H1>
          <h2 className="text-justify">{t.desc1}</h2>
          <H1 className="text-center py-32">{t.quote}</H1>
        </AnimatedParagraph>

        <AnimatedParagraph delay={100}>
          <h2 className="text-justify">{t.desc2}</h2>
        </AnimatedParagraph>
      </Container>
      <Achievements />
    </>
  );
}
