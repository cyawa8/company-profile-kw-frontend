"use client";

import React from "react";
import { useParams } from "next/navigation";
import {
  UserIcon,
  BriefcaseIcon,
} from "@heroicons/react/24/outline";
import Button from "./Button";
import Container from "./Container";
import H1 from "./H1";

export default function CardGridSection() {
  const params = useParams();
  const lang = params?.lang || "id";

  const CONTENT = {
    id: [
      {
        icon: UserIcon,
        title: "Untuk Nasabah",
        description:
          "Saya ingin mengecek tagihan, mencari solusi, atau melakukan pembayaran.",
        buttonTitle: "Cek Tagihan dan Bayar",
        buttonUrl: "/billreview",
      },
      {
        icon: BriefcaseIcon,
        title: "Untuk Mitra Bisnis",
        description:
          "Pelajari solusi pengelolaan portofolio dan kerja sama strategis dengan KIWI.",
        buttonTitle: "Pelajari Solusi Portofolio",
        buttonUrl: "/portfolio",
      },
    ],
    en: [
      {
        icon: UserIcon,
        title: "For Customers",
        description:
          "I want to check my bills, explore solutions, or make a payment.",
        buttonTitle: "Check & Pay Bills",
        buttonUrl: "/billreview",
      },
      {
        icon: BriefcaseIcon,
        title: "For Business Partners",
        description:
          "Learn about portfolio solutions and strategic partnerships with KIWI.",
        buttonTitle: "Explore Portfolio Solutions",
        buttonUrl: "/portfolio",
      },
    ],
  };

  const cards = CONTENT[lang] || CONTENT.id;

  const background =
    "bg-[url('/images/background.jpg')] bg-cover bg-center bg-fixed";

  return (
    <section className={`${background} min-h-[70vh] py-10 md:py-14`}>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {cards.map((card, idx) => {
            const Icon = card.icon;

            return (
              <div
                key={idx}
                className="
                  bg-white
                  rounded-2xl
                  shadow-lg
                  p-6 md:p-8
                  flex flex-col
                  items-center
                  text-center
                  transition-all
                  hover:scale-105
                  hover:shadow-xl
                "
              >
                {/* ICON */}
                <div className="mb-4 flex items-center justify-center w-14 h-14 rounded-full bg-primary-50">
                  <Icon className="w-7 h-7 text-primary-950" />
                </div>

                {/* TITLE */}
                <H1 className="text-xl md:text-2xl font-bold mb-3">
                  {card.title}
                </H1>

                {/* DESCRIPTION */}
                <p className="text-gray-700 text-sm md:text-base mb-6">
                  {card.description}
                </p>

                {/* BUTTON */}
                {card.buttonTitle && card.buttonUrl && (
                  <Button
                    size="medium"
                    variation="primary"
                    href={`/${lang}${card.buttonUrl}`}
                  >
                    {card.buttonTitle}
                  </Button>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
