"use client";

import React from "react";
import Container from "./Container";
import { ExclamationTriangleIcon } from "@heroicons/react/24/solid";
import { useParams } from "next/navigation";

export default function FraudAlertSection() {
    const copy = {
  id: {
    title: "WASPADA PENIPUAN MENGATASNAMAKAN KIWI",
    description: (
      <>
        PT KIWI tidak pernah meminta pembayaran ke rekening pribadi.
        Transaksi resmi hanya ke:
        <br />
        <strong>
          Virtual Account atas nama Debitur atau Rekening Bank atas nama
          PT Kinerja Inovasi Wira Indonesia.
        </strong>
        <br />
        Abaikan permintaan transfer ke rekening pribadi atau e-wallet pribadi.
        Laporkan kecurigaan ke
        <strong> cs@kiwi.co.id</strong> atau WhatsApp resmi.
      </>
    ),
  },
  en: {
    title: "BEWARE OF FRAUD CLAIMING TO BE KIWI",
    description: (
      <>
        PT KIWI never requests payments to personal bank accounts.
        Official transactions are only made to:
        <br />
        <strong>
          Virtual Accounts under the Debtor’s name or Bank Accounts under
          PT Kinerja Inovasi Wira Indonesia.
        </strong>
        <br />
        Ignore any requests to transfer funds to personal accounts or e-wallets.
        Report any suspicious activity to
        <strong> cs@kiwi.co.id</strong> or our official WhatsApp.
      </>
    ),
  },
};


  const { lang } = useParams();
  const t = copy[lang] || copy.id;

  return (
    <section className="bg-red-50 py-10 md:py-14">
      <Container>
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 border border-red-300 rounded-md bg-white p-6 md:p-8">
          
          <div className="flex-shrink-0">
            <ExclamationTriangleIcon className="w-10 h-10 text-red-800" />
          </div>

          <div className="flex-1">
            <h3 className="text-red-800 font-bold text-lg md:text-xl mb-2">
              {t.title}
            </h3>

            <p className="text-red-700 text-sm md:text-base leading-relaxed">
              {t.description}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
