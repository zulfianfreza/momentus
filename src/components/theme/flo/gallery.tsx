'use client';

import { notable } from '@/constant/font.constant';
import { cn } from '@/lib/utils';
import React from 'react';
import InvitationGallery from '../shared/invitation-gallery';
import { INVITATION_GALLERIES_FAKER } from '@/constant/invitation-faker.constant';

export default function Gallery() {
  return (
    <section id="gallery">
      <div className=" w-full px-[30px] py-20 ">
        <div className="flex flex-col gap-2 text-center">
          <h1 className={cn(' text-[40px] leading-tight', notable.className)}>
            Moment yang Berbahagia
          </h1>
          <p className=" text-sm">
            Menciptakan kenangan adalah hadiah yang tak ternilai harganya.
            Kenangan akan bertahan seumur hidup; benda-benda hanya dalam waktu
            singkat.
          </p>
        </div>
        <div className=" mt-8">
          <InvitationGallery
            type="grid"
            galleries={INVITATION_GALLERIES_FAKER}
          />
        </div>
      </div>
    </section>
  );
}
