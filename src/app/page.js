import Image from "next/image";
import Navbar from "./component/Navbar";
import HeroSection from "./component/HeroSection";
import About from "./component/About";
import About2 from "./component/About2";
import Ourwork from "./component/Ourwork";
import WhyBuisnessTrustUs from "./component/WhyBuisnessTrustUs";
import Pricing from "./component/Pricing";

export default function Home() {
  return (
    <>
      <Navbar/>
      <HeroSection/>
      <About/>
      <About2/>
      <Ourwork/>
      <WhyBuisnessTrustUs/>
      <Pricing/>
    </>
  );
}
