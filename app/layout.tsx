import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = { title: "Tvoja Firma | Građevinske usluge", description: "Pouzdani građevinski radovi, asfaltiranje i renoviranje u Beogradu." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="sr"><body><Header /><main className="min-h-screen pt-[70px]">{children}</main><Footer /></body></html>; }
