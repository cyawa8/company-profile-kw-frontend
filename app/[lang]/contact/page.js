"use client";

import Image from "next/image";
import { useState } from "react";
import { useContact } from "@/hooks/useContact";
import Spinner from "../../_components/Spinner";
import ContactRespondModal from "../../_components/ContactRespondModal";
import Link from "next/link";
import Button from "../../_components/Button";
import Container from "../../_components/Container";
import NoData from "../../_components/NoData";
import { useParams } from "next/navigation";
import Breadcrumbs from "@/app/_components/Breadcrumbs";
import H1 from "@/app/_components/H1";

const TEXT = {
  id: {
    title: "PT Kinerja Inovasi Wira Indonesia",
    kantor: "Kantor Pusat",
    email: "Email",
    phone: "Telepon",
    btn: "Hubungi Kami",
    nodata: "Tidak ada data kontak",
    contactUs: "Hubungi Kami",
    description: "Kami siap membantu informasi lebih lanjut atau pertanyaan tentang layanan kami.",
  },
  en: {
    title: "PT Kinerja Inovasi Wira Indonesia",
    kantor: "Head Office",
    email: "Email",
    phone: "Phone",
    btn: "Contact Us",
    nodata: "No contact data",
    contactUs: "Contact Us",
    description: "We are here to help with further information or inquiries about our services.",
  },
};

export default function ContactPage() {
  const { lang = "id" } = useParams();
  const t = TEXT[lang] || TEXT.id;
  const { data, isLoading, error } = useContact();
  const contact = Array.isArray(data) ? data[0] : data;
  const [modalOpen, setModalOpen] = useState(false);

  if (isLoading) return <Spinner />;
  if (error || !contact) return <NoData text={t.nodata} />;

  const makeWhatsappLink = (phone) => {
    let phoneStr = phone.replace(/[^0-9]/g, "");
    if (phoneStr.startsWith("0")) phoneStr = "62" + phoneStr.slice(1);
    return `https://wa.me/${phoneStr}`;
  };

  return (
    <>
      <Container>
        <Breadcrumbs />
      </Container>
      
       <div className="relative py-12 flex justify-center items-center bg-white overflow-hidden rounded-2xl mb-10">
           <div className="z-20 bg-white bg-opacity-100 p-6 rounded-lg shadow-lg max-w-xs md:max-w-sm ">
            <H1 className="flex text-3xl text-primary-950 font-bold mb-2 justify-center">{t.contactUs}</H1>
            <p className="text-gray-600 text-lg">{t.description}</p>
            
            <div className="flex justify-center">
              <Button size="large" onClick={() => setModalOpen(true)}>
                {t.btn}
              </Button>
            </div>
          </div>

          <div className="absolute inset-0 z-10 rounded-2xl overflow-hidden opacity-30 sm:relative sm:opacity-100 sm:z-10 sm:h-auto sm:w-auto scale-110 sm:scale-100 translate-x-20">
            <Image
              src="/contact.png"
              alt="Contact"
              width={480}
              height={480}
              className="object-cover"
              priority
            />
          </div>
        </div>

      <Container>
        <div className="grid gap-8 md:grid-cols-2 items-stretch">
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col h-full">
            <h3 className="text-xl font-semibold mb-4">{t.phone} {t.kantor}</h3>
            <p className="text-gray-700">
              {lang === "id"
                ? "Hubungi pusat layanan kami untuk solusi cepat. Jam operasional Senin - Minggu, 09.00 - 22.00 WIB."
                : "Contact our service center for fast resolution services. Operating hours Monday to Sunday from 09.00 – 22.00 WIB."}
            </p>
            <div className="mt-auto" />
            <div className="flex flex-wrap gap-3">
              {Array.isArray(contact.phones)
                ? contact.phones.filter(Boolean).map((phone) => (
                    <Button key={phone}>
                      <Link
                        href={makeWhatsappLink(phone)}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {phone}
                      </Link>
                    </Button>
                  ))
                : (
                  <Button>
                    <Link
                      href={makeWhatsappLink(contact.phones)}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {contact.phones}
                    </Link>
                  </Button>
                )}
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col h-full">
            <h3 className="text-xl font-semibold mb-4">{t.email} {t.kantor}</h3>

            <p className="text-gray-700">
              {lang === "id"
                ? "Atau anda juga bisa mengirimkan kita email terkait masukan atau masalah yang sedang anda alami. Kami akan meresponi email sesegera mungkin"
                : "Or you can also send us an email with your feedback or any issues you're experiencing. We'll respond to your email as soon as possible."}
            </p>

            <div className="mt-auto" />

            <div className="flex flex-wrap gap-3">
              {Array.isArray(contact.emails)
                ? contact.emails.filter(Boolean).map((email) => (
                    <Button key={email}>
                      <Link
                        href={`mailto:${email}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {email}
                      </Link>
                    </Button>
                  ))
                : (
                  <Button>
                    <Link
                      href={`mailto:${contact.emails}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {contact.emails}
                    </Link>
                  </Button>
                )}
            </div>
          </div>
        </div>
      </Container>
      <ContactRespondModal open={modalOpen} onClose={() => setModalOpen(false)} lang={lang} />
    </>
  );
}
