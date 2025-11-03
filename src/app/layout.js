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
  title: "Lumiiko | Affordable Web Design Agency in India ",
  description: "Lumiiko builds fast, SEO-friendly websites for Indian small businesses and local startups. Get a modern, mobile-first site that attracts customers and grows your business — starting at ₹12,999.",
  keywords: ["web design India", "affordable website design", "small business websites", "local SEO websites", "Lumiiko web agency",  "Surat", "Ahmedabad", "Pune", "Mumbai", "Bangalore", "Delhi", "India",

    // 🔹 Service + Location
    "website designer in Surat",
    "website designer in Ahmedabad",
    "website designer in Pune",
    "website designer in Mumbai",
    "website designer in Bangalore",
    "website designer in Delhi",

    "website development company Surat",
    "website development company Ahmedabad",
    "website development company Pune",
    "website development company Mumbai",
    "website development company Bangalore",
    "website development company Delhi",

    "small business website builder Surat",
    "small business website builder Ahmedabad",
    "small business website builder Pune",
    "small business website builder Mumbai",
    "small business website builder Bangalore",
    "small business website builder Delhi",

    "affordable website design Surat",
    "affordable website design Ahmedabad",
    "affordable website design Pune",
    "affordable website design Mumbai",
    "affordable website design Bangalore",
    "affordable website design Delhi",

    "cheap website for shop in Surat",
    "cheap website for shop in Ahmedabad",
    "cheap website for shop in Pune",
    "cheap website for shop in Mumbai",
    "cheap website for shop in Bangalore",
    "cheap website for shop in Delhi",

    // 🔹 Problem / Need
    "how to make a website for my business India",
    "website cost for small business India",
    "do I need a website for my shop India",
    "we need website quickly for our business in India",

    // 🔹 Feature / Value
    "mobile friendly website for business India",
    "multilingual website designer India",
    "local SEO website company India",
    "fast loading website small business India",

    // 🔹 Price / Budget
    "website cost Delhi small business",
    "cheap website builder India for shop",
    "affordable website design India ₹12000",

    // 🔹 Brand
    "Lumiiko web agency",
    "Lumiiko website design",
    "Lumiiko India"
  ],
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
