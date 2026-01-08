"use client";

import React from "react";
import { useParams } from "next/navigation";
import Container from "./Container";
import H1 from "./H1";
import {
  ShieldCheckIcon,
  HeartIcon,
  BoltIcon,
} from "@heroicons/react/24/outline";

export default function MengapaKami() {
  const params = useParams();
  const lang = params?.lang || "id";

  const content = {
    id: {
      title: "Mengapa PT KIWI Dipercaya?",
      cards: [
        {
          icon: ShieldCheckIcon,
          title: "Terdaftar & Patuh Regulasi",
          description:
            "Kami beroperasi sesuai ketentuan hukum di Indonesia dan pedoman OJK & AFPI. Data dan reputasi nasabah serta mitra adalah prioritas kami. Seluruh komunikasi mengikuti standar regulator, dan KIWI hanya bekerja sama dengan agency resmi yang terdaftar.",
        },
        {
          icon: HeartIcon,
          title: "Solusi yang Etis & Manusiawi",
          description:
            "KIWI adalah mitra penyelesaian yang menjalankan proses secara beretika, menghormati hak nasabah, dan berorientasi pada solusi yang adil dan berkelanjutan.",
        },
        {
          icon: BoltIcon,
          title: "Cepat & Transparan",
          description:
            "Semua proses baik pembayaran nasabah maupun akuisisi portofolio didukung sistem digital yang aman dan dapat dilacak. Kami memastikan penyelesaian berjalan efisien, bukti transaksi jelas, dan status dapat dipantau real-time.",
        },
      ],
    },
    en: {
      title: "Why PT KIWI Is Trusted",
      cards: [
        {
          icon: ShieldCheckIcon,
          title: "Registered & Fully Compliant",
          description:
            "We operate in accordance with Indonesian laws and OJK & AFPI regulations. Protecting client data and brand reputation is our top priority. All communications follow regulatory standards and we only collaborate with registered agencies.",
        },
        {
          icon: HeartIcon,
          title: "Ethical & Human-Centered Solutions",
          description:
            "KIWI acts as a responsible resolution partner, prioritizing ethical practices, borrower rights, and fair, sustainable outcomes.",
        },
        {
          icon: BoltIcon,
          title: "Fast & Transparent Process",
          description:
            "All processes from borrower payments to portfolio acquisition are supported by secure, trackable digital systems, ensuring efficiency and transparency at every stage.",
        },
      ],
    },
  };

  const background =
    "bg-[url('/images/background-why.jpg')] bg-cover bg-center bg-fixed";

  return (
    <section className={`${background} min-h-[70vh] py-16 md:py-24`}>
      <Container>
        <H1 className="text-center mb-12 text-white">
          {content[lang].title}
        </H1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {content[lang].cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-lg p-6 md:p-8 flex flex-col items-center text-center transition-transform hover:scale-105"
              >
                <div className="mb-4 flex items-center justify-center w-14 h-14 rounded-full bg-primary-50">
                  <Icon className="w-7 h-7 text-primary-950" />
                </div>

                <h3 className="text-xl md:text-2xl font-bold mb-3">
                  {card.title}
                </h3>

                <p className="text-gray-700 text-sm md:text-base">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
