import Image from "next/image";
import Slider from "@/src/components/Slider";
import IndexCarousel from "@/src/components/IndexCarousel";

export default function Home() {
  return (
    <main>
      <Slider />
      <IndexCarousel />
    </main>
  );
}
