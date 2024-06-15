'use client';

import BaseImageLightbox from '@/components/common/base-image-lightbox';
import { cn } from '@/lib/utils';
import {
  TInvitationGallery,
  TInvitationGalleryType,
} from '@/types/invitation.type';
import Image from 'next/image';
import React from 'react';
import { Autoplay, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Lightbox, { SlideImage } from 'yet-another-react-lightbox';
import Counter from 'yet-another-react-lightbox/plugins/counter';
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import { motion, Variants } from 'framer-motion';

// style
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'yet-another-react-lightbox/plugins/counter.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import 'yet-another-react-lightbox/styles.css';

type TProps = {
  type: TInvitationGalleryType;
  galleries: TInvitationGallery[];
};

const imageVariants: Variants = {
  initial: {
    opacity: 0,
    transition: {
      duration: 0.5,
    },
    translateY: '10%',
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
    translateY: '0%',
  },
};

export default function InvitationGallery({ type, galleries }: TProps) {
  const [photoActiveIndex, setPhotoActiveIndex] = React.useState(-1);
  const photos = React.useMemo<SlideImage[]>(
    () => galleries.map((item) => ({ src: item.url })),
    [galleries],
  );

  return (
    <>
      {type === 'slideshow' && (
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
                className=" relative aspect-video w-full"
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
      {type === 'grid' && (
        <div className=" grid grid-cols-12 gap-2">
          {galleries.map((image, i) => (
            <motion.div
              key={image.id}
              variants={imageVariants}
              initial="initial"
              whileInView="animate"
              className={cn(
                ' relative col-span-6 aspect-square h-full w-full cursor-pointer',
                {
                  ' col-span-4': [2, 3, 4, 7, 8, 9].includes(i),
                },
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
            </motion.div>
          ))}
        </div>
      )}
      <Lightbox
        styles={{
          container: { backgroundColor: '#000' },
          icon: { color: '#FFF', boxShadow: 'none' },
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
