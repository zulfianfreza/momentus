"use client";

import { getSidebarMenu } from "@/constant/common.constant";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function VisitorPage() {
  const params = useParams<{ slug: string }>();

  // sidebar menu
  const sidebarMenu = getSidebarMenu(params.slug);
  return (
    <div className=" p-5 w-full">
      <h1 className=" text-neutral-900 text-xl font-medium">Tamu</h1>

      <div className=" mt-4 grid grid-cols-5 gap-4 w-full">
        {sidebarMenu[3].submenu?.map((submenu) => (
          <div key={submenu.path} className="flex flex-col items-center gap-2">
            <Link
              href={submenu.path}
              className=" w-full p-4 justify-center items-center aspect-[4/3] border rounded-lg flex"
            >
              <submenu.icon
                variant="TwoTone"
                size={36}
                className=" text-pink-600"
              />
            </Link>
            <p className=" text-sm text-neutral-900">{submenu.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
