import Container from "@/components/common/container";
import { PORTOFOLIO_FAKER } from "@/constant/faker.constant";
import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function PortfolioPage() {
  return (
    <Container>
      <div className=" flex flex-col w-full items-center justify-center my-10">
        <div className=" text-center">
          <h1 className=" text-5xl font-semibold leading-relaxed">
            Portofolio
          </h1>
          <p className=" text-neutral-500">
            Pasangan berbahagia yang sudah merayakan bersama{" "}
            <span className=" font-bold text-pink-600">momentus</span>, sekarang
            giliran kamu
          </p>
        </div>
        <div className=" grid lg:grid-cols-3 gap-8 w-full items-center justify-center mt-16">
          {PORTOFOLIO_FAKER.map((portofolio, i) => (
            <>
              <div
                key={i}
                className="
                  flex flex-col w-full z-0 relative inset-0 aspect-[2.8/3] bg-cover bg-center rounded-2xl shadow-lg p-4 items-center justify-between"
              >
                <Image
                  fill
                  alt={portofolio.background_image}
                  src={portofolio.background_image}
                  className="h-full w-full object-cover object-top rounded-2xl"
                />
                <div className=" flex w-full z-[1]">
                  <div className=" aspect-square flex relative w-14 bg-white rounded-full z-0">
                    <Image
                      src={portofolio.bride_icon}
                      alt=""
                      fill
                      className=" w-full h-full object-cover object-center  rounded-full border-white p-[2px]"
                    />
                  </div>
                  <div className=" aspect-square flex relative w-14 bg-white rounded-full z-10 -ml-4">
                    <Image
                      src={portofolio.groom_icon}
                      alt=""
                      fill
                      className=" w-full h-full object-cover object-center  rounded-full border-white p-[2px]"
                    />
                  </div>
                </div>
                <div className=" flex flex-col w-full h-fit bg-white/70 rounded-2xl justify-end p-6 z-[1]">
                  <h1 className=" font-semibold text-pink-600">
                    {portofolio.name}
                  </h1>
                  <p className=" text-sm text-neutral-500">
                    {format(portofolio.date, "PPP")}
                  </p>
                  <p className=" mt-1">
                    Menggunakan tema{" "}
                    <Link href="" className=" font-bold text-pink-600">
                      {portofolio.theme}
                    </Link>
                  </p>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </Container>
  );
}
