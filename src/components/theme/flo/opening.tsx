'use client';

import { notable, otomanopeeOne } from '@/constant/font.constant';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import React from 'react';

export default function Opening() {
  return (
    <section id="opening">
      <div className=" min-h-screen w-full">
        <div className=" flex min-h-screen w-full flex-col items-center bg-[url(/images/bg/bg-texture-1.jpeg)] bg-cover bg-center px-6 py-20">
          <p className=" text-sm leading-none">The Wedding of</p>
          <div className=" -mt-2 flex w-full flex-col items-center">
            <svg
              viewBox="0 0 500 500"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Define the pattern with an image */}
              <defs>
                <pattern
                  id="imgPattern"
                  patternUnits="userSpaceOnUse"
                  width={500}
                  height={500}
                >
                  <image
                    href="/images/dummy/dummy-2.jpeg"
                    x={0}
                    y={0}
                    width={500}
                    height={500}
                  />
                </pattern>
                <path
                  id="test"
                  d="M 90,481 L 90,230.5 A 153,153 0 0 1 416,230.5 L 416,481 L 10,481 Z"
                />
              </defs>
              {/* Draw the combined shape and fill it with the pattern */}
              <path
                d="M 100,230.5 A 153,153 0 0 1 406,230.5 L 406,481 L 100,481 Z"
                fill="url(#imgPattern)"
                stroke=""
              />
              {/* Add the text following the path */}
              <text
                fill="#546595"
                className={cn(notable.className, 'text-[40px]')}
              >
                <textPath
                  href="#test"
                  startOffset="33.5%"
                  textAnchor="middle"
                  // className={cn(notable.className, 'text-[#546595]')}
                >
                  WIRAATMAJA & PANDUWINATA
                </textPath>
              </text>
            </svg>
            <div className=" relative w-full ">
              <Image
                src="/images/decoration/decoration-6.png"
                height={40}
                width={40}
                alt=""
                className=" absolute -top-4 left-20"
              />
              <h1
                className={cn(
                  otomanopeeOne,
                  ' fred-text-stroke stroke-black text-center text-[20px] uppercase',
                )}
              >
                Selasa <br /> 10 Oktober 2024
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
