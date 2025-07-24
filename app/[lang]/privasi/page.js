"use client";

import { useParams } from "next/navigation";
import AnimatedParagraph from "../../_components/AnimatedParagraph";
import Breadcrumbs from "../../_components/Breadcrumbs";
import Container from "../../_components/Container";
import H1 from "../../_components/H1";

const TEXT = {
  id: {
    title: "Kebijakan Privasi",
    intro: `PT Kinerja Inovasi Wira Indonesia (“kami”) sangat menghargai privasi dan perlindungan data pribadi pengguna (“Anda”). Kami berkomitmen menjaga informasi pribadi yang Anda berikan saat menggunakan layanan kami.`,
    sections: [
      {
        heading: "Informasi yang Kami Kumpulkan",
        list: [
          { label: "Informasi Pribadi", desc: "Seperti nama, email, nomor telepon, dan alamat yang Anda berikan melalui formulir kontak atau pendaftaran." },
          { label: "Data Otomatis", desc: "Seperti alamat IP, jenis perangkat, browser, dan data kunjungan yang dikumpulkan secara otomatis melalui cookie dan teknologi pelacakan lainnya." }
        ]
      },
      {
        heading: "Penggunaan Informasi",
        intro: "Data Anda digunakan untuk:",
        list: [
          { desc: "Memproses permintaan dan pertanyaan Anda." },
          { desc: "Meningkatkan layanan dan pengalaman pengguna." },
          { desc: "Mengirim informasi terkait produk, layanan, atau promosi jika Anda memberikan persetujuan." }
        ]
      },
      {
        heading: "Perlindungan Data",
        content: "Kami mengambil langkah-langkah keamanan teknis dan organisasi untuk melindungi data Anda dari akses tidak sah, perubahan, atau penyalahgunaan.",
      },
      {
        heading: "Berbagi Informasi",
        content: "Kami tidak akan membagikan data pribadi Anda kepada pihak ketiga tanpa izin, kecuali diwajibkan oleh hukum atau untuk kepentingan pemrosesan layanan yang Anda minta.",
      },
      {
        heading: "Hak Pengguna",
        content: "Anda berhak meminta akses, koreksi, atau penghapusan data pribadi Anda dengan menghubungi kami melalui halaman kontak.",
      },
      {
        heading: "Perubahan Kebijakan Privasi",
        content: "Kami dapat memperbarui kebijakan ini dari waktu ke waktu. Perubahan akan dipublikasikan di halaman ini.",
      },
    ],
    outro: "Jika Anda memiliki pertanyaan atau membutuhkan klarifikasi terkait kebijakan privasi, silakan hubungi kami melalui halaman kontak.",
  },
  en: {
    title: "Privacy Policy",
    intro: `PT Kinerja Inovasi Wira Indonesia (“we”) highly value your privacy and the protection of users' personal data (“you”). We are committed to safeguarding the personal information you provide when using our services.`,
    sections: [
      {
        heading: "Information We Collect",
        list: [
          { label: "Personal Information", desc: "Such as name, email, phone number, and address provided through contact or registration forms." },
          { label: "Automatic Data", desc: "Such as IP address, device type, browser, and visit data automatically collected via cookies and other tracking technologies." }
        ]
      },
      {
        heading: "Use of Information",
        intro: "Your data is used for:",
        list: [
          { desc: "Processing your requests and inquiries." },
          { desc: "Improving services and user experience." },
          { desc: "Sending product, service, or promotional information if you give consent." }
        ]
      },
      {
        heading: "Data Protection",
        content: "We take technical and organizational security measures to protect your data from unauthorized access, alteration, or misuse.",
      },
      {
        heading: "Information Sharing",
        content: "We will not share your personal data with third parties without permission, except as required by law or to process services you request.",
      },
      {
        heading: "User Rights",
        content: "You have the right to request access, correction, or deletion of your personal data by contacting us through the contact page.",
      },
      {
        heading: "Changes to Privacy Policy",
        content: "We may update this policy from time to time. Changes will be published on this page.",
      },
    ],
    outro: "If you have any questions or need clarification about the privacy policy, please contact us through the contact page.",
  }
};

export default function Privasi() {
  const { lang = "id" } = useParams();
  const t = TEXT[lang] || TEXT.id;

  return (
    <Container>
      <Breadcrumbs />
      <H1>{t.title}</H1>
      <div className="prose max-w-none text-base text-gray-800 mb-8">
        <AnimatedParagraph delay={0}>
          <p>{t.intro}</p>
        </AnimatedParagraph>
        {t.sections.map((sec, idx) => (
          <AnimatedParagraph delay={100 + idx * 60} key={sec.heading}>
            <h2 className="font-bold mt-6 mb-2 text-2xl">{sec.heading}</h2>
            {sec.content && <p>{sec.content}</p>}
            {sec.list && (
              <ul className="list-disc pl-6">
                {sec.list.map((item, i) => (
                  <li key={item.label || item.desc}>
                    {item.label && <b>{item.label}:</b>} {item.desc}
                  </li>
                ))}
              </ul>
            )}
            {sec.intro && <p>{sec.intro}</p>}
          </AnimatedParagraph>
        ))}
        <AnimatedParagraph delay={600}>
          <p>{t.outro}</p>
        </AnimatedParagraph>
      </div>
    </Container>
  );
}
