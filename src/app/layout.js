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
  title: "Lumiiko",
  description: "Lumiiko creates affordable, fast, and professional websites that help small businesses in India attract and convert customers."
};



export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} ${uxum.variable} ${neue.variable} ${albertSans.variable}`}
 
    >
         <Head>
        <meta
          name="google-site-verification"
          content="m46_nK1vw7wpknu8tNeAcUb0nd_wTOgrDi14mMA-WpE"
        />
      </Head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
