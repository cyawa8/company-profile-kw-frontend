import Image from "next/image";
import Button from "./Button";
import Link from "next/link";

export default function PeopleCard({ name, title, location, image, quote }) {
  return (
    <div className="flex flex-col md:flex-row items-start gap-6 bg-white rounded-2xl shadow p-6 md:p-10 mb-8">
        <div className="flex-shrink-0 rounded-2xl overflow-hidden w-full max-w-[320px] h-[320px] md:w-[240px] md:h-[240px]">
            <Image
            src={`https://api.kiwi.co.id/storage/${image}`}
            alt={name}
            width={320}
            height={320}
            className="object-cover w-full h-full"
            />
        </div>
        <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-bold">{name}</h2>
            <div className="mt-2 mb-4">
            <div className="text-red-500 font-semibold">{title}</div>
            </div>
            <blockquote className="text-xl md:text-2xl font-medium text-accent-900 leading-relaxed">“{quote}”</blockquote>
        <div>
            <Link href={`/about/people/${encodeURIComponent(name)}`}>
            <Button
                variation="primary"
                >
                Lihat Profil {name}
            </Button>
            </Link>
        </div>
        </div>
    </div>
  );
}