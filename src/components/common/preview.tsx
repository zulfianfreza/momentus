"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useCallback, useState } from "react";
import { BsLaptop } from "react-icons/bs";
import { IoPhonePortraitOutline } from "react-icons/io5";

export default function Preview() {
  const [activedFrame, setActivedFrame] = useState<"smartphone" | "laptop">(
    "smartphone"
  );

  const toggle = useCallback(() => {
    setActivedFrame((prev) => (prev === "laptop" ? "smartphone" : "laptop"));
  }, []);

  const url =
    "https://our-wedding.link/preset%26design?preset_id=635256333f250a0c88d14b56";

  return (
    <div className=" flex-1 relative pt-20 flex justify-center items-center">
      <div className=" absolute top-24 right-4 flex gap-4">
        <button onClick={toggle}>
          <IoPhonePortraitOutline
            size={24}
            className={cn({ " text-pink-600": activedFrame === "smartphone" })}
          />
        </button>
        <button onClick={toggle}>
          <BsLaptop
            size={24}
            className={cn({ " text-pink-600": activedFrame === "laptop" })}
          />
        </button>
      </div>
      {activedFrame === "laptop" ? (
        <div className=" w-[612px] aspect-[621/360] relative">
          <Image
            src="/images/macbook-pro-frame.png"
            fill
            alt="macbook-frame"
            className=" object-contain object-center"
          />
        </div>
      ) : (
        <div className=" w-[272px] aspect-[438/894] relative bg-[url(/images/mobile-frame.png)] bg-contain bg-center px-[14px] pt-[50px] pb-[50px]">
          {/* <iframe src={url} className=" w-full h-full overflow-hidden"></iframe> */}
        </div>
      )}
    </div>
  );
}
