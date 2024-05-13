import { SIDEBAR_MENU } from "@/constant/common.constant";

export default function DataPage() {
  return (
    <div className=" p-5 w-full">
      <h1 className=" text-neutral-900 text-xl font-medium">Quote</h1>

      <div className=" mt-4 grid grid-cols-3 gap-4 w-full">
        {SIDEBAR_MENU[2].submenu?.map((submenu) => (
          <div key={submenu.path} className="flex flex-col items-center gap-2">
            <div className=" w-full p-4 justify-center items-center aspect-[4/3] border rounded-lg flex">
              <submenu.icon
                variant="TwoTone"
                size={36}
                className=" text-pink-600"
              />
            </div>
            <p className=" text-sm text-neutral-900">{submenu.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
