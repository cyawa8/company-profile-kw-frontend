import AnimatedParagraph from "../_components/AnimatedParagraph";
import Breadcrumbs from "../_components/Breadcrumbs";
import Container from "../_components/Container";
import H1 from "../_components/H1";
import People from "../_components/People";
import VisiMisi from "../_components/VisiMisi";
import WhatWeDoSection from "../_components/WhatWeDo";

export const metadata = {
  title: "About",
};

export default function About() {
  return (
    <Container>
      <Breadcrumbs />
      <AnimatedParagraph delay={0}>
        <H1>Siapa Kami</H1>
      </AnimatedParagraph>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <AnimatedParagraph delay={30}>
          PT Kinerja Inovasi Wira Indonesia (PT KIWI) merupakan perusahaan yang bergerak di bidang pengelolaan dan akuisisi obligasi berbasis Non-Performing Loan (NPL). Didirikan pada tahun 2024, KIWI hadir untuk membantu lembaga keuangan mengatasi kredit bermasalah melalui solusi restrukturisasi dan optimalisasi aset.
        </AnimatedParagraph>
        <AnimatedParagraph delay={40}>
          Dengan pendekatan profesional dan inovatif, KIWI berkomitmen menjaga stabilitas sistem keuangan sekaligus menciptakan nilai tambah bagi pemangku kepentingan.
        </AnimatedParagraph>
      </div>

      <VisiMisi />
      <WhatWeDoSection />
      <People />
    </Container>
    
  );
}
