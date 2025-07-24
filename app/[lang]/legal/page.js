"use client";

import { useParams } from "next/navigation";
import AnimatedParagraph from "../../_components/AnimatedParagraph";
import Breadcrumbs from "../../_components/Breadcrumbs";
import Container from "../../_components/Container";
import H1 from "../../_components/H1";

const TEXT = {
  id: {
    title: "Ketentuan Hukum",
    intro: `Selamat datang di situs PT Kinerja Inovasi Wira Indonesia (“kami”). Dengan mengakses dan menggunakan layanan ini, Anda setuju untuk terikat dengan ketentuan hukum berikut. Mohon baca dengan seksama sebelum menggunakan situs kami.`,
    sections: [
      {
        heading: "1. Hak Cipta & Kekayaan Intelektual",
        content: `Seluruh konten, logo, desain, teks, gambar, dan elemen lain yang terdapat pada situs ini merupakan milik PT Kinerja Inovasi Wira Indonesia, kecuali dinyatakan lain. Dilarang menyalin, mendistribusikan, memodifikasi, atau menggunakan konten tanpa izin tertulis.`,
      },
      {
        heading: "2. Penggunaan Situs",
        content: `Anda setuju untuk menggunakan situs ini hanya untuk tujuan yang sah dan tidak melanggar hukum yang berlaku. Anda dilarang menggunakan situs ini untuk tindakan penipuan, pencemaran nama baik, penyebaran malware, atau aktivitas merugikan lainnya.`,
      },
      {
        heading: "3. Tautan ke Pihak Ketiga",
        content: `Situs ini dapat mengandung tautan ke situs pihak ketiga yang di luar kendali kami. Kami tidak bertanggung jawab atas konten, kebijakan privasi, atau praktik situs pihak ketiga tersebut. Kami menyarankan Anda untuk membaca ketentuan dan kebijakan situs tersebut secara terpisah.`,
      },
      {
        heading: "4. Batasan Tanggung Jawab",
        content: `PT Kinerja Inovasi Wira Indonesia tidak bertanggung jawab atas kerugian atau kerusakan yang timbul akibat penggunaan atau ketidakmampuan menggunakan situs dan layanan kami, baik secara langsung maupun tidak langsung.`,
      },
      {
        heading: "5. Perubahan Ketentuan",
        content: `Kami berhak mengubah, menambah, atau mengurangi ketentuan ini kapan saja tanpa pemberitahuan sebelumnya. Setiap perubahan akan diumumkan di halaman ini dan berlaku segera setelah dipublikasikan. Penggunaan situs setelah perubahan berarti Anda menyetujui ketentuan yang baru.`,
      },
      {
        heading: "6. Hukum yang Berlaku",
        content: `Ketentuan ini tunduk pada hukum Republik Indonesia. Setiap sengketa yang timbul akibat penggunaan situs ini akan diselesaikan secara musyawarah atau melalui jalur hukum sesuai peraturan yang berlaku di Indonesia.`,
      },
    ],
    contact: `Jika Anda memiliki pertanyaan terkait ketentuan hukum ini, silakan hubungi kami melalui halaman kontak.`,
  },
  en: {
    title: "Legal Terms",
    intro: `Welcome to the PT Kinerja Inovasi Wira Indonesia (“we”, “us”) website. By accessing and using this service, you agree to the following legal terms. Please read carefully before using our site.`,
    sections: [
      {
        heading: "1. Copyright & Intellectual Property",
        content: `All content, logos, designs, texts, images, and other elements on this website are owned by PT Kinerja Inovasi Wira Indonesia unless otherwise stated. Copying, distributing, modifying, or using content without written permission is prohibited.`,
      },
      {
        heading: "2. Website Usage",
        content: `You agree to use this site only for lawful purposes and not to violate any applicable law. You are prohibited from using this site for fraud, defamation, malware distribution, or other harmful activities.`,
      },
      {
        heading: "3. Third Party Links",
        content: `This site may contain links to third-party websites outside our control. We are not responsible for the content, privacy policies, or practices of such sites. We recommend reading the terms and policies of those websites separately.`,
      },
      {
        heading: "4. Limitation of Liability",
        content: `PT Kinerja Inovasi Wira Indonesia is not responsible for any losses or damages resulting from the use or inability to use our site and services, directly or indirectly.`,
      },
      {
        heading: "5. Terms Changes",
        content: `We reserve the right to change, add, or remove these terms at any time without prior notice. Any changes will be posted on this page and will take effect immediately after publication. Continued use of the site after changes means you accept the new terms.`,
      },
      {
        heading: "6. Governing Law",
        content: `These terms are governed by the laws of the Republic of Indonesia. Any disputes arising from the use of this site will be resolved amicably or through legal channels in accordance with applicable regulations in Indonesia.`,
      },
    ],
    contact: `If you have questions regarding these legal terms, please contact us via the contact page.`,
  },
};

export default function LegalTerms() {
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
          <AnimatedParagraph delay={100 + idx * 50} key={sec.heading}>
            <h2 className="font-bold mt-6 mb-2 text-2xl">{sec.heading}</h2>
            <p>{sec.content}</p>
          </AnimatedParagraph>
        ))}
        <AnimatedParagraph delay={500}>
          <p>{t.contact}</p>
        </AnimatedParagraph>
      </div>
    </Container>
  );
}
