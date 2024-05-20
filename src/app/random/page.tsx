import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import React from "react";

export default function RandomPage() {
  return (
    <div className=" w-full aspect-video bg-white flex overflow-hidden">
      <div className=" flex-1 w-full h-full border-r flex flex-col items-center justify-center">
        <div className="flex flex-col gap-4 items-center">
          <div className=" h-16 w-40 bg-neutral-100 rounded-lg"></div>
          <div className=" h-16 w-16 bg-neutral-100 rounded-lg"></div>
          <div className=" h-16 w-40 bg-neutral-100 rounded-lg"></div>
        </div>
      </div>
      <div className=" w-[536px] h-full py-16 px-8">
        <div className=" h-10 rounded-lg w-60 bg-neutral-100 mx-auto"></div>
        <div className=" h-4 mt-4 rounded-lg w-[80%] bg-neutral-100 mx-auto"></div>
        <div className=" h-4 mt-2 rounded-lg w-[60%] bg-neutral-100 mx-auto"></div>
        <Skeleton className=" mt-8 w-full aspect-video"></Skeleton>
        <div className=" mt-4 grid grid-cols-3 gap-4">
          <div className=" w-full aspect-video bg-neutral-100"></div>
          <div className=" w-full aspect-video bg-neutral-100"></div>
          <div className=" w-full aspect-video bg-neutral-100"></div>
        </div>
      </div>
    </div>
  );
  return (
    <div className=" w-full aspect-video bg-white flex overflow-hidden">
      <div className=" flex-1 w-full h-full border-r flex justify-center items-center">
        <div className="flex flex-col gap-4 items-center">
          <div className=" h-16 w-40 bg-neutral-100 rounded-lg"></div>
          <div className=" h-16 w-16 bg-neutral-100 rounded-lg"></div>
          <div className=" h-16 w-40 bg-neutral-100 rounded-lg"></div>
        </div>
      </div>
      <div className=" w-[536px] h-full py-16 px-8">
        <div className=" h-10 rounded-lg w-60 bg-neutral-100 mx-auto"></div>
        <div className=" h-4 mt-4 rounded-lg w-[80%] bg-neutral-100 mx-auto"></div>
        <div className=" h-4 mt-2 rounded-lg w-[60%] bg-neutral-100 mx-auto"></div>
        <div className=" mt-8 grid grid-cols-3 gap-4">
          {[...Array(9)].map((_, i) => (
            <div
              key={i}
              className={cn(
                " w-full h-full aspect-square bg-neutral-100 rounded-lg",
                { "row-span-2": i % 3 === 0 }
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
