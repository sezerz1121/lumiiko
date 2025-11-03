// app/layout.tsx
import { Geist, Geist_Mono, Poppins, Albert_Sans } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Head from "next/head";
// Google Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // includes light & bold
  variable: "--font-poppins",
  display: "swap",
});

const albertSans = Albert_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-albert-sans",
  display: "swap",
});
// ✅ Local Font (Uxum) — All weights in one declaration
const uxum = localFont({
  src: [
    {
      path: "./fonts/uxumlight.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/uxumregular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/uxumbold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-uxum",
  display: "swap",
});

const neue = localFont({
  src: [
    {
      path: "./fonts/NeueMontreal-Medium.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/NeueMontreal-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/NeueMontreal-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-neue",
  display: "swap",
});

export const metadata = {
  title: "Affordable Web Design Agency in India | Lumiiko",
  description: "Lumiiko builds fast, SEO-friendly websites for Indian small businesses and local startups. Get a modern, mobile-first site that attracts customers and grows your business — starting at ₹12,999.",
  keywords: ["web design India", "affordable website design", "small business websites", "local SEO websites", "Lumiiko web agency"],
  alternates: {
    canonical: "https://lumiiko.vercel.app/",
  },
  openGraph: {
    title: "Lumiiko | Affordable Web Design Agency for Indian Small Businesses",
    description: "Professional, mobile-first websites that help you get more local clients and grow your business.",
    url: "https://lumiiko.vercel.app/",
    siteName: "Lumiiko",
    locale: "en_IN",
    type: "website",
  },


  verification: {
    google: "m46_nK1vw7wpknu8tNeAcUb0nd_wTOgrDi14mMA-WpE",
  },
};



export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} ${uxum.variable} ${neue.variable} ${albertSans.variable}`}
 
    >
   
      <body className="antialiased">{children}</body>
    </html>
  );
}
