import { QueryClient } from "@tanstack/react-query";
import Header from "./_components/Header";
import "./globals.css";
import "@/app/_styles/globals.css";
import {Quicksand} from "next/font/google";
import { ReactQueryProviders } from "./provider";

const quicksand = Quicksand({
  subsets : ["latin"],
});

const queryClient = new QueryClient();

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
      <body className={`${quicksand.className} antialiased bg-primary-0 text-accent-950 min-h-screen`}>
        {/* <Header />
        <div className="flex-1 px-8 py-5">
        <main className="max-w-7xl mx-auto">  
          {children}
        </main>
        </div> */}

           {/* Bungkus Header + children dengan ReactQueryProviders */}
       <ReactQueryProviders>
          <Header />
          <div className="flex-1">
            <main className="max-w-7xl mx-auto">
              {children}
            </main>
          </div>
        </ReactQueryProviders>

      </body>
    </html>
  );
}
