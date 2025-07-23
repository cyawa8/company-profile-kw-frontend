"use client"
import { QueryClient } from "@tanstack/react-query";
import Header from "./_components/Header";
import { useState } from "react";
import "./globals.css";
import "@/app/_styles/globals.css";
import {Quicksand} from "next/font/google";
import { ReactQueryProviders } from "./provider";
import { ModalProvider } from "./_components/Modal";
import { Toaster } from "react-hot-toast";
import Footer from "./_components/Footer";
import Navigation from "./_components/Navigation";

const quicksand = Quicksand({
  subsets : ["latin"],
});

const queryClient = new QueryClient();

// export const metadata = {
//   title: {
//     template : "%s - Kinerja Wira Inovasi",
//     default : "Kinerja Wira Inovasi",
//   },
//   description : "Anak Perusahaan dari Pepper Global yang berfokus pada finance dan pinjam meminjam",
// };

export default function RootLayout({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <html lang="en">
     <body className={`${quicksand.className} antialiased bg-primary-0 text-accent-950 min-h-screen flex flex-col overflow-x-hidden`}>

        <ReactQueryProviders>
          <ModalProvider>
            <Header onMenuClick={() => setIsOpen(!isOpen)} isMenuOpen={isOpen} />
            <Toaster position="top-center" />
            <main className="flex-1 text-lg font-semibold">
              {children}
            </main>
            <Footer />
          </ModalProvider>
        </ReactQueryProviders>
      </body>
    </html>
  );
}