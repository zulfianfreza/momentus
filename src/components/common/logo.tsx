'use client';

import Image from 'next/image';
import React from 'react';

export default function Logo() {
  return (
    <div className=" relative h-10 w-28">
      <Image
        src="/images/logo-purple.png"
        fill
        alt="majoola"
        className=" object-contain object-center"
      />
    </div>
  );
}
