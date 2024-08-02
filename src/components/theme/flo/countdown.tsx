'use client';

import { Button } from '@/components/ui/button';
import { notable } from '@/constant/font.constant';
import { useCountdown } from '@/hooks/use-count-down';
import { cn } from '@/lib/utils';
import { CalendarAdd } from 'iconsax-react';
import React from 'react';

export default function Countdown() {

  
  const [days, hours, minutes, seconds] = useCountdown(
    new Date('2024-12-12T08:00:00+07:00'),
  );
  
  return (
    <section id="countdown">
      <div className=" w-full bg-[#546595] text-[#D0CABA]">
        <div className=" flex h-full w-full flex-col items-center gap-6 px-8 py-12">
          <h1 className={cn(notable.className, 'text-center text-[56px]')}>
            Save The Date
          </h1>
          <p>12 Desember 2024</p>
          <div className=" flex items-center justify-center gap-4 ">
            <div className="flex h-[88px] w-16 flex-col items-center justify-center rounded-t-full border border-[#D0CABA] text-center">
              <p className=" text-lg font-semibold">
                {days.toString().padStart(2, '0')}
              </p>
              <p className=" text-sm">Hari</p>
            </div>
            <div className="flex h-[88px] w-16 flex-col items-center justify-center rounded-t-full border border-[#D0CABA] text-center">
              <p className=" text-lg font-semibold">
                {hours.toString().padStart(2, '0')}
              </p>
              <p className=" text-sm">Jam</p>
            </div>
            <div className="flex h-[88px] w-16 flex-col items-center justify-center rounded-t-full border border-[#D0CABA] text-center">
              <p className=" text-lg font-semibold">
                {minutes.toString().padStart(2, '0')}
              </p>
              <p className=" text-sm">Menit</p>
            </div>
            <div className="flex h-[88px] w-16 flex-col items-center justify-center rounded-t-full border border-[#D0CABA] text-center">
              <p className=" text-lg font-semibold">
                {seconds.toString().padStart(2, '0')}
              </p>
              <p className=" text-sm">Detik</p>
            </div>
          </div>
          <Button
            className=" rounded-none bg-[#D0CABA] text-[#546595]"
            variant="outline"
          >
            <CalendarAdd size={20} />
            Add to Calendar
          </Button>
        </div>
      </div>
    </section>
  );
}
