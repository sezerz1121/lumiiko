import Image from "next/image";
import Navbar from "./component/Navbar";
import HeroSection from "./component/HeroSection";
import About from "./component/About";

export default function Home() {
  return (
    <>
      <Navbar/>
      <HeroSection/>
      <About/>
    </>
  );
}
