import Link from "next/link";

export default function Navigation(){
    
    return(
        <nav className="z-10 text-xl">
            <ul className="flex gap-16 items-center">
                <li><Link href="/" className="hover:text-accent-400 transition-colors">Homepage</Link></li>
                <li><Link href="/about" className="hover:text-accent-400 transition-colors">Who We Are</Link></li>
                <li><Link href="/services" className="hover:text-accent-400 transition-colors">What We Do</Link></li>
                <li><Link href="/global" className="hover:text-accent-400 transition-colors">Our Connection</Link></li>
                <li><Link href="/contact" className="hover:text-accent-400 transition-colors">Contact</Link></li>
            </ul>
        </nav>
    );
}