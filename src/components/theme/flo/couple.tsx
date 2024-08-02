'use client';

import { notable } from '@/constant/font.constant';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import React from 'react';
import { SiInstagram } from 'react-icons/si';

export default function Couple() {
  return (
    <section id="couple">
      <div className=" flex w-full flex-col gap-10 overflow-hidden p-8 py-20">
        <div className="relative flex flex-col">
          <h1
            className={cn(
              notable.className,
              'fred-text-stroke absolute -left-[184px] top-40 z-[3]  -rotate-90 text-[48px]',
            )}
          >
            The Groom
          </h1>
          <h1
            className={cn(
              notable.className,
              ' absolute -left-[168px] top-[180px] z-[2] -rotate-90  text-[48px] opacity-[.35]',
            )}
          >
            The Groom
          </h1>
          <div className="flex gap-4">
            <div
              className=" relative h-[373px] w-[204px] overflow-hidden"
              style={{
                maskImage: 'url(/images/decoration/decoration-mask-3.png)',
                maskSize: '100%',
                maskRepeat: 'no-repeat',
              }}
            >
              <Image
                src="/images/dummy/dummy-11.jpeg"
                fill
                alt="bride"
                className=" object-cover object-center"
              />
            </div>
            <div className="flex flex-1 flex-col items-start gap-6">
              <h1 className={cn('text-[48px] leading-none')}>Declan Hornet</h1>
              <div className=" text-sm">
                <p className="">Daughter of Charlie Hornet and Betty Hornet</p>
              </div>
              <div className=" relative -rotate-90">
                <div className="absolute right-0 flex items-center gap-1">
                  <SiInstagram />
                  <p className=" leading-none">hornetdeclan</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative flex flex-col">
          <h1
            className={cn(
              notable.className,
              'fred-text-stroke absolute -right-[168px] top-40 z-[3]  rotate-90 text-[48px]',
            )}
          >
            The Bride
          </h1>
          <h1
            className={cn(
              notable.className,
              ' absolute -right-[152px] top-[180px] z-[2] rotate-90  text-[48px] opacity-[.35]',
            )}
          >
            The Bride
          </h1>
          <div className="flex flex-row-reverse gap-4">
            <div
              className=" relative h-[373px] w-[204px] scale-x-[-1] overflow-hidden"
              style={{
                maskImage: 'url(/images/decoration/decoration-mask-3.png)',
                maskSize: '100%',
                maskRepeat: 'no-repeat',
              }}
            >
              <Image
                src="/images/dummy/dummy-12.jpeg"
                fill
                alt="bride"
                className=" object-cover object-center"
              />
            </div>
            <div className="flex flex-1 flex-col items-end gap-6 text-end">
              <h1 className={cn('text-[48px] leading-none')}>Aideen Danes</h1>
              <div className=" text-sm">
                <p className="">Daughter of Charlie Hornet and Betty Hornet</p>
              </div>
              <div className=" relative rotate-90">
                <div className="absolute left-0 flex items-center gap-1">
                  <SiInstagram />
                  <p className="">hornetdeclan</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
