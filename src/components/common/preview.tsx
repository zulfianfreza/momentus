"use client";

import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { BsLaptop, BsTablet } from "react-icons/bs";
import { IoPhonePortraitOutline } from "react-icons/io5";

export default function Preview() {
  const [activedFrame, setActivedFrame] = useState<
    "smartphone" | "tablet" | "laptop"
  >("tablet");

  const pathname = usePathname();
  const partsPathname = pathname.split("/");

  const handleActiveSection = useCallback(() => {
    const iframe = document.getElementById("preview-page") as HTMLIFrameElement;

    if (!iframe) return;

    iframe.contentWindow?.postMessage(
      {
        type: "actived-section-updated",
        activeSection: partsPathname[partsPathname.length - 1],
      },
      "*"
    );
  }, [partsPathname]);

  const url = useMemo(
    () =>
      `http://localhost:3000/demo?activeSection=${
        partsPathname[partsPathname.length - 1]
      }`,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  useEffect(() => {
    handleActiveSection();
  }, [handleActiveSection]);

  return (
    <div className=" flex-1 relative pt-20 flex justify-center items-center overflow-hidden">
      <div className=" absolute top-24 right-4 flex gap-4 z-[51]">
        <button onClick={() => setActivedFrame("smartphone")}>
          <IoPhonePortraitOutline
            size={24}
            className={cn({ " text-pink-600": activedFrame === "smartphone" })}
          />
        </button>
        <button onClick={() => setActivedFrame("tablet")}>
          <BsTablet
            size={24}
            className={cn({ " text-pink-600": activedFrame === "tablet" })}
          />
        </button>
        <button onClick={() => setActivedFrame("laptop")}>
          <BsLaptop
            size={24}
            className={cn({ " text-pink-600": activedFrame === "laptop" })}
          />
        </button>
      </div>
      {/* <div
        className={cn(
          " w-[278px] aspect-[438/892] bg-no-repeat relative bg-[url(/images/mobile-frame.png)] bg-contain bg-center px-[16px] pt-[50px] pb-[56px]",
          {
            "w-[656px] aspect-[621/360] relative bg-[url(/images/macbook-frame.png)] bg-contain bg-center bg-no-repeat px-[68px] pt-[18px] pb-[38px]":
              activedFrame === "laptop",
          },
          {
            "w-[424px] aspect-[127/176] relative bg-[url(/images/ipad-frame.png)] bg-contain bg-center bg-no-repeat px-[18px] pt-[37px] pb-[35px]":
              activedFrame === "tablet",
          }
        )}
      >
        <iframe
          src={url}
          className={cn(
            "w-[calc(100%*1.5)] h-[calc(100%*1.5)] overflow-hidden scale-[0.667] -translate-x-[16.667%]",
            {
              " w-[calc(100%*2.5)] h-[calc(100%*2.5)] overflow-hidden scale-[0.4] -translate-x-[30.025%] rounded-md":
                activedFrame === "laptop",
            },
            {
              " w-[calc(100%*1.75)] h-[calc(100%*1.75)] overflow-hidden scale-[0.5712] -translate-x-[21.5%] rounded-xl":
                activedFrame === "tablet",
            }
          )}
          id="preview-page"
        ></iframe>
      </div> */}
      {activedFrame === "laptop" ? (
        <div className=" w-[656px] aspect-[621/360] relative bg-[url(/images/macbook-frame.png)] bg-contain bg-center bg-no-repeat px-[68px] pt-[18px] pb-[38px]">
          <iframe
            src={url}
            className=" w-[calc(100%*2.5)] h-[calc(100%*2.5)] overflow-hidden scale-[0.4] -translate-x-[30.025%] rounded-md"
            id="preview-page"
          ></iframe>
        </div>
      ) : activedFrame === "tablet" ? (
        <div className=" w-[424px] aspect-[127/176] relative bg-[url(/images/ipad-frame.png)] bg-contain bg-center bg-no-repeat px-[18px] pt-[37px] pb-[35px]">
          <iframe
            src={url}
            className=" w-[calc(100%*1.75)] h-[calc(100%*1.75)] overflow-hidden scale-[0.5712] -translate-x-[21.5%] rounded-xl"
            id="preview-page"
          ></iframe>
        </div>
      ) : (
        <div className=" w-[278px] aspect-[438/892] bg-no-repeat relative bg-[url(/images/mobile-frame.png)] bg-contain bg-center px-[16px] pt-[50px] pb-[56px]">
          <iframe
            src={url}
            className=" w-[calc(100%*1.5)] h-[calc(100%*1.5)] overflow-hidden scale-[0.667] -translate-x-[16.667%]"
            id="preview-page"
          ></iframe>
        </div>
      )}
    </div>
  );
}
