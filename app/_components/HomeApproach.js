"use client"

import Image from "next/image";
import Button from "./Button";
import AnimatedParagraph from "./AnimatedParagraph";
import { AnimatedDiv } from "./AnimatedDiv";

export default function HomeApproach() {
  return (
   <section className="w-full py-12 px-4 md:px-0">
  <div className="flex flex-col md:flex-row items-center max-w-5xl mx-auto gap-8 md:gap-0">
    
    <AnimatedDiv delay={100} className="w-full md:w-1/2 h-[220px] md:h-[500px] relative">
      <Image
        src="/about.png"
        alt="Ilustrasi PT KIWI"
        fill
        className="rounded-2xl object-cover"
        priority
        />
    </AnimatedDiv>

    <div className="w-full md:w-1/2 flex flex-col items-start justify-center px-0 md:px-8 py-6 md:py-0">
      
    <AnimatedParagraph delay={50}>
      <h2 className="text-lg font-bold mb-1">Siapa Kami</h2>
        <h1 className="text-2xl mb-3 md:text-5xl font-bold leading-snug mt-2">
          Manage More, <span className="text-primary-950">Gain More</span>
        </h1>
    </AnimatedParagraph>

    <AnimatedParagraph delay={100}>
      <span className="text-base text-accent-900 mb-6 leading-relaxed">
        PT Kinerja Inovasi Wira Indonesia (PT KIWI) adalah perusahaan yang bergerak dalam bidang pengelolaan dan pembelian obligasi berbasis Non-Performing Loan (NPL). Didirikan pada tahun 2024, PT KIWI hadir sebagai solusi strategis untuk membantu lembaga keuangan dalam menangani portofolio kredit bermasalah serta mendukung stabilitas sistem keuangan nasional.
      </span>
    </AnimatedParagraph>

    <AnimatedParagraph delay={150}>
      <Button>Selengkapnya</Button>
    </AnimatedParagraph>
    </div>

  </div>
</section>

  );
}
