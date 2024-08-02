import Container from '@/components/common/container';
import React from 'react';
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { SearchNormal1 } from 'iconsax-react';

export default function BlogPage() {
  return (
    <>
      <Container>
        <div className=" my-10 flex w-full flex-col items-center justify-center">
          <div className=" text-center">
            <h1 className=" text-primary text-5xl font-semibold leading-relaxed">
              Momentus Blog
            </h1>
            <p className=" text-neutral-500">
              Temukan berbagai artikel, tips, dan referensi menarik seputar
              pernikahan dan undangan digital di halaman blog kami.
            </p>
            <div className=" relative mt-4 flex w-full items-center justify-between">
              <i>
                <SearchNormal1
                  size="28"
                  color="rgb(219 39 119)"
                  variant="Bulk"
                  className=" absolute right-4 top-4"
                />
              </i>
              <input
                type="text"
                placeholder="Ketik pencarian kamu di sini ..."
                className=" w-full border-b-[3px] border-b-pink-600 px-6 py-4 "
              />
            </div>
          </div>
        </div>
        <div className=" mt-20 grid w-full items-center justify-center gap-16 lg:grid-cols-2">
          <div className=" flex w-full flex-col items-center justify-between rounded-2xl shadow-lg">
            <div className=" relative aspect-video w-full rounded-2xl">
              <Image
                src="/images/dummy/gallery-6.jpg"
                alt=""
                fill
                className=" h-full w-full rounded-t-2xl"
              />
            </div>
            <div className=" flex h-44 w-full flex-col overflow-hidden px-8 py-6">
              <h1 className=" text-xl font-semibold">
                10 Tempat Prewedding Outdoor di Kota Bandung
              </h1>
              <p className=" mt-2 text-sm leading-relaxed text-slate-700">
                Bandung, dengan keindahan alamnya yang memukau dan iklimnya yang
                sejuk, menjadi pilihan sempurna bagi pasangan yang ingin
                mengabadikan momen prewedding mereka di luar ruangan. Kota ini
                menawarkan berbagai lokasi yang menawan ...
              </p>
            </div>
          </div>
          <div className=" flex w-full flex-col items-center justify-between rounded-2xl shadow-lg">
            <div className=" relative aspect-video w-full rounded-2xl">
              <Image
                src="/images/dummy/gallery-6.jpg"
                alt=""
                fill
                className=" h-full w-full rounded-t-2xl"
              />
            </div>
            <div className=" flex h-44 w-full flex-col overflow-hidden px-8 py-6">
              <h1 className=" text-xl font-semibold">
                10 Tempat Prewedding Outdoor di Kota Bandung
              </h1>
              <p className=" mt-2 text-sm leading-relaxed text-slate-700">
                Bandung, dengan keindahan alamnya yang memukau dan iklimnya yang
                sejuk, menjadi pilihan sempurna bagi pasangan yang ingin
                mengabadikan momen prewedding mereka di luar ruangan. Kota ini
                menawarkan berbagai lokasi yang menawan ...
              </p>
            </div>
          </div>
          <div className=" flex w-full flex-col items-center justify-between rounded-2xl shadow-lg">
            <div className=" relative aspect-video w-full rounded-2xl">
              <Image
                src="/images/dummy/gallery-6.jpg"
                alt=""
                fill
                className=" h-full w-full rounded-t-2xl"
              />
            </div>
            <div className=" flex h-44 w-full flex-col overflow-hidden px-8 py-6">
              <h1 className=" text-xl font-semibold">
                10 Tempat Prewedding Outdoor di Kota Bandung
              </h1>
              <p className=" mt-2 text-sm leading-relaxed text-slate-700">
                Bandung, dengan keindahan alamnya yang memukau dan iklimnya yang
                sejuk, menjadi pilihan sempurna bagi pasangan yang ingin
                mengabadikan momen prewedding mereka di luar ruangan. Kota ini
                menawarkan berbagai lokasi yang menawan ...
              </p>
            </div>
          </div>
          <div className=" flex w-full flex-col items-center justify-between rounded-2xl shadow-lg">
            <div className=" relative aspect-video w-full rounded-2xl">
              <Image
                src="/images/dummy/gallery-6.jpg"
                alt=""
                fill
                className=" h-full w-full rounded-t-2xl"
              />
            </div>
            <div className=" flex h-44 w-full flex-col overflow-hidden px-8 py-6">
              <h1 className=" text-xl font-semibold">
                10 Tempat Prewedding Outdoor di Kota Bandung
              </h1>
              <p className=" mt-2 text-sm leading-relaxed text-slate-700">
                Bandung, dengan keindahan alamnya yang memukau dan iklimnya yang
                sejuk, menjadi pilihan sempurna bagi pasangan yang ingin
                mengabadikan momen prewedding mereka di luar ruangan. Kota ini
                menawarkan berbagai lokasi yang menawan ...
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
