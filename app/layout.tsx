import type { Metadata } from "next";
import { DM_Mono, DM_Sans, Manrope } from "next/font/google";
import "./globals.css";
import "./portfolio-redesign.css";
import AppShell from "@/components/layout/AppShell";
import AppProviders from "@/components/providers/AppProviders";
import { profile } from "@/lib/data/profile";
const manrope=Manrope({subsets:["latin"],variable:"--font-manrope",display:"swap"});
const dmSans=DM_Sans({subsets:["latin"],variable:"--font-dm-sans",display:"swap"});
const dmMono=DM_Mono({weight:["400","500"],subsets:["latin"],variable:"--font-dm-mono",display:"swap"});
export const metadata:Metadata={title:`${profile.name} — Data, Engineering & Applied AI`,description:"Atimanas Baral — building useful systems with data, software and applied AI.",metadataBase:new URL("https://atimanas-portfolio.vercel.app"),openGraph:{title:`${profile.name} — Curiosity, put to work.`,description:"Data, engineering and applied AI.",type:"website"}};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="en" className={`${manrope.variable} ${dmSans.variable} ${dmMono.variable} dark h-full antialiased`} suppressHydrationWarning><body className="min-h-full flex flex-col"><AppProviders><AppShell>{children}</AppShell></AppProviders></body></html>}