import {
  Users,
  Network,
  BadgePercent,
  DollarSign,
} from "lucide-react";
import H1 from "@/app/_components/H1"; // Pastikan ini ada ya
import { AnimatedDiv } from "./AnimatedDiv";
import AnimatedParagraph from "./AnimatedParagraph";

const services = [
  {
    title: "Akuisisi Obligasi NPL",
    icon: <BadgePercent className="w-12 h-12 stroke-primary-950 mb-2" />,
    desc: "Mengakuisisi obligasi berbasis NPL dari lembaga keuangan.",
    delay: 50,
  },
  {
    title: "Manajemen Aset",
    icon: <Users className="w-12 h-12 stroke-primary-950 mb-2" />,
    desc: "Mengelola dan menganalisis aset untuk optimasi nilai.",
    delay: 100,
  },
  {
    title: "Restrukturisasi & Penjualan",
    icon: <Network className="w-12 h-12 stroke-primary-950 mb-2" />,
    desc: "Restrukturisasi kredit & penjualan aset secara strategis.",
    delay: 150,
  },
  {
    title: "Pemulihan Nilai",
    icon: <DollarSign className="w-12 h-12 stroke-primary-950 mb-2" />,
    desc: "Optimalisasi pemulihan NPL untuk hasil terbaik investor.",
    delay : 200,
  },
];

export default function WhatWeDoSection() {
  return (
    <section className="py-8 px-4">
      <AnimatedParagraph delay={0}>
      <H1 className="text-center mb-6">Apa yang Kami Lakukan</H1>
      </AnimatedParagraph>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
        {services.map((srv, idx) => (
          <AnimatedDiv delay={srv.delay} key={idx}
            className="flex flex-col items-center bg-white rounded-2xl shadow p-5">
              {srv.icon}
              <div className="font-semibold text-center text-primary-900 mb-1">{srv.title}</div>
              <div className="text-sm text-center text-accent-700">{srv.desc}</div>
          </AnimatedDiv>
        ))}
      </div>
    </section>
  );
}
