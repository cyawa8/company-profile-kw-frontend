import AnimatedParagraph from "../_components/AnimatedParagraph";
import Breadcrumbs from "../_components/Breadcrumbs";
import Container from "../_components/Container";
import H1 from "../_components/H1";
import Service from "../_components/Service";

export const metadata = {
  title: "Services",
};


export default function page(){
    return(
      <Container>
        <Breadcrumbs/>

        <AnimatedParagraph delay={0}>
          <H1>Keahlian Kami</H1>
        </AnimatedParagraph>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-justify">
          <AnimatedParagraph delay={50}>
            <h2>
              Dari menyederhanakan proses pengelolaan aset hingga membuka peluang baru di bidang keuangan, keahlian PT KIWI selalu siap menjawab kebutuhan Anda yang terus berkembang. Dengan fokus pada inovasi dan hasil nyata, kami membantu mitra kami untuk mengelola, mengoptimalkan, dan memaksimalkan nilai aset. Kami percaya, pertumbuhan lahir dari perbaikan berkelanjutan dan keberanian menghadapi perubahan. Karena itu, kami memadukan strategi yang tepat, solusi terkini, dan semangat kolaborasi untuk mendampingi Anda menavigasi tantangan industri dengan penuh keyakinan.
            </h2>
          </AnimatedParagraph>
          <AnimatedParagraph delay={100}>
            <h2>
              Seiring tantangan dunia keuangan yang terus berubah, komitmen KIWI untuk menghadirkan solusi yang lebih cerdas dan berkelanjutan pun semakin kuat. Kami tidak hanya merespons kebutuhan Anda—kami juga mengantisipasi dan berinovasi bersama Anda, mengubah visi menjadi realita. Setiap langkah dan proyek kami dedikasikan untuk menciptakan nilai yang berarti, memberdayakan Anda untuk terus maju, mencapai lebih banyak, dan memberikan dampak positif bagi industri keuangan Indonesia.
            </h2>
          </AnimatedParagraph>
        </div>
        <Service />
      </Container>
    );
}