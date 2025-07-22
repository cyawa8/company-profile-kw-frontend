import Achievements from "@/app/_components/Achievements";
import AnimatedParagraph from "@/app/_components/AnimatedParagraph";
import Breadcrumbs from "@/app/_components/Breadcrumbs";
import Container from "@/app/_components/Container";
import H1 from "@/app/_components/H1";

export const metadata = {
  title: "About",
};

export default function Achievement(){
    return(
    <>
      <Container>
        <Breadcrumbs/>
        <AnimatedParagraph delay={0}>
        <H1>Pencapaian kami</H1>
        <h2 className="text-justify">Setiap pencapaian adalah bukti nyata dari dedikasi, kerja sama tim, dan semangat inovasi kami. Mulai dari keberhasilan menyelesaikan berbagai proyek hingga meraih kepercayaan para klien, kami bangga atas setiap langkah kemajuan yang telah diraih dan lebih bangga lagi atas dampak positif yang berhasil kami ciptakan. Setiap keberhasilan ini mendorong kami untuk terus melangkah lebih tinggi, menetapkan standar baru bagi diri kami sendiri dan bagi semua yang kami layani.</h2>
        <H1 className="text-center py-32">
          &quot;Driven by Progress, Inspired by Impact&quot;
        </H1>
        </AnimatedParagraph>

        <AnimatedParagraph delay={100}>
          <h2 className="text-justify">
            Setiap keberhasilan mencerminkan tekad dan antusiasme kami untuk terus berkembang. Bersama, setiap sukses menjadi energi baru untuk melangkah ke tahap berikutnya.
          </h2>
        </AnimatedParagraph>

      </Container>
      <Achievements />
    </>
    );
}