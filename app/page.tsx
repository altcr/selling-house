import Slider from "@/src/components/index/Slider";
import IndexCarousel from "@/src/components/index/IndexCarousel";
import FavCities from "@/src/components/index/FavCities";
import ContactUs from "@/src/components/index/ContactUs";
import Partners from "@/src/components/index/Partners";

export default function Home() {
  return (
    <main>
      <Slider />
      <IndexCarousel />
      <FavCities />
      <ContactUs />
      <Partners />
    </main>
  );
}
