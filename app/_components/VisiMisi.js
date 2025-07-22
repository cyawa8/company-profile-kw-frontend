import Image from "next/image";
import H1 from "@/app/_components/H1";
import { AnimatedDiv } from "./AnimatedDiv";

export default function VisiMisi() {
  return (
    <>
      <AnimatedDiv delay={50}>
      <section className="relative flex flex-col md:flex-row-reverse items-center md:items-stretch bg-white rounded-2xl shadow-lg overflow-hidden my-6">
        <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[85%] h-12 bg-gradient-to-t from-primary-200/60 via-primary-100/0 to-transparent blur-md z-0 pointer-events-none" />
        <div className="relative flex-1 p-6 sm:p-10 flex flex-col justify-center items-end text-right z-10">
          <H1>Visi Kami</H1>
          <p className="text-gray-800 max-w-lg">
            Menjadi mitra terpercaya dalam pengelolaan dan penyelesaian aset keuangan bermasalah di Indonesia, serta mendorong pertumbuhan ekonomi melalui solusi yang inovatif dan berkelanjutan.
          </p>
        </div>
        <div className="relative w-full md:w-1/2 h-52 md:h-auto bg-gradient-to-r from-primary-100/50 to-transparent z-10">
          <Image
            src="/kiwi-visi.png"
            alt="Visi Illustration"
            fill
            className="object-contain object-left opacity-80"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            />
        </div>
      </section>
      </AnimatedDiv>

      <AnimatedDiv delay={100}>

      <section className="relative flex flex-col md:flex-row items-center md:items-stretch bg-white rounded-2xl shadow-lg overflow-hidden my-6">
        <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[85%] h-12 bg-gradient-to-t from-red-200/50 via-red-100/0 to-transparent blur-md z-0 pointer-events-none" />
        <div className="relative flex-1 p-6 sm:p-10 flex flex-col justify-center z-10">
          <H1>Misi Kami</H1>
          <ul className="list-disc pl-5 text-gray-800 space-y-2">
            <li>Memberikan solusi strategis bagi lembaga keuangan untuk mengelola dan menyelesaikan aset bermasalah secara profesional.</li>
            <li>Mengutamakan integritas, transparansi, dan akuntabilitas dalam setiap layanan.</li>
            <li>Mendorong inovasi dan adaptasi teknologi untuk mendukung efisiensi dan pertumbuhan bisnis.</li>
            <li>Berkontribusi pada pertumbuhan ekonomi nasional melalui pengelolaan aset yang bertanggung jawab.</li>
          </ul>
        </div>
        <div className="relative w-full md:w-1/2 h-52 md:h-auto bg-gradient-to-l from-primary-100/50 to-transparent z-10">
          <Image
            src="/kiwi-misi.png"
            alt="Misi Illustration"
            fill
            className="object-contain object-right opacity-80"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            />
        </div>
      </section>
    </AnimatedDiv>
    </>
  );
}
