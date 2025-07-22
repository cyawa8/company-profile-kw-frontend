"use client"

import Container from "@/app//_components/Container";
import H1 from "@/app//_components/H1";
import AboutPeople from "@/app/_components/AboutPeople";
import { AnimatedDiv } from "@/app/_components/AnimatedDiv";
import Breadcrumbs from "@/app/_components/Breadcrumbs";
import PeopleTabSelector from "@/app/_components/TabSelector";

export default function People(){
    return(
      <Container>
        <Breadcrumbs/>
        <PeopleTabSelector />
          <AnimatedDiv delay={0}>
            <H1>Pemangku Kepentingan</H1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <h2> Di sini, kami percaya bahwa setiap orang punya peran penting—bukan soal siapa di atas atau di bawah. Bagi kami, kepemimpinan bukan sekadar jabatan, tapi tentang memberi contoh, punya visi jelas, dan menciptakan lingkungan kerja yang saling mendukung supaya semua bisa berkembang. </h2>
              <h2> Para pemimpin kami hadir bukan hanya untuk mengarahkan, tapi juga untuk terlibat langsung, mencari solusi bersama, dan memberikan dampak nyata di setiap tantangan. Semangat “bisa” dan kolaborasi selalu jadi pegangan kami dalam menghadapi perubahan dan peluang. </h2>
            </div>
          </AnimatedDiv> 
        <AboutPeople />
      </Container>
    );
}