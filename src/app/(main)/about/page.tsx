import Container from '@/components/common/container';
import { ABOUT_FAKER } from '@/constant/faker.constant';
import Image from 'next/image';
import React from 'react';

export default function AboutPage() {
  return (
    <Container>
      <div className=" my-10 flex w-full flex-col items-center justify-center">
        <div className=" text-center">
          <h1 className=" text-5xl font-semibold leading-relaxed">Tentang</h1>
          {/* <p className=" text-neutral-500">
            Pasangan berbahagia yang sudah merayakan bersama{" "}
            <span className=" font-bold text-primary">momentus</span>, sekarang
            giliran kamu
          </p> */}
        </div>
        <div className="  my-10 flex flex-col gap-2 text-justify leading-relaxed text-slate-800">
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
        <div className=" my-20 flex w-full flex-col items-center justify-center">
          <h1 className="text-2xl font-semibold leading-relaxed">
            Yang Membuat Kami Berbeda
          </h1>
          <div className=" mt-10 grid w-full items-center justify-center gap-20 lg:grid-cols-3">
            {ABOUT_FAKER.map((about) => (
              <>
                <div className=" flex w-full flex-col items-center justify-center">
                  <div className=" relative flex aspect-video w-full max-w-72">
                    <Image
                      src={about.thumbnail}
                      alt=""
                      fill
                      className=" h-full w-full"
                    />
                  </div>
                  <div className=" mt-4 flex flex-col gap-4 text-center">
                    <h1 className=" text-lg font-medium text-slate-800">
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
