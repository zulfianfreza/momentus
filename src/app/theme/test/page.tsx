import { notable } from '@/constant/font.constant';
import { cn } from '@/lib/utils';
import React from 'react';

export default function page() {
  return (
    <div>
      <div className=" flex min-h-screen w-full items-center justify-center">
        <div className=" w-[452px]">
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
                THE WEDDING OF ADO DAN DIAN
              </textPath>
            </text>
          </svg>
        </div>
      </div>
    </div>
  );
}
