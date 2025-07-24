"use client";

import AnimatedParagraph from "../../_components/AnimatedParagraph";
import Breadcrumbs from "../../_components/Breadcrumbs";
import Container from "../../_components/Container";
import H1 from "../../_components/H1";
import Service from "../../_components/Service";
import { useParams } from "next/navigation";


const TEXT = {
  id: {
    title: "Keahlian Kami",
    desc1: "Dari menyederhanakan proses pengelolaan aset hingga membuka peluang baru di bidang keuangan, keahlian PT KIWI selalu siap menjawab kebutuhan Anda yang terus berkembang. Dengan fokus pada inovasi dan hasil nyata, kami membantu mitra kami untuk mengelola, mengoptimalkan, dan memaksimalkan nilai aset. Kami percaya, pertumbuhan lahir dari perbaikan berkelanjutan dan keberanian menghadapi perubahan. Karena itu, kami memadukan strategi yang tepat, solusi terkini, dan semangat kolaborasi untuk mendampingi Anda menavigasi tantangan industri dengan penuh keyakinan.",
    desc2: "Seiring tantangan dunia keuangan yang terus berubah, komitmen KIWI untuk menghadirkan solusi yang lebih cerdas dan berkelanjutan pun semakin kuat. Kami tidak hanya merespons kebutuhan Anda—kami juga mengantisipasi dan berinovasi bersama Anda, mengubah visi menjadi realita. Setiap langkah dan proyek kami dedikasikan untuk menciptakan nilai yang berarti, memberdayakan Anda untuk terus maju, mencapai lebih banyak, dan memberikan dampak positif bagi industri keuangan Indonesia.",
  },
  en: {
    title: "Our Expertise",
    desc1: "From simplifying asset management processes to unlocking new opportunities in finance, PT KIWI’s expertise is always ready to meet your evolving needs. With a focus on innovation and real results, we help our partners manage, optimize, and maximize asset value. We believe that growth comes from continuous improvement and the courage to face change. That’s why we combine the right strategies, the latest solutions, and a spirit of collaboration to help you navigate industry challenges with confidence.",
    desc2: "As the challenges in the financial world continue to evolve, KIWI's commitment to providing smarter and more sustainable solutions grows ever stronger. We don't just respond to your needs—we anticipate and innovate with you, turning vision into reality. Every step and project we dedicate to creating meaningful value, empowering you to keep moving forward, achieve more, and make a positive impact on Indonesia’s financial industry.",
  }
};

export default function Page() {
  const { lang } = useParams();
  const t = TEXT[lang] || TEXT.id;

  return (
    <Container>
      <Breadcrumbs />
      <AnimatedParagraph delay={0}>
        <H1>{t.title}</H1>
      </AnimatedParagraph>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-justify">
        <AnimatedParagraph delay={50}>
          <h2>{t.desc1}</h2>
        </AnimatedParagraph>
        <AnimatedParagraph delay={100}>
          <h2>{t.desc2}</h2>
        </AnimatedParagraph>
      </div>
      <Service lang={lang}/>
    </Container>
  );
}
