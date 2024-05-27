"use client";

import { getSidebarMenu } from "@/constant/common.constant";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function DataPage() {
  const params = useParams<{ slug: string }>();

  // sidebar menu
  const sidebarMenu = getSidebarMenu(params.slug);

  return (
    <div className=" p-6 w-full">
      <div className=" space-y-2">
        <h1 className=" text-neutral-900 text-xl font-medium">Tampilan</h1>
        <p className=" text-sm text-neutral-500">
          Pilih tema pernikahan yang akan membuat undangan Anda memukau dan
          berkesan.
        </p>
      </div>

      <div className=" mt-4 grid grid-cols-3 gap-4 w-full">
        {sidebarMenu[1].submenu?.map((submenu) => (
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
