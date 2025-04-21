import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "700"], // Regular and Bold weights
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "600"], // Regular and Semi-Bold weights
});

export const metadata: Metadata = {
  title: "Bagus Moehamad Abduh - Portofolio",
  description: "Bagus Moehamad Abduh - Front End Web Developer",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${poppins.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}