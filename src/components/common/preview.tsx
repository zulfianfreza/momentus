"use client";

import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { BsLaptop, BsTablet } from "react-icons/bs";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { Button } from "../ui/button";
import { LuMinus, LuPlus } from "react-icons/lu";
import { DndContext, useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

export default function Preview() {
  const [activedFrame, setActivedFrame] = useState<
    "smartphone" | "tablet" | "laptop"
  >("tablet");
  const [scale, setScale] = useState<number>(100);

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

  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: "unique-id",
  });
  const style = {
    transform: CSS.Translate.toString(transform),
  };

  return (
    <div className=" flex-1 relative pt-[72px] flex-col bg-dot-black/[0.2] flex justify-center items-center overflow-hidden">
      <div className="flex flex-col absolute gap-4 top-[88px] z-[49]  left-4">
        <div className="  bg-white w-10 items-center rounded-full py-4 flex flex-col gap-4 ">
          <button onClick={() => setActivedFrame("smartphone")}>
            <IoPhonePortraitOutline
              size={20}
              className={cn({
                " text-pink-600": activedFrame === "smartphone",
              })}
            />
          </button>
          <button onClick={() => setActivedFrame("tablet")}>
            <BsTablet
              size={20}
              className={cn({ " text-pink-600": activedFrame === "tablet" })}
            />
          </button>
          <button onClick={() => setActivedFrame("laptop")}>
            <BsLaptop
              size={20}
              className={cn({ " text-pink-600": activedFrame === "laptop" })}
            />
          </button>
        </div>
        <div className=" flex items-center gap-1 flex-col  p-1 rounded-full bg-white">
          <Button
            variant="ghost"
            size="icon-sm"
            className=" rounded-full"
            onClick={() => setScale((prev) => prev - 10)}
          >
            <LuMinus />
          </Button>
          <p className=" text-xs">{scale}</p>
          <Button
            variant="ghost"
            size="icon-sm"
            className=" rounded-full"
            onClick={() => setScale((prev) => prev + 10)}
          >
            <LuPlus />
          </Button>
        </div>
      </div>
      <div style={{ scale: scale / 100 }} className=" ">
        <DndContext>
          {activedFrame === "laptop" ? (
            <div className=" w-[656px] aspect-[621/360] overflow-hidden relative bg-[url(/images/macbook-frame.png)] bg-contain bg-center bg-no-repeat px-[68px] pt-[18px] pb-[38px]">
              <iframe
                src={url}
                className=" w-[calc(100%*2.5)] h-[calc(100%*2.5)] overflow-hidden scale-[0.4] -translate-y-[30.025%] -translate-x-[30.025%] rounded-md"
                id="preview-page"
              ></iframe>
            </div>
          ) : activedFrame === "tablet" ? (
            <div
              {...attributes}
              ref={setNodeRef}
              style={
                {
                  ...style,
                  "--translate-x": `${transform?.x ?? 0}px`,
                  "--translate-y": `${transform?.y ?? 0}px`,
                } as React.CSSProperties
              }
              {...listeners}
              className=" w-[424px] aspect-[127/176] relative overflow-hidden  bg-[url(/images/ipad-frame.png)] bg-contain bg-center bg-no-repeat px-[18px] pt-[37px] pb-[35px]"
            >
              <iframe
                src={url}
                className=" w-[calc(100%*1.75)] h-[calc(100%*1.75)] -translate-y-[21.5%] overflow-hidden scale-[0.5712] -translate-x-[21.5%] rounded-xl"
                id="preview-page"
              ></iframe>
            </div>
          ) : (
            <div className=" w-[278px] aspect-[438/892] overflow-hidden bg-no-repeat relative bg-[url(/images/mobile-frame.png)] bg-contain bg-center px-[16px] pt-[50px] pb-[56px]">
              <iframe
                src={url}
                className=" w-[calc(100%*1.5)] h-[calc(100%*1.5)] overflow-hidden -translate-y-[16.667%] scale-[0.667] -translate-x-[16.667%]"
                id="preview-page"
              ></iframe>
            </div>
          )}
        </DndContext>
      </div>
    </div>
  );
}
