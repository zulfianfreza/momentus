import Container from "@/components/common/container";
import React from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { SearchNormal1 } from "iconsax-react";

export default function BlogPage() {
  return (
    <>
      <Container>
        <div className=" flex flex-col w-full items-center justify-center my-10">
          <div className=" text-center">
            <h1 className=" text-5xl font-semibold leading-relaxed text-pink-600">
              Momentus Blog
            </h1>
            <p className=" text-neutral-500">
              Temukan berbagai artikel, tips, dan referensi menarik seputar
              pernikahan dan undangan digital di halaman blog kami.
            </p>
            <div className=" flex w-full items-center justify-between mt-4 relative">
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
                className=" w-full py-4 px-6 border-b-pink-600 border-b-[3px] "
              />
            </div>
          </div>
        </div>
        <div className=" grid lg:grid-cols-2 w-full items-center justify-center gap-16 mt-20">
          <div className=" flex flex-col w-full items-center justify-between rounded-2xl shadow-lg">
            <div className=" w-full aspect-video rounded-2xl relative">
              <Image
                src="/images/dummy/gallery-6.jpg"
                alt=""
                fill
                className=" w-full h-full rounded-t-2xl"
              />
            </div>
            <div className=" flex flex-col h-44 px-8 py-6 w-full overflow-hidden">
              <h1 className=" text-xl font-semibold">
                10 Tempat Prewedding Outdoor di Kota Bandung
              </h1>
              <p className=" text-sm text-slate-700 mt-2 leading-relaxed">
                Bandung, dengan keindahan alamnya yang memukau dan iklimnya yang
                sejuk, menjadi pilihan sempurna bagi pasangan yang ingin
                mengabadikan momen prewedding mereka di luar ruangan. Kota ini
                menawarkan berbagai lokasi yang menawan ...
              </p>
            </div>
          </div>
          <div className=" flex flex-col w-full items-center justify-between rounded-2xl shadow-lg">
            <div className=" w-full aspect-video rounded-2xl relative">
              <Image
                src="/images/dummy/gallery-6.jpg"
                alt=""
                fill
                className=" w-full h-full rounded-t-2xl"
              />
            </div>
            <div className=" flex flex-col h-44 px-8 py-6 w-full overflow-hidden">
              <h1 className=" text-xl font-semibold">
                10 Tempat Prewedding Outdoor di Kota Bandung
              </h1>
              <p className=" text-sm text-slate-700 mt-2 leading-relaxed">
                Bandung, dengan keindahan alamnya yang memukau dan iklimnya yang
                sejuk, menjadi pilihan sempurna bagi pasangan yang ingin
                mengabadikan momen prewedding mereka di luar ruangan. Kota ini
                menawarkan berbagai lokasi yang menawan ...
              </p>
            </div>
          </div>
          <div className=" flex flex-col w-full items-center justify-between rounded-2xl shadow-lg">
            <div className=" w-full aspect-video rounded-2xl relative">
              <Image
                src="/images/dummy/gallery-6.jpg"
                alt=""
                fill
                className=" w-full h-full rounded-t-2xl"
              />
            </div>
            <div className=" flex flex-col h-44 px-8 py-6 w-full overflow-hidden">
              <h1 className=" text-xl font-semibold">
                10 Tempat Prewedding Outdoor di Kota Bandung
              </h1>
              <p className=" text-sm text-slate-700 mt-2 leading-relaxed">
                Bandung, dengan keindahan alamnya yang memukau dan iklimnya yang
                sejuk, menjadi pilihan sempurna bagi pasangan yang ingin
                mengabadikan momen prewedding mereka di luar ruangan. Kota ini
                menawarkan berbagai lokasi yang menawan ...
              </p>
            </div>
          </div>
          <div className=" flex flex-col w-full items-center justify-between rounded-2xl shadow-lg">
            <div className=" w-full aspect-video rounded-2xl relative">
              <Image
                src="/images/dummy/gallery-6.jpg"
                alt=""
                fill
                className=" w-full h-full rounded-t-2xl"
              />
            </div>
            <div className=" flex flex-col h-44 px-8 py-6 w-full overflow-hidden">
              <h1 className=" text-xl font-semibold">
                10 Tempat Prewedding Outdoor di Kota Bandung
              </h1>
              <p className=" text-sm text-slate-700 mt-2 leading-relaxed">
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
