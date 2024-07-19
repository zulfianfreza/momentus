import Container from '@/components/common/container';
import { Button } from '@/components/ui/button';
import { FAQ_FAKER, FEATURE_WEB_FAKER } from '@/constant/faker.constant';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { LuCheck } from 'react-icons/lu';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import TestimonialsSection from '@/components/common/testimonials';

export default function HomePage() {
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
      {/* begin: hero */}
      <div className=" mx-auto -mt-10 w-full items-center justify-between overflow-visible px-5 md:px-10 lg:mt-0 lg:flex lg:px-20 lg:py-16">
        <div className=" flex w-full flex-col justify-center gap-6 py-24">
          <div className=" max-w-3xl">
            <h1 className=" text-left text-3xl font-bold lg:text-5xl lg:leading-tight">
              Platform Undangan Website, Buku Tamu Digital, dan Wedding Planner.
            </h1>
          </div>
          <div className="max-w-lg">
            <p className=" text-left text-neutral-500">
              Jadikan pernikahan impianmu lebih modern dan efisien dengan
              Momentus, Solusi digital pernikahan terlengkap!
            </p>
          </div>
          <div className="flex items-center justify-start gap-2">
            <Button className=" rounded-full">Coba Sekarang</Button>
            <Button
              className=" rounded-full"
              variant="secondary-primary"
            >
              Konsultasi
            </Button>
          </div>
        </div>

        <div className=" w-full max-w-72 items-center justify-center overflow-visible lg:max-w-lg lg:justify-self-end">
          <div className=" flex w-full items-start justify-between gap-x-4 bg-[url('/images/state/backdrop-mockup.png')] bg-contain bg-center bg-no-repeat ">
            <Image
              src="/images/baner-mockup.png"
              alt=""
              width={1080}
              height={1080}
              className=" relative bottom-10 left-32 z-10 aspect-[6/7] h-full w-full object-center sm:bottom-0 sm:left-0"
            />
          </div>
        </div>
      </div>
      {/* end: hero */}

      {/* begin: dashboard image */}
      <div className=" w-full items-center justify-center lg:flex">
        <div className=" relative flex aspect-[5/2.5] w-full lg:max-w-6xl">
          <Image
            src="/images/preview-porto.png"
            alt=""
            width={1080}
            height={768}
            className=" h-full w-full"
          />
        </div>
        <Container>
          <div className=" relative mr-20 flex flex-col justify-self-start">
            <h1 className=" text-3xl font-medium text-neutral-500">
              <span className=" font-bold text-neutral-900">5.029+</span>{' '}
              Pasangan telah merayakan bersama{' '}
              <span className=" text-primary font-bold">Momentus</span>.
            </h1>
            <div className=" mt-4 flex w-full items-center justify-center gap-4">
              <div className=" relative flex h-60 w-full rounded-2xl">
                <Image
                  src="/images/dummy/gallery-10.jpg"
                  alt=" fill"
                  className=" rounded-2xl object-cover object-center"
                  fill
                />
              </div>
              <div className=" relative flex h-60 w-full rounded-2xl">
                <Image
                  src="/images/dummy/gallery-11.jpg"
                  alt=" fill"
                  className=" rounded-2xl object-cover object-center"
                  fill
                />
              </div>
              <div className=" relative flex h-60 w-full rounded-2xl">
                <Image
                  src="/images/dummy/gallery-12.jpg"
                  alt=" fill"
                  className=" rounded-2xl object-cover object-center"
                  fill
                />
              </div>
              <div className=" relative flex h-60 w-full rounded-2xl">
                <Image
                  src="/images/dummy/gallery-13.jpg"
                  alt=" fill"
                  className=" rounded-2xl object-cover object-center"
                  fill
                />
              </div>
            </div>
          </div>
        </Container>
      </div>
      {/* end: dashboard image */}

      {/* begin : feature  */}
      <div className=" my-20 w-full bg-neutral-50/70">
        <Container>
          <div className=" grid w-full items-stretch gap-8 py-20 md:grid-cols-2 lg:grid-cols-3">
            <div className=" flex w-full md:col-span-2 lg:col-span-1 ">
              <h1 className=" text-primary max-w-full text-3xl font-bold lg:max-w-xs">
                Fitur Undangan Digital Yang Lengkap & Keren.
              </h1>
            </div>
            {FEATURE_WEB_FAKER.map((feature, i) => (
              <>
                <div className=" flex w-full flex-col  gap-1 rounded-2xl bg-pink-200/50 p-10 shadow-lg">
                  <feature.icon
                    size="56"
                    variant="Bulk"
                    className=" text-primary"
                  />
                  <h3 className=" mt-3 text-lg font-medium">
                    {feature.feature_name}
                  </h3>
                  <p className=" text-neutral-500">
                    {feature.feature_description}
                  </p>
                </div>
              </>
            ))}
          </div>
        </Container>
      </div>
      {/* end : feature */}
      <Container>
        {/* begin: pricing */}
        <div className=" my-20 w-full">
          <div className=" text-center">
            <h1 className=" text-3xl font-semibold leading-relaxed">
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
        {/* end: pricing */}

        {/* begin: testimonial */}
        <div className=" my-20 flex w-full flex-col items-center justify-center">
          <div className=" text-center">
            <h1 className=" text-3xl font-semibold leading-relaxed">
              Apa Kata Mereka?
            </h1>
          </div>
          <TestimonialsSection />
        </div>
        {/* end: testimonial */}

        {/* begin: faq */}

        <div className=" my-20 w-full flex-1">
          <div className=" text-center">
            <h1 className=" text-3xl font-semibold leading-relaxed">FAQ</h1>
            <p className=" text-neutral-500">
              Pertanyaan yang sering ditanyakan
            </p>
          </div>
          <Accordion
            type="single"
            collapsible
            className=" mt-16"
          >
            {FAQ_FAKER.map((faq, i) => (
              <>
                <AccordionItem
                  value={'item-' + faq.item}
                  key={i}
                >
                  <AccordionTrigger>{faq.trigger}</AccordionTrigger>
                  <AccordionContent>{faq.content}</AccordionContent>
                </AccordionItem>
              </>
            ))}
          </Accordion>
        </div>

        {/* end: faq */}
      </Container>
    </>
  );
}
