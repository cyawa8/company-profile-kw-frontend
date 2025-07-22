import AnimatedParagraph from "./AnimatedParagraph";

const { default: ArticleDetail } = require("./ArticleDetail");
const { default: Container } = require("./Container");

export default function HomeHighlight(){
    return(
        <section className="bg-primary-950">
            <div className=" text-primary-0">
            <Container>
                <div className="text-primary-0 py-10">
                <AnimatedParagraph delay={50}>
                    <h1 className="font-semibold text-[40px] mb-3 text-primary-0">Ruang Baca KIWI</h1>
                <h2 className="font-semibold text-lg">
                   Kisah, inspirasi, dan update seru seputar perjalanan dan inovasi kami di dunia finansial. Di sini, Anda bisa menemukan cerita-cerita menarik dari pengalaman tim KIWI, berbagai tips bermanfaat, serta kabar terbaru mengenai langkah-langkah inovatif kami dalam mengelola aset dan menghadirkan solusi keuangan untuk masa depan yang lebih baik.
                </h2>
                </AnimatedParagraph>
                </div>
                <ArticleDetail />
            </Container>
            </div>
        </section>
    );
}