import Carousel from "./Carousel";
import img1 from "@/public/shreeRamChandrarBanner.jpg";
import img2 from "@/public/TempleLook.jpg";
import img4 from "@/public/DeviteesOfShreeRam.jpg";
import img3 from "@/public/ShreeRamDevotee2.jpg";

export default function ImageCarousel() {
  const slides = [img1.src, img2.src, img3.src, img4.src];

  return (
    <div className="relative">
      <div className="w-full">
        <Carousel autoSlide slides={slides} />
      </div>
    </div>
  );
}
