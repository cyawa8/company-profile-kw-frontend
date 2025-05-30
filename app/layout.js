import Logo from "./_components/Logo";
import Navigation from "./_components/Navigation";
import "./globals.css";
import "@/app/_styles/globals.css";
import {Quicksand} from "next/font/google";

const quicksand = Quicksand({
  subsets : ["latin"],
});

export const metadata = {
  title: {
    template : "%s - Kinerja Wira Inovasi",
    default : "Kinerja Wira Inovasi",
  },
  description : "Anak Perusahaan dari Pepper Global yang berfokus pada finance dan pinjam meminjam",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${quicksand.className} bg-primary-0 text-accent-950 min-h-screen`}>
        <header>
          <Logo />
          <Navigation />
        </header>
        <main>  
          {children}
        </main>
      </body>
    </html>
  );
}
