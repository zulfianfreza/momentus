import { cn } from "@/lib/utils";
import { ArrowDown, ArrowDown3, ArrowUp, ArrowUp3 } from "iconsax-react";
import { RiDraggable } from "react-icons/ri";

export default function OrderPage() {
  return (
    <div className=" p-5 w-full">
      <h1 className=" text-neutral-900 text-xl font-medium">Urutan</h1>

      <div className=" mt-4 flex flex-col gap-2">
        {[
          "Quotes",
          "Couple",
          "Stories",
          "Gallery",
          "Wedding Detail",
          "Closing",
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-2">
            <ArrowUp
              className={cn(" hover:text-pink-600", {
                invisible: i === 0,
              })}
            />
            <div className=" h-14 w-full px-4 rounded-lg border shadow-sm flex justify-between items-center">
              <p className=" text-sm text-neutral-900">{item}</p>
              <button className=" cursor-grab">
                <RiDraggable />
              </button>
            </div>
            <ArrowDown className={cn({ invisible: i === 5 })} />
          </div>
        ))}
      </div>
    </div>
  );
}
