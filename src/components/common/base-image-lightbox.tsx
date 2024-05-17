import Image from "next/image";
import { SlideImage } from "yet-another-react-lightbox";

export default function BaseImageLightbox({ slide }: { slide: SlideImage }) {
  return (
    <div className=" relative h-full w-full p-5">
      <Image
        alt=""
        src={slide.src}
        draggable={false}
        fill
        className=" object-contain"
        onContextMenu={(e) => e.preventDefault()}
      />
    </div>
  );
}
