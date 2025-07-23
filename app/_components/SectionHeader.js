import Link from "next/link";
import AnimatedParagraph from "./AnimatedParagraph";
import H1 from "./H1";

export default function SectionHeader() {
  return (
    <div className="flex flex-col gap-2 mb-8">
  <span className="font-bold text-base">Tim Kami</span>
  
  <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between gap-2">
    <AnimatedParagraph delay={0}>
    <H1>
      Cerita <span className="text-primary-950">Rekan Kami</span>
    </H1>
    </AnimatedParagraph>

    <AnimatedParagraph delay={50}>
    <Link
      href="/about/people/story"
      className="text-primary-950 font-medium hover:underline text-lg text-right md:text-right md:ml-auto"
      >
      Lihat leboh jauh &rarr;
    </Link>
    </AnimatedParagraph>
  </div>

  <AnimatedParagraph delay={100}>

  <p className="text-lg md:text-xl text-accent-900 max-w-2xl mt-4">
    Tim KIWI terdiri dari individu-individu dengan keahlian, latar belakang, dan pengalaman yang beragam. Setiap anggota membawa cerita, ide, dan sudut pandang unik yang memperkaya perjalanan kami. Bersama, kami tumbuh dan berbagi inspirasi untuk memberikan solusi terbaik bagi dunia keuangan.
  </p>
  </AnimatedParagraph>
</div>

  );
}
