import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./component/home/Navbar";
import Footer from "./component/home/Footer";
import { FitLogProvider } from "./context/Workout";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "FitLog",
  description: "Workout Library - Train with intent. Log every set.",
};
export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
        data-theme="dark"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
    <FitLogProvider>
      <Navbar></Navbar>
      {children}
      
      <Footer></Footer>
          
      </FitLogProvider>
<Toaster position="top-right" />
      </body>
    </html>
  );
}
