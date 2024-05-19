import { SIDEBAR_MENU } from "@/constant/common.constant";
import Link from "next/link";

export default function DataPage() {
  return (
    <div className=" p-5 w-full">
      <h1 className=" text-neutral-900 text-xl font-medium">Data</h1>

      <div className=" mt-4 grid grid-cols-3 gap-4 w-full">
        {SIDEBAR_MENU[2].submenu?.map((submenu) => (
          <div key={submenu.path} className="flex flex-col items-center gap-2">
            <Link
              href={submenu.path}
              className=" w-full p-4 justify-center items-center aspect-[4/3] border rounded-lg flex hover:border-pink-600"
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
