'use client';

import { notable } from '@/constant/font.constant';
import { cn } from '@/lib/utils';
import React from 'react';

export default function Story() {
  return (
    <section id="story">
      <div className=" w-full bg-[#546595] text-[#D0CABA]">
        <div className=" w-full overflow-hidden pt-20">
          <h1
            className={cn(
              ' text-center text-[40px] font-extrabold',
              notable.className,
            )}
          >
            Our Story
          </h1>
          <div className=" w-full overflow-auto">
            <div className=" mt-8 flex snap-x snap-mandatory items-stretch overflow-x-scroll pb-20 pt-4">
              <div className=" flex h-max w-full max-w-[472px] flex-none snap-center items-center justify-center">
                <div className=" h-full w-[320px] snap-always rounded-b-full rounded-t-full bg-[#D0CABA] px-12 py-20 text-[#546595] ring-2 ring-[#D0CABA] ring-offset-4 ring-offset-[#546595]">
                  <h1 className={cn(notable.className, 'text-[40px]')}>2015</h1>
                  <p className=" ">
                    Takdir mempertemukan kami di SMA. Selama 3 tahun, kami
                    selalu satu kelas, membangun persahabatan di tahun pertama.
                    Suatu masalah muncul, membuat kami bermusuhan hingga lulus
                    SMA. Namun sebelum Ujian Nasional, terjadi momen berharga
                    ketika kami saling bermaafan.
                  </p>
                </div>
              </div>
              <div className=" flex w-full max-w-[472px] flex-none snap-center items-center justify-center">
                <div className=" flex h-full w-[320px] snap-always flex-col justify-center rounded-b-full rounded-t-full bg-[#D0CABA] px-12 py-20 text-[#546595] ring-2 ring-[#D0CABA] ring-offset-4 ring-offset-[#546595]">
                  <h1 className={cn(notable.className, 'text-[40px]')}>2015</h1>
                  <p className=" ">
                    Takdir mempertemukan kami di SMA. Selama 3 tahun, kami
                    selalu satu kelas, membangun persahabatan di tahun pertama.
                  </p>
                </div>
              </div>
              <div className=" flex h-full w-full max-w-[472px] flex-none snap-center items-center justify-center">
                <div className=" h-full w-[320px] snap-always rounded-b-full rounded-t-full bg-[#D0CABA] px-12 py-20 text-[#546595] ring-2 ring-[#D0CABA] ring-offset-4 ring-offset-[#546595]">
                  <h1 className={cn(notable.className, 'text-[40px]')}>2015</h1>
                  <p className=" ">
                    Takdir mempertemukan kami di SMA. Selama 3 tahun, kami
                    selalu satu kelas, membangun persahabatan di tahun pertama.
                    Suatu masalah muncul, membuat kami bermusuhan hingga lulus
                    SMA. Namun sebelum Ujian Nasional, terjadi momen berharga
                    ketika kami saling bermaafan.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
