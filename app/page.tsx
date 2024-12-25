import Image from "next/image";
import Slider from "@/src/components/index/Slider";
import IndexCarousel from "@/src/components/index/IndexCarousel";
import FavCities from "@/src/components/index/FavCities";
import ContactUs from "@/src/components/index/ContactUs";

export default function Home() {
  return (
    <main>
      <Slider />
      <IndexCarousel />
      <FavCities />
      <ContactUs />
    </main>
  );
}
