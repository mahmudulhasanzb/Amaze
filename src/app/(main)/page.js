import About from "@/components/About";
import Banner from "@/components/Banner";
import WhyChoseUs from "@/components/WhyChoseUs";
import Marque from "@/components/Marque";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Banner/>
      <Marque />
      <About />
      <WhyChoseUs/>
    </>
  );
}
