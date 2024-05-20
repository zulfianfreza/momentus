"use client";

import BaseImageLightbox from "@/components/common/base-image-lightbox";
import {
  TInvitationGallery,
  TInvitationGalleryType,
} from "@/types/invitation.type";
import Image from "next/image";
import React from "react";
import { Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Lightbox, { SlideImage } from "yet-another-react-lightbox";
import Counter from "yet-another-react-lightbox/plugins/counter";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/styles.css";
import "swiper/css";
import "swiper/css/effect-fade";
import "yet-another-react-lightbox/plugins/counter.css";
import { cn } from "@/lib/utils";

type TProps = {
  type: TInvitationGalleryType;
  galleries: TInvitationGallery[];
};

export default function InvitationGallery({ type, galleries }: TProps) {
  const [photoActiveIndex, setPhotoActiveIndex] = React.useState(-1);
  const photos = React.useMemo<SlideImage[]>(
    () => galleries.map((item) => ({ src: item.url })),
    [galleries]
  );

  return (
    <>
      {type === "slideshow" && (
        <div className=" w-full">
          <Swiper
            spaceBetween={24}
            effect="fade"
            loop
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            modules={[EffectFade, Autoplay]}
          >
            {galleries.map((image, i) => (
              <SwiperSlide
                key={i}
                className=" w-full aspect-video relative"
                onClick={() => {
                  setPhotoActiveIndex(i);
                }}
              >
                <Image
                  src={image.url}
                  fill
                  alt=""
                  className=" object-cover object-center"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
      {type === "grid" && (
        <div className=" grid grid-cols-3 gap-2">
          {galleries.map((image, i) => (
            <div
              key={image.id}
              className={cn(
                " w-full h-full aspect-square relative cursor-pointer",
                {
                  "row-span-2 aspect-[1/2]": i % 3 === 0,
                }
              )}
            >
              <Image
                src={image.url}
                alt=""
                fill
                className=" object-cover object-center"
                onClick={() => {
                  setPhotoActiveIndex(i);
                }}
              />
            </div>
          ))}
        </div>
      )}
      <Lightbox
        styles={{
          container: { backgroundColor: "#000" },
          icon: { color: "#FFF", boxShadow: "none" },
        }}
        index={photoActiveIndex}
        slides={photos}
        plugins={[Thumbnails, Counter, Slideshow, Zoom]}
        counter={{ container: { style: { top: 0 } } }}
        open={photoActiveIndex >= 0}
        close={() => setPhotoActiveIndex(-1)}
        render={{ slide: BaseImageLightbox }}
      />
    </>
  );
}
