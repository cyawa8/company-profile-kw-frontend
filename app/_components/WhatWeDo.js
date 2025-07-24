import {
  Users,
  Network,
  BadgePercent,
  DollarSign,
} from "lucide-react";
import H1 from "@/app/_components/H1";
import { AnimatedDiv } from "./AnimatedDiv";
import AnimatedParagraph from "./AnimatedParagraph";

const dictionary = {
  id: {
    title: "Apa yang Kami Lakukan",
    services: [
      {
        title: "Akuisisi Obligasi NPL",
        desc: "Mengakuisisi obligasi berbasis NPL dari lembaga keuangan.",
      },
      {
        title: "Manajemen Aset",
        desc: "Mengelola dan menganalisis aset untuk optimasi nilai.",
      },
      {
        title: "Restrukturisasi & Penjualan",
        desc: "Restrukturisasi kredit & penjualan aset secara strategis.",
      },
      {
        title: "Pemulihan Nilai",
        desc: "Optimalisasi pemulihan NPL untuk hasil terbaik investor.",
      },
    ],
  },
  en: {
    title: "What We Do",
    services: [
      {
        title: "NPL Bond Acquisition",
        desc: "Acquiring NPL-based bonds from financial institutions.",
      },
      {
        title: "Asset Management",
        desc: "Managing and analyzing assets for optimal value.",
      },
      {
        title: "Restructuring & Sales",
        desc: "Restructuring loans & strategic asset sales.",
      },
      {
        title: "Value Recovery",
        desc: "Optimizing NPL recovery for the best investor results.",
      },
    ],
  },
};

export default function WhatWeDoSection({ lang = "id" }) {
  const t = dictionary[lang] || dictionary.id;

  const iconList = [
    <BadgePercent key={1} className="w-12 h-12 stroke-primary-950 mb-2" />,
    <Users key={2} className="w-12 h-12 stroke-primary-950 mb-2" />,
    <Network key={3} className="w-12 h-12 stroke-primary-950 mb-2" />,
    <DollarSign key={4} className="w-12 h-12 stroke-primary-950 mb-2" />,
  ];

  return (
    <section className="py-8 px-4">
      <AnimatedParagraph delay={0}>
        <H1 className="text-center mb-6">{t.title}</H1>
      </AnimatedParagraph>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
        {t.services.map((srv, idx) => (
          <AnimatedDiv delay={50 + idx * 50} key={idx}
            className="flex flex-col items-center bg-white rounded-2xl shadow p-5">
            {iconList[idx]}
            <div className="font-semibold text-center text-primary-900 mb-1">{srv.title}</div>
            <div className="text-sm text-center text-accent-700">{srv.desc}</div>
          </AnimatedDiv>
        ))}
      </div>
    </section>
  );
}
