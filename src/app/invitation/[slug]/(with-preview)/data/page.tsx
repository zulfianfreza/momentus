"use client";

import { getSidebarMenu } from "@/constant/common.constant";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function DataPage() {
  const params = useParams<{ slug: string }>();

  // sidebar menu
  const sidebarMenu = getSidebarMenu(params.slug);
  return (
    <div className=" p-5 w-full">
      <h1 className=" text-neutral-900 text-xl font-medium">Data</h1>

      <div className=" mt-4 grid grid-cols-3 gap-4 w-full">
        {sidebarMenu[2].submenu?.map((submenu) => (
          <Link
            key={submenu.path}
            href={submenu.path}
            className=" w-full h-full border rounded-xl group"
          >
            <div className="w-full p-4 flex-col justify-center items-center  group-hover:text-white aspect-[4/3] rounded-xl gap-2 flex transition-all group-hover:bg-pink-600">
              <submenu.icon variant="Outline" size={36} />
              <p className=" text-sm">{submenu.title}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
