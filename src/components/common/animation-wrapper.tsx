'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { createFlowerVariant } from '@/utils/animation';
import Image from 'next/image';
import { cn } from '@/lib/utils';

type TProps = {
  wrapperClassName?: string;
  motionClassName?: string;
  imageClassName?: string;
  imageSrc: string;
  variant?: number[];
};

export default function AnimationWrapper({
  wrapperClassName,
  motionClassName,
  imageClassName,
  imageSrc,
  variant,
}: TProps) {
  return (
    <div className={cn('  absolute', wrapperClassName)}>
      <motion.div
        variants={
          variant &&
          createFlowerVariant({
            initial: variant[0],
            to: variant[1],
            duration: variant[2],
          })
        }
        animate="animate"
        className={cn(' relative', motionClassName)}
      >
        <Image
          src={imageSrc}
          fill
          alt=""
          className={cn('object-contain object-center', imageClassName)}
        />
      </motion.div>
    </div>
  );
}
