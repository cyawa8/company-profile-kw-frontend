import Image from "next/image";
import Link from "next/link";

function Logo() {
  return (
    <Link href="/" className="flex items-center z-10">
     <div className="relative h-12 w-12 md:h-16 md:w-16 lg:h-20 lg:w-20">
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
