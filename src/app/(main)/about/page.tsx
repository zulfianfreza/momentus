import Container from "@/components/common/container";
import { ABOUT_FAKER } from "@/constant/faker.constant";
import Image from "next/image";
import React from "react";

export default function AboutPage() {
  return (
    <Container>
      <div className=" flex flex-col w-full items-center justify-center my-10">
        <div className=" text-center">
          <h1 className=" text-5xl font-semibold leading-relaxed">Tentang</h1>
          {/* <p className=" text-neutral-500">
            Pasangan berbahagia yang sudah merayakan bersama{" "}
            <span className=" font-bold text-pink-600">momentus</span>, sekarang
            giliran kamu
          </p> */}
        </div>
        <div className="  flex flex-col leading-relaxed text-slate-800 gap-2 text-justify my-10">
          <h1 className=" text-xl font-semibold">
            Platofrm undangan pernikahan online
          </h1>
          <p>
            Hallo perkenalkan kami Datengdong, platform website undangan
            pernikahan online di Indonesia.
          </p>
          <p>
            momentus adalah platform undangan pernikahan online dan digital yang
            dapat dibagikan secara online kepada seluruh tamu undangan dimanapun
            dan kapanpun. datengdong.com menyediakan jasa undangan pernikahan
            online gratis dan berkualitas.
          </p>
        </div>
        <div className=" flex flex-col w-full items-center justify-center my-20">
          <h1 className="text-2xl font-semibold leading-relaxed">
            Yang Membuat Kami Berbeda
          </h1>
          <div className=" grid lg:grid-cols-3 w-full items-center justify-center gap-20 mt-10">
            {ABOUT_FAKER.map((about) => (
              <>
                <div className=" flex flex-col w-full items-center justify-center">
                  <div className=" flex w-full aspect-video max-w-72 relative">
                    <Image
                      src={about.thumbnail}
                      alt=""
                      fill
                      className=" w-full h-full"
                    />
                  </div>
                  <div className=" flex flex-col gap-4 mt-4 text-center">
                    <h1 className=" text-slate-800 font-medium text-lg">
                      {about.title}
                    </h1>
                    <p className=" leading-relaxed text-slate-600">
                      {about.description}
                    </p>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}
