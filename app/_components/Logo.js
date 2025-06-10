import Image from "next/image";
import Link from "next/link";

function Logo() {
  return (
    <Link href="/" className="flex justify-center items-center gap-4 z-10">
      <Image src="/logo.png" height="200" width="200" alt="Kinerja Wira Inovasi logo" />
    </Link>
  );
}

export default Logo;
