import Container from "@/components/common/container";
import Link from "next/link";
import React from "react";
import { LuCheck } from "react-icons/lu";

export default function PricingPage() {
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
    <>
      <Container>
        <div className=" flex flex-col w-full items-center justify-center my-10">
          <div className=" text-center">
            <h1 className=" text-5xl font-semibold leading-relaxed">
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
      </Container>
    </>
  );
}
