import Image from "next/image";
import Link from "next/link";

function Logo() {
  return (
    <Link href="/" className="flex items-center">
     <div className="relative h-[73px] w-[73px] md:h-[89px] md:w-[89px] lg:h-[105px] lg:w-[105px]">
        <Image
          src="/logo.png"
          alt="Kinerja Wira Inovasi logo"
          fill
          className="object-contain"
          priority
        />
      </div>
    </Link>
  );
}

export default Logo;
