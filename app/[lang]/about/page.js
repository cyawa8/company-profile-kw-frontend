"use client"

import { useParams } from "next/navigation";
import AnimatedParagraph from "../../_components/AnimatedParagraph";
import Breadcrumbs from "../../_components/Breadcrumbs";
import Container from "../../_components/Container";
import H1 from "../../_components/H1";
import People from "../../_components/People";
import VisiMisi from "../../_components/VisiMisi";
import WhatWeDoSection from "../../_components/WhatWeDo";

const dictionary = {
  id: {
    title: "Siapa Kami",
    desc1:
      "PT Kinerja Inovasi Wira Indonesia (PT KIWI) merupakan perusahaan yang bergerak di bidang pengelolaan dan akuisisi obligasi berbasis Non-Performing Loan (NPL). Didirikan pada tahun 2024, KIWI hadir untuk membantu lembaga keuangan mengatasi kredit bermasalah melalui solusi restrukturisasi dan optimalisasi aset.",
    desc2:
      "Dengan pendekatan profesional dan inovatif, KIWI berkomitmen menjaga stabilitas sistem keuangan sekaligus menciptakan nilai tambah bagi pemangku kepentingan.",
  },
  en: {
    title: "About Us",
    desc1:
      "PT Kinerja Inovasi Wira Indonesia (PT KIWI) is a company engaged in the management and acquisition of Non-Performing Loan (NPL)-based bonds. Established in 2024, KIWI is here to help financial institutions overcome problematic loans through restructuring and asset optimization solutions.",
    desc2:
      "With a professional and innovative approach, KIWI is committed to maintaining the stability of the financial system while creating added value for stakeholders.",
  },
};

export default function About() {
  const { lang } = useParams(); 

  const t = dictionary[lang] || dictionary.id;

  return (
    <Container>
      <Breadcrumbs />
      <AnimatedParagraph delay={0}>
        <H1>{t.title}</H1>
      </AnimatedParagraph>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <AnimatedParagraph delay={30}>
          {t.desc1}
        </AnimatedParagraph>
        <AnimatedParagraph delay={40}>
          {t.desc2}
        </AnimatedParagraph>
      </div>

      <VisiMisi lang={lang} />
      <WhatWeDoSection lang={lang} />
      <People lang={lang} />
    </Container>
  );
}
