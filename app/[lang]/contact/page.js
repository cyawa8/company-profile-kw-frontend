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

const TEXT = {
  id: {
    title: "PT Kinerja Inovasi Wira Indonesia",
    kantor: "Kantor Pusat",
    email: "Email:",
    phone: "Telepon:",
    btn: "Hubungi Kami",
    nodata: "Tidak ada data kontak",
  },
  en: {
    title: "PT Kinerja Inovasi Wira Indonesia",
    kantor: "Head Office",
    email: "Email:",
    phone: "Phone:",
    btn: "Contact Us",
    nodata: "No contact data",
  }
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
        <div className="min-h-[70vh] flex flex-col-reverse md:flex-row items-center justify-center gap-10 py-12 relative overflow-hidden bg-white">
          <div className="flex-1 flex flex-col items-start z-10">
            <h1 className="text-3xl font-bold mb-2">{t.title}</h1>
            <div className="mb-2 text-lg text-primary-700 font-semibold">
              {t.kantor}
            </div>
            <p className="text-gray-600 mb-4 leading-relaxed whitespace-pre-line">
              {contact.address}
            </p>
            <div className="mb-2 text-gray-800">
              <span className="block font-medium">{t.email}</span>
              <span className="font-medium">
                {Array.isArray(contact.emails)
                  ? contact.emails.filter(Boolean).map((email, idx) => (
                      <Link
                        href={`mailto:${email}`}
                        key={email}
                        className="text-primary-700 hover:text-primary-900"
                      >
                        {email}
                        {idx < contact.emails.length - 1 && ", "}
                      </Link>
                    ))
                  : (
                    <Link
                      href={`mailto:${contact.emails}`}
                      className="ml-2 underline text-primary-700 hover:text-primary-900"
                    >
                      {contact.emails}
                    </Link>
                  )}
              </span>
            </div>
            <div className="mb-6 text-gray-800">
              <span className="block font-medium">{t.phone}</span>
              <span className="font-medium">
                {Array.isArray(contact.phones)
                  ? contact.phones.filter(Boolean).map((phone, idx) => (
                      <a
                        key={phone}
                        href={makeWhatsappLink(phone)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-700 hover:text-primary-900"
                      >
                        {phone}
                        {idx < contact.phones.length - 1 && ", "}
                      </a>
                    ))
                  : (
                    <a
                      href={makeWhatsappLink(contact.phones)}
                      className="ml-2 underline text-primary-700"
                    >
                      {contact.phones}
                    </a>
                  )}
              </span>
            </div>
            <Button
              size="large"
              onClick={() => setModalOpen(true)}
            >
              {t.btn}
            </Button>
          </div>
          <div className="flex-1 relative flex justify-center items-center w-full">
            <div className="absolute right-12 top-1/2 -translate-y-1/2 w-[340px] h-[340px] md:w-[420px] md:h-[420px] rounded-full bg-primary-50 z-0"></div>
            <Image
              src="/contact.png"
              alt="Our Office"
              width={400}
              height={400}
              className="rounded-2xl object-cover relative z-10"
            />
          </div>
        </div>
      </Container>
      <ContactRespondModal open={modalOpen} onClose={() => setModalOpen(false)} lang={lang} />
    </>
  );
}
