"use client";

import { useParams } from "next/navigation";

const CONTENT = {
  id: {
    title: (
      <>
        Maksimalkan Pemulihan Aset,
        <br className="hidden md:block" />
        Jaga Reputasi Brand Anda
      </>
    ),
    description: (
      <>
        PT KIWI adalah mitra strategis bagi Bank, Fintech P2P, dan Multifinance
        dalam mengelola dan mengoptimalkan portofolio kredit bermasalah (NPL).
        Kami membantu mengubah aset non-produktif menjadi likuiditas terukur
        dan berkelanjutan, melalui proses yang cepat, patuh regulasi, dan
        beretika.
      </>
    ),
  },

  en: {
    title: (
      <>
        Maximize Asset Recovery,
        <br className="hidden md:block" />
        Protect Your Brand Reputation
      </>
    ),
    description: (
      <>
        PT KIWI is a strategic partner for Banks, P2P Fintechs, and
        Multifinance companies in managing and optimizing non-performing
        loan (NPL) portfolios. We help transform non-productive assets into
        measurable and sustainable liquidity through fast, compliant, and
        ethical processes.
      </>
    ),
  },
};

export default function HeroBanner() {
  const { lang } = useParams();
  const content = CONTENT[lang] || CONTENT.id;

  return (
    <section className="w-full bg-gradient-to-b from-primary-950 to-primary-800 text-white">
      <div className="max-w-7xl mx-auto px-6 py-24 text-center">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight">
          {content.title}
        </h1>

        <p className="mt-6 max-w-3xl mx-auto text-base md:text-lg leading-relaxed text-primary-100">
          {content.description}
        </p>
      </div>
    </section>
  );
}
