import Container from '@/components/common/container';
import Link from 'next/link';
import React from 'react';
import { LuCheck } from 'react-icons/lu';

export default function PricingPage() {
  const FEATURE_FAKER = [
    'Akses semua fitur premium',
    'Akses semua tema preium',
    'Unlimited tamu undangan',
    'Gallery (Max 10 photo)',
    'Background Music',
    'Quotes',
    'Love Stories',
    'Kirim Ucapan',
    'RSVP',
  ];
  return (
    <>
      <Container>
        <div className=" my-10 flex w-full flex-col items-center justify-center">
          <div className=" text-center">
            <h1 className=" text-5xl font-semibold leading-relaxed">
              Harga Terbaik Buat Kamu
            </h1>
            <p className=" text-neutral-500">
              Temukan Rencana yang Tepat untuk Acara Istimewa Anda
            </p>
          </div>
          <div className=" mt-16 grid grid-cols-1 items-start gap-8 lg:grid-cols-3">
            <div className=" w-full rounded-2xl border p-6 py-16 shadow-lg">
              <div className=" space-y-2 text-center">
                <p className="">Emberglow</p>
                <h1 className=" text-3xl font-bold">Rp 99.000</h1>
              </div>
              <div className=" mt-8 flex flex-col gap-2">
                {FEATURE_FAKER.map((feature) => (
                  <div
                    className=" flex items-center gap-2"
                    key={feature}
                  >
                    <LuCheck />
                    <p
                      key={feature}
                      className=" text-sm "
                    >
                      {feature}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className=" bg-primary relative mt-0 w-full overflow-hidden rounded-2xl border p-6 py-16 pt-[88px] shadow-lg lg:-mt-6">
              <div className=" absolute left-4 top-0 rounded-b-xl bg-yellow-500 px-4 py-1.5">
                <p className=" text-xs text-white">Best Deal!</p>
              </div>
              <div className=" space-y-2 text-center text-white">
                <p className="">Moonbeam</p>
                <h1 className=" text-3xl font-bold">Rp 159.000</h1>
              </div>
              <div className=" mt-8 flex flex-col gap-2">
                {FEATURE_FAKER.map((feature) => (
                  <div
                    className=" flex items-center gap-2 text-white"
                    key={feature}
                  >
                    <LuCheck />
                    <p
                      key={feature}
                      className=" text-sm "
                    >
                      {feature}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className=" w-full rounded-2xl border p-6 py-16 shadow-lg">
              <div className=" space-y-2 text-center">
                <p className="">Stardust</p>
                <h1 className=" text-3xl font-bold">Rp 199.000</h1>
              </div>
              <div className=" mt-8 flex flex-col gap-2">
                {FEATURE_FAKER.map((feature) => (
                  <div
                    className=" flex items-center gap-2"
                    key={feature}
                  >
                    <LuCheck />
                    <p
                      key={feature}
                      className=" text-sm "
                    >
                      {feature}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className=" mt-8 flex h-12 w-full items-center justify-center rounded-lg border bg-neutral-100">
            <p className=" text-center text-sm">
              Ingin mencobanya terlebih dulu? Cobalah{' '}
              <Link
                href="/"
                className=" text-primary font-medium underline"
              >
                Free Trial
              </Link>{' '}
              untuk membuat undangan di Momentus.
            </p>
          </div>
        </div>
      </Container>
    </>
  );
}
