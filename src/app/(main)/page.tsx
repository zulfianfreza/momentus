import Container from "@/components/common/container";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { LuCheck } from "react-icons/lu";

export default function HomePage() {
  const FEATURE_FAKER = [
    "Akses semua fitur premium",
    "Akses semua tema preium",
    "Unlimited tamu undangan",
    "Gallery (Max 10 photo)",
    "Background Music",
    "Quotes",
    "Love Stories",
    "Kirim Ucapan",
    "RSVP",
  ];
  return (
    <Container>
      {/* begin: hero */}
      <div className=" w-full py-24 flex flex-col justify-center items-center gap-6">
        <div className=" px-4 py-1.5 rounded-full border">
          <p className=" text-sm font-medium text-neutral-500">
            <span className=" font-bold text-neutral-900">5.029+</span> Undangan
            Website dibuat.
          </p>
        </div>
        <div className=" max-w-2xl">
          <h1 className=" text-3xl lg:text-5xl font-semibold text-center leading-tight">
            Platform Undangan Website, Buku Tamu Digital, dan Wedding Planner.
          </h1>
        </div>
        <div className="max-w-lg">
          <p className=" text-neutral-500 text-center">
            Jadikan pernikahan impianmu lebih modern dan efisien dengan Viding,
            Solusi digital pernikahan terlengkap!
          </p>
        </div>
        <div className="flex justify-center items-center gap-2">
          <Button className=" rounded-full">Coba Sekarang</Button>
          <Button className=" rounded-full" variant="secondary-primary">
            Konsultasi
          </Button>
        </div>
      </div>
      {/* end: hero */}

      {/* begin: dashboard image */}
      <div className=" w-full relative rounded-2xl overflow-hidden border">
        <Image
          src="/images/dashboard-user.png"
          width={1280}
          height={720}
          alt=""
          className=" w-full h-full"
        />
      </div>
      {/* end: dashboard image */}

      {/* begin: pricing */}
      <div className=" w-full my-20">
        <div className=" text-center">
          <h1 className=" text-3xl font-semibold leading-relaxed">
            Harga Terbaik Buat Kamu
          </h1>
          <p className=" text-neutral-500">
            Temukan Rencana yang Tepat untuk Acara Istimewa Anda
          </p>
        </div>
        <div className=" mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className=" w-full p-6 py-16 rounded-2xl border shadow-lg">
            <div className=" text-center space-y-2">
              <p className="">Emberglow</p>
              <h1 className=" text-3xl font-bold">Rp 99.000</h1>
            </div>
            <div className=" mt-8 flex flex-col gap-2">
              {FEATURE_FAKER.map((feature) => (
                <div className=" flex items-center gap-2" key={feature}>
                  <LuCheck />
                  <p key={feature} className=" text-sm ">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className=" w-full p-6 py-16 pt-[88px] mt-0 lg:-mt-6 rounded-2xl overflow-hidden border shadow-lg bg-pink-600 relative">
            <div className=" px-4 py-1.5 bg-yellow-500 absolute top-0 left-4 rounded-b-xl">
              <p className=" text-white text-xs">Best Deal!</p>
            </div>
            <div className=" text-center space-y-2 text-white">
              <p className="">Moonbeam</p>
              <h1 className=" text-3xl font-bold">Rp 159.000</h1>
            </div>
            <div className=" mt-8 flex flex-col gap-2">
              {FEATURE_FAKER.map((feature) => (
                <div
                  className=" flex items-center text-white gap-2"
                  key={feature}
                >
                  <LuCheck />
                  <p key={feature} className=" text-sm ">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className=" w-full p-6 py-16 rounded-2xl border shadow-lg">
            <div className=" text-center space-y-2">
              <p className="">Stardust</p>
              <h1 className=" text-3xl font-bold">Rp 199.000</h1>
            </div>
            <div className=" mt-8 flex flex-col gap-2">
              {FEATURE_FAKER.map((feature) => (
                <div className=" flex items-center gap-2" key={feature}>
                  <LuCheck />
                  <p key={feature} className=" text-sm ">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className=" mt-8 w-full rounded-lg border h-12 bg-neutral-100 flex items-center justify-center">
          <p className=" text-center text-sm">
            Ingin mencobanya terlebih dulu? Cobalah{" "}
            <Link href="/" className=" text-pink-600 font-medium underline">
              Free Trial
            </Link>{" "}
            untuk membuat undangan di Momentus.
          </p>
        </div>
      </div>
      {/* end: pricing */}
    </Container>
  );
}
