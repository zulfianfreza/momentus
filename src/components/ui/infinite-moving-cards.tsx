"use client";

import { cn } from "@/lib/utils";
import { Icon } from "iconsax-react";
import React, { useEffect, useState } from "react";
import Image from "next/image";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    tesimonial_image: string;
    icon_quotation: Icon;
    testimonial_name: string;
    testimonial: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20  max-w-7xl overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          " flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, i) => (
          <li
            key={i}
            className=" flex-shrink-0 rounded-2xl border max-w-lg shadow-lg"
          >
            <div className=" flex h-72 justify-between gap-x-4 bg-[url('/images/logo-10-opacity.png')] bg-cover">
              <div className=" h-full aspect-[3/4] ">
                <Image
                  src={item.tesimonial_image}
                  width={1280}
                  height={720}
                  alt=""
                  className=" w-full h-full rounded-l-2xl object-cover"
                />
              </div>
              <div className=" flex-1 flex flex-col w-full p-4">
                <item.icon_quotation
                  size="56"
                  variant="Bulk"
                  className=" text-pink-600"
                />
                <h1 className=" text-pink-600 mt-2 font-semibold">
                  {item.testimonial_name}
                </h1>
                <p className=" text-neutral-900 text-sm mt-1">
                  {item.testimonial}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
