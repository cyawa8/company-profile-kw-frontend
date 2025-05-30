import Link from "next/link";

export default function Navigation(){
    return(
        <ul>
            <li><Link href="/">Homepage</Link></li>
            <li><Link href="/about">Who We Are</Link></li>
            <li><Link href="/services">What We Do</Link></li>
            <li><Link href="/global">Our Connection</Link></li>
            <li><Link href="/contact">Contact</Link></li>
        </ul>
    );
}