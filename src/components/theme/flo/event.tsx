'use client';

import { Button } from '@/components/ui/button';
import { notable } from '@/constant/font.constant';
import { cn } from '@/lib/utils';
import React from 'react';

export default function Event() {
  return (
    <section id="event">
      <div className=" w-full overflow-hidden bg-[#D0CABA] p-8">
        <div className="relative mt-6 flex flex-col">
          <p
            className={cn(
              'fred-text-stroke absolute left-1/2 top-1/2 z-[5] -translate-x-1/2 -translate-y-1/2 text-[60px] leading-none',
            )}
          >
            *
          </p>
          <div className=" absolute left-1/2 top-1/2 h-[180px] w-[538px] -translate-x-1/2 -translate-y-1/2 -rotate-[45deg] rounded-[75%] border border-[#546595]" />
          <div className=" relative z-[3] flex w-[272px] flex-col items-center justify-center gap-2 rounded-bl-[120px] rounded-tr-[120px] border border-[#546595] bg-[#D0CABA] p-6 py-16 text-center text-sm">
            <p
              className={cn(
                'fred-text-stroke absolute left-0 top-0 text-[60px] leading-none',
              )}
            >
              *
            </p>
            <h1 className={cn('text-2xl', notable.className)}>Akad Nikah</h1>
            <div className="">
              <p className="">Minggu, 12 Desember 2024</p>
              <p className="">Pukul 08:00 WIB</p>
            </div>
            <p className="">Tempat: Lapangan Voli RW 10 Perumahan Sukamaju</p>
            <Button
              size="sm"
              variant="outline"
              className=" rounded-none border-black bg-transparent"
            >
              Lihat Map
            </Button>
          </div>
          <div className="relative z-[2] -mt-8 ml-auto flex w-[272px] flex-col items-center justify-center gap-2 rounded-bl-[120px] rounded-tr-[120px] border border-[#546595] bg-[#D0CABA] p-6 py-16 text-center text-sm">
            <p
              className={cn(
                'fred-text-stroke absolute -bottom-6 right-0 text-[60px] leading-none',
              )}
            >
              *
            </p>
            <h1 className={cn('text-2xl', notable.className)}>Resepsi</h1>
            <div className="">
              <p className="">Minggu, 12 Desember 2024</p>
              <p className="">Pukul 11:00 s/d selesai</p>
            </div>
            <p className="">Tempat: Lapangan Voli RW 10 Perumahan Sukamaju</p>
            <Button
              size="sm"
              variant="outline"
              className=" rounded-none border-black bg-transparent"
            >
              Lihat Map
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
