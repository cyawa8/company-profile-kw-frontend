import Header from "./_components/Header";
import Logo from "./_components/Logo";
import { ModalProvider } from "./_components/Modal";
import SideNavigation from "./_components/SideNavigation";
import "./globals.css";
import "@/app/_styles/globals.css";
import {Quicksand} from "next/font/google";
import ToasterClient from "./_components/ToasterClient";
import { QueryClient } from '@tanstack/react-query';
import ReactQueryProvider from "./providers/ReactQueryProvider";

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
      <body className={`${quicksand.className} antialiased bg-primary-0 text-accent-950 grid grid-cols-[15rem_1fr] grid-rows-[auto_1fr] h-screen`}>
       
        <ToasterClient />
        <div className="bg-primary-0 px-6 py-8 border-r border-grey-100 row-span-full flex flex-col gap-8">
          <Logo/>
          <SideNavigation />
        </div>
        <Header />
        <main className="bg-accent-50 pt-[4rem] pb-[4rem] px-[4.8rem] overflow-scroll">
          <div className="max-w-[120rem] m-auto">

            <ModalProvider>
             <ReactQueryProvider>
              {children}
             </ReactQueryProvider>
            </ModalProvider>
          </div>
        </main>
      
      </body>
    </html>
  );
}
