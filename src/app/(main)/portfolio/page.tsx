import Container from '@/components/common/container';
import { PORTOFOLIO_FAKER } from '@/constant/faker.constant';
import { format } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function PortfolioPage() {
  return (
    <Container>
      <div className=" my-10 flex w-full flex-col items-center justify-center">
        <div className=" text-center">
          <h1 className=" text-5xl font-semibold leading-relaxed">
            Portofolio
          </h1>
          <p className=" text-neutral-500">
            Pasangan berbahagia yang sudah merayakan bersama{' '}
            <span className=" text-primary font-bold">momentus</span>, sekarang
            giliran kamu
          </p>
        </div>
        <div className=" mt-16 grid w-full items-center justify-center gap-8 lg:grid-cols-3">
          {PORTOFOLIO_FAKER.map((portofolio, i) => (
            <>
              <div
                key={i}
                className="
                  relative inset-0 z-0 flex aspect-[2.8/3] w-full flex-col items-center justify-between rounded-2xl bg-cover bg-center p-4 shadow-lg"
              >
                <Image
                  fill
                  alt={portofolio.background_image}
                  src={portofolio.background_image}
                  className="h-full w-full rounded-2xl object-cover object-top"
                />
                <div className=" z-[1] flex w-full">
                  <div className=" relative z-0 flex aspect-square w-14 rounded-full bg-white">
                    <Image
                      src={portofolio.bride_icon}
                      alt=""
                      fill
                      className=" h-full w-full rounded-full border-white  object-cover object-center p-[2px]"
                    />
                  </div>
                  <div className=" relative z-10 -ml-4 flex aspect-square w-14 rounded-full bg-white">
                    <Image
                      src={portofolio.groom_icon}
                      alt=""
                      fill
                      className=" h-full w-full rounded-full border-white  object-cover object-center p-[2px]"
                    />
                  </div>
                </div>
                <div className=" z-[1] flex h-fit w-full flex-col justify-end rounded-2xl bg-white/70 p-6">
                  <h1 className=" text-primary font-semibold">
                    {portofolio.name}
                  </h1>
                  <p className=" text-sm text-neutral-500">
                    {format(portofolio.date, 'PPP')}
                  </p>
                  <p className=" mt-1">
                    Menggunakan tema{' '}
                    <Link
                      href=""
                      className=" text-primary font-bold"
                    >
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
