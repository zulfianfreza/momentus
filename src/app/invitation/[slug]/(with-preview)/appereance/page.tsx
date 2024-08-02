'use client';

import { getSidebarMenu } from '@/constant/common.constant';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function DataPage() {
  const params = useParams<{ slug: string }>();

  // sidebar menu
  const sidebarMenu = getSidebarMenu(params.slug);

  return (
    <div className=" w-full p-6">
      <div className=" space-y-2">
        <h1 className=" text-xl font-medium text-neutral-900">Tampilan</h1>
        <p className=" text-sm text-neutral-500">
          Pilih tema pernikahan yang akan membuat undangan Anda memukau dan
          berkesan.
        </p>
      </div>

      <div className=" mt-4 grid w-full grid-cols-3 gap-4">
        {sidebarMenu[1].submenu?.map((submenu) => (
          <div
            key={submenu.path}
            className="flex flex-col items-center gap-2"
          >
            <Link
              href={submenu.path}
              className=" flex aspect-[4/3] w-full items-center justify-center rounded-lg border p-4"
            >
              <submenu.icon
                variant="TwoTone"
                size={36}
                className=" text-primary"
              />
            </Link>
            <p className=" text-sm text-neutral-900">{submenu.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
