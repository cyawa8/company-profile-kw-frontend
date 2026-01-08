"use client"

import BannerCarousel from "../_components/BannerCarousel";
import { useHomeContent } from "@/hooks/useHomeContent";
import Loading from "../loading";
import NoData from "../_components/NoData";
import { useParams } from "next/navigation";
import HomeApproach from "../_components/HomeApproach";
import HomeHighlight from "../_components/HomeHighlight";
import People from "../_components/People";
import CardGridSection from "../_components/CardGridSection";
import MengapaKami from "../_components/MengapaKami";
import StepGuide from "../_components/StepGuide";
import Container from "../_components/Container";
import H1 from "../_components/H1";
import FraudAlertSection from "../_components/FraudAlertSection";
import FaqAccordion from "../_components/Faq";
import HeroBanner from "../_components/BannerHeroNasabah";
import FeatureGrid from "../_components/FeaturedGrid";
import ProcessStepper from "../_components/ProcessStepper";
import AdvantageGrid from "../_components/AdvantageGrid";
import PartnershipCTA from "../_components/PartnershipCTA";
import ApplicantFormPage from "./applicant/page";
import { ShieldCheckIcon } from "@heroicons/react/24/outline";
import { BoltIcon, BuildingOfficeIcon, ChartBarSquareIcon, ComputerDesktopIcon, HeartIcon } from "@heroicons/react/24/solid";

export default function Page() {
  const { lang } = useParams();
  const { data, isLoading, error } = useHomeContent(lang);
  
  

  if (isLoading) return <Loading />;
  if (error) return <NoData />;

  const allImages = data.flatMap(content =>
    Array.isArray(content.image)
      ? content.image
      : content.image
      ? [content.image]
      : []
  );
  const firstContent = data[0] || {};
  const title = firstContent.title || "";
  const subtitle = firstContent.subtitle || "";

const stepsCopy = {
  id: [
    {
      title: "Masuk ke Portal KIWI",
      description: "Akses di www.kiwi.co.id",
    },
    {
      title: "Verifikasi Akun Pinjaman",
      description:
        "Masukkan data verifikasi singkat; sistem melindungi privasi Anda",
    },
    {
      title: "Pilih Opsi Penyelesaian",
      description: "Restrukturisasi / keringanan / pelunasan penuh",
    },
    {
      title: "Konfirmasi & Panduan",
      description:
        "Tim KIWI menghubungi Anda untuk langkah selanjutnya",
    },
  ],
  en: [
    {
      title: "Access the KIWI Portal",
      description: "Visit www.kiwi.co.id",
    },
    {
      title: "Loan Account Verification",
      description:
        "Enter brief verification data; the system protects your privacy",
    },
    {
      title: "Choose a Resolution Option",
      description:
        "Restructuring / relief / full settlement",
    },
    {
      title: "Confirmation & Guidance",
      description:
        "The KIWI team will contact you for the next steps",
    },
  ],
};


  const faqsByLang = {
  id: [
    {
      id: 1,
      question: "Bagaimana cara mengajukan restrukturisasi?",
      answer:
        "Ajukan melalui portal resmi atau hubungi tim layanan KIWI (WhatsApp/email/telepon). Kami akan menindaklanjuti segera.",
    },
    {
      id: 2,
      question: "Apakah data saya aman?",
      answer:
        "Ya. KIWI mematuhi UU Perlindungan Data Pribadi, pedoman OJK & AFPI; data dikelola terenkripsi dan tidak dibagikan tanpa izin.",
    },
    {
      id: 3,
      question: "Bagaimana jika saya tidak bisa membayar penuh?",
      answer:
        "Kami menawarkan opsi restrukturisasi dan keringanan yang fleksibel sesuai kemampuan Anda.",
    },
    {
      id: 4,
      question: "Apa bedanya KIWI dengan lembaga keuangan sebelumnya?",
      answer:
        "KIWI adalah pengelola portofolio yang mengambil alih secara resmi; fokus kami penyelesaian yang transparan dan manusiawi.",
    },
    {
      id: 5,
      question: "Berapa lama proses restrukturisasi/pelunasan?",
      answer:
        "Rata-rata 1–3 hari kerja setelah dokumen lengkap & diverifikasi.",
    },
    {
      id: 6,
      question: "Apakah saya akan menerima surat lunas setelah pelunasan?",
      answer:
        "Ya — surat keterangan lunas resmi akan dikirim via email atau portal.",
    },
    {
      id: 7,
      question:
        "Saya masih dihubungi pihak lain setelah pengalihan, apa yang harus saya lakukan?",
      answer:
        "Catat nama/nomor pihak tersebut dan hubungi tim resmi KIWI untuk klarifikasi. Kami akan tindaklanjuti.",
    },
    {
      id: 8,
      question: "Bagaimana memastikan saya berbicara dengan pihak resmi KIWI?",
      answer:
        "Gunakan kanal resmi: www.kiwi.co.id, email cs@kiwi.co.id, WhatsApp resmi. KIWI tidak akan meminta transfer ke rekening pribadi atau data sensitif via pesan pribadi.",
    },
  ],

  en: [
    {
      id: 1,
      question: "How can I apply for loan restructuring?",
      answer:
        "Submit your request through the official portal or contact KIWI’s support team (WhatsApp/email/phone). We will follow up promptly.",
    },
    {
      id: 2,
      question: "Is my data secure?",
      answer:
        "Yes. KIWI complies with Personal Data Protection Law and OJK & AFPI guidelines. Your data is encrypted and never shared without consent.",
    },
    {
      id: 3,
      question: "What if I cannot pay in full?",
      answer:
        "We offer flexible restructuring and relief options tailored to your financial capacity.",
    },
    {
      id: 4,
      question: "How is KIWI different from my previous financial institution?",
      answer:
        "KIWI is an officially appointed portfolio manager, focusing on transparent and ethical resolution.",
    },
    {
      id: 5,
      question: "How long does the restructuring or settlement process take?",
      answer:
        "Typically 1–3 business days after documents are complete and verified.",
    },
    {
      id: 6,
      question: "Will I receive a settlement letter after payment?",
      answer:
        "Yes — an official settlement letter will be issued via email or portal.",
    },
    {
      id: 7,
      question:
        "I am still contacted by another party after the transfer. What should I do?",
      answer:
        "Record the caller’s details and contact KIWI’s official team for verification. We will handle it.",
    },
    {
      id: 8,
      question: "How can I verify I am speaking with an official KIWI representative?",
      answer:
        "Use official channels only: www.kiwi.co.id, cs@kiwi.co.id, or official WhatsApp. KIWI never asks for transfers to personal accounts or sensitive data via private messages.",
    },
  ],
};


  const KIWI_FEATURES = {
  id: {
    title: "Mengapa Bermitra dengan KIWI",
    items: [
      {
        icon: ShieldCheckIcon,
        title: "Kepatuhan Regulator & Perlindungan Reputasi",
        description:
          "KIWI beroperasi sesuai pedoman OJK & AFPI. Kami menjaga reputasi brand Anda melalui praktik yang beretika dan perlindungan data penuh.",
      },
      {
        icon: BoltIcon,
        title: "Proses Akuisisi Cepat & Harga Kompetitif",
        description:
          "Tim analis kami melakukan due diligence dan valuasi portofolio secara efisien, sehingga Anda mendapatkan penawaran likuiditas terbaik tanpa mengorbankan reputasi.",
      },
      {
        icon: ChartBarSquareIcon,
        title: "Pendekatan Inovatif & Berbasis Data",
        description:
          "Kami memakai analitik data dan pemetaan risiko untuk menyusun strategi resolusi yang meningkatkan recovery rate dan efisiensi operasional.",
      },
      {
        icon: HeartIcon,
        title: "Pengelolaan Nasabah yang Etis",
        description:
          "Seluruh komunikasi dan transisi ke debitur dilakukan secara manusiawi dan sesuai regulasi; KIWI hanya berkolaborasi dengan lembaga penagihan resmi terdaftar.",
      },
    ],
  },

  en: {
    title: "Why Partner with KIWI",
    items: [
      {
        icon: ShieldCheckIcon,
        title: "Regulatory Compliance & Brand Protection",
        description:
          "KIWI operates in full compliance with OJK & AFPI guidelines. We protect your brand reputation through ethical practices and comprehensive data protection.",
      },
      {
        icon: BoltIcon,
        title: "Fast Acquisition Process & Competitive Pricing",
        description:
          "Our analysts conduct efficient due diligence and portfolio valuation, ensuring optimal liquidity offers without compromising reputation.",
      },
      {
        icon: ChartBarSquareIcon,
        title: "Innovative & Data-Driven Approach",
        description:
          "We leverage data analytics and risk mapping to design resolution strategies that improve recovery rates and operational efficiency.",
      },
      {
        icon: HeartIcon,
        title: "Ethical Borrower Management",
        description:
          "All borrower communication and transitions are conducted ethically and in compliance with regulations; KIWI works only with registered collection agencies.",
      },
    ],
  },
};

  const kiwiProcessSteps = [
  {
    title: "Diskusi Awal & NDA",
    description:
      "Penjajakan rahasia dan penandatanganan NDA",
  },
  {
    title: "Analisis Data & Valuasi",
    description:
      "Segmentasi risiko dan valuasi portofolio",
  },
  {
    title: "Penawaran & Akuisisi Legal",
    description:
      "Struktur akuisisi dan dokumentasi lengkap",
  },
  {
    title: "Transisi Nasabah & Pengelolaan Etis",
    description:
      "Transisi terarah dan pemantauan hasil",
  },
];

const kiwiAdvantages = [
  {
    icon: "",
    title: "Berpengalaman Lintas Sektor",
    subtitle: "Bank, Fintech, Multifinance",
  },
  {
    icon: "",
    title: "Kepatuhan Penuh",
    subtitle: "Terhadap OJK & AFPI",
  },
  {
    icon: "",
    title: "Sistem Digital Terintegrasi",
    subtitle: "Untuk tracking proses",
  },
  {
    icon: "",
    title: "Pendekatan Humanis",
    subtitle: "Dalam pengelolaan borrower",
  },
];

const howItWorksCopy = {
  id: {
    title: "Cara Kerja KIWI Untuk Nasabah",
    noteTitle: "Catatan Kepercayaan:",
    noteText:
      "Seluruh proses digital, transparan, dan sesuai pedoman OJK & AFPI. Tidak ada biaya tambahan dari pihak KIWI; komunikasi hanya melalui kanal resmi.",
  },
  en: {
    title: "How KIWI Works for Borrowers",
    noteTitle: "Trust Notice:",
    noteText:
      "All processes are fully digital, transparent, and compliant with OJK & AFPI guidelines. There are no additional fees charged by KIWI; all communication is conducted through official channels.",
  },
};

const processCopy = {
  id: {
    title: "Proses Kerja Singkat",
    subtitle: "Untuk Mitra B2B",
    steps: [
      { title: "Diskusi Awal & NDA", description: "Penjajakan rahasia dan penandatanganan NDA" },
      { title: "Analisis Data & Valuasi", description: "Segmentasi risiko dan valuasi portofolio" },
      { title: "Penawaran & Akuisisi Legal", description: "Struktur akuisisi dan dokumentasi lengkap" },
      { title: "Transisi Nasabah & Pengelolaan Etis", description: "Transisi terarah dan pemantauan hasil" },
    ],
  },
  en: {
    title: "Brief Work Process",
    subtitle: "For B2B Partners",
    steps: [
      { title: "Initial Discussion & NDA", description: "Confidential assessment and NDA signing" },
      { title: "Data Analysis & Valuation", description: "Risk segmentation and portfolio valuation" },
      { title: "Offer & Legal Acquisition", description: "Acquisition structure and legal documentation" },
      { title: "Borrower Transition & Ethical Management", description: "Guided transition and performance monitoring" },
    ],
  },
};

const KIWI_ADVANTAGES = {
  id: {
    title: "Keunggulan KIWI di Mata Mitra",
    items: [
      {
        icon: BuildingOfficeIcon,
        title: "Berpengalaman Lintas Sektor",
        subtitle: "Bank, Fintech, Multifinance",
      },
      {
        icon: ShieldCheckIcon,
        title: "Kepatuhan Penuh",
        subtitle: "Terhadap OJK & AFPI",
      },
      {
        icon: ComputerDesktopIcon,
        title: "Sistem Digital Terintegrasi",
        subtitle: "Untuk tracking proses",
      },
      {
        icon: HeartIcon,
        title: "Pendekatan Humanis",
        subtitle: "Dalam pengelolaan borrower",
      },
    ],
  },

  en: {
    title: "KIWI’s Advantages for Partners",
    items: [
      {
        icon: BuildingOfficeIcon,
        title: "Cross-Sector Experience",
        subtitle: "Banking, Fintech, Multifinance",
      },
      {
        icon: ShieldCheckIcon,
        title: "Full Regulatory Compliance",
        subtitle: "Aligned with OJK & AFPI",
      },
      {
        icon: ComputerDesktopIcon,
        title: "Integrated Digital System",
        subtitle: "For process tracking",
      },
      {
        icon: HeartIcon,
        title: "Human-Centered Approach",
        subtitle: "Ethical borrower management",
      },
    ],
  },
};



const process = processCopy[lang] || processCopy.id;
const t = howItWorksCopy[lang] || howItWorksCopy.id;
const stepData = stepsCopy[lang] || stepsCopy.id;
const faqs = faqsByLang[lang] || faqsByLang.id;
const featureContent = KIWI_FEATURES[lang] || KIWI_FEATURES.id;
const advantageContent = KIWI_ADVANTAGES[lang] || KIWI_ADVANTAGES.id;

 const titleContat =
    lang === "en"
      ? "Contact Us"
      : "Hubungi Kami";
  return (
    <>
      <BannerCarousel
        images={allImages}
        title={title}
        subtitle={subtitle}
        autoplay={true}
        arrows={true}
        dots={true}
        dotPlacement="bottom"
        height="70vh"
      />
      <CardGridSection/>
      <HomeApproach/>
      <MengapaKami />
      <Container>
        <H1 className="text-center text-2xl font-bold mb-6">
          {t.title}
        </H1>

        <StepGuide steps={stepData} />

        <div className="bg-primary-50 text-primary-950 text-sm border border-primary-600 rounded-md p-4 my-4">
          <p className="font-bold">{t.noteTitle}</p>
          {t.noteText}
        </div>
      </Container>

      <FraudAlertSection />

      <section className="max-w-3xl mx-auto py-16">
        <H1 className="text-center mb-10">
          {lang === "en" ? "Frequently Asked Questions" : "FAQ Nasabah"}
        </H1>

        <FaqAccordion faqs={faqs} />
      </section>

      <HeroBanner />

      <FeatureGrid
        title={featureContent.title}
        items={featureContent.items}
        background="bg-gray-50"
      />


      <ProcessStepper
        title={process.title}
        subtitle={process.subtitle}
        steps={process.steps}
      />

      <AdvantageGrid
        title={advantageContent.title}
        items={advantageContent.items}
        background="bg-gray-50"
      />

      <PartnershipCTA />

      <div className="min-h-screen bg-[#f6f8fc] py-12 px-4">
        <H1 className="text-center">
          {titleContat}
        </H1>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="md:col-span-2">
            <ApplicantFormPage />
          </div>
        </div>
      </div>

      <HomeHighlight />
      <People />
    </>
  );
}

