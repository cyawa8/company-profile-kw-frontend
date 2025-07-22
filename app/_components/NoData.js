import Image from "next/image";
import { AnimatedDiv } from "./AnimatedDiv";

export default function NoData() {
  return (
    <AnimatedDiv delay={100}>
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <div className="relative w-52 h-52 mb-4">
        <Image
          src="/data-empty.png"
          alt="No Data"
          fill
          className="object-contain"
          priority
          />
      </div>
      <h2 className="text-xl font-bold text-primary-950 mb-1">Data belum tersedia atau kosong</h2>
      <p className="text-base text-accent-700 text-center max-w-xs">
        Maaf, tidak ada data yang dapat ditampilkan saat ini.
      </p>
    </div>
    </AnimatedDiv>
  );
}
