'use client';

import { getSidebarMenu } from '@/constant/common.constant';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function DataPage() {
  const params = useParams<{ slug: string }>();

  // sidebar menu
  const sidebarMenu = getSidebarMenu(params.slug);
  return (
    <div className=" w-full p-5">
      <h1 className=" text-xl font-medium text-neutral-900">Data</h1>

      <div className=" mt-4 grid w-full grid-cols-3 gap-4">
        {sidebarMenu[2].submenu?.map((submenu) => (
          <Link
            key={submenu.path}
            href={submenu.path}
            className=" group h-full w-full rounded-xl border"
          >
            <div className="flex  w-full flex-col items-center  justify-center gap-2 rounded-xl p-4 py-6 transition-all group-hover:bg-neutral-100">
              <submenu.icon
                variant="Outline"
                size={36}
              />
              <p className=" text-sm">{submenu.title}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
