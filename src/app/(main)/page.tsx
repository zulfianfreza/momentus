import Container from "@/components/common/container";
import { Button } from "@/components/ui/button";
import { FAQ_FAKER, FEATURE_WEB_FAKER } from "@/constant/faker.constant";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { LuCheck } from "react-icons/lu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import TestimonialsSection from "@/components/common/testimonials";

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
    <>
      {/* begin: hero */}
      <div className=" lg:flex w-full items-center justify-between mx-auto lg:px-20 md:px-10 px-5 lg:py-16 lg:mt-0 -mt-10 overflow-visible">
        <div className=" w-full py-24 flex flex-col justify-center gap-6">
          {/* <div className=" px-4 py-1.5 w-full rounded-full border">
            <p className=" text-sm font-medium text-neutral-500">
              <span className=" font-bold text-neutral-900">5.029+</span>{" "}
              Undangan Website dibuat.
            </p>
          </div> */}
          <div className=" max-w-2xl">
            <h1 className=" text-3xl lg:text-5xl font-semibold text-left lg:leading-tight">
              Platform Undangan Website, Buku Tamu Digital, dan Wedding Planner.
            </h1>
          </div>
          <div className="max-w-lg">
            <p className=" text-neutral-500 text-left">
              Jadikan pernikahan impianmu lebih modern dan efisien dengan
              Viding, Solusi digital pernikahan terlengkap!
            </p>
          </div>
          <div className="flex justify-start items-center gap-2">
            <Button className=" rounded-full">Coba Sekarang</Button>
            <Button className=" rounded-full" variant="secondary-primary">
              Konsultasi
            </Button>
          </div>
        </div>

        <div className=" w-full lg:max-w-lg max-w-72 items-center lg:justify-self-end justify-center overflow-visible">
          <div className=" flex w-full items-start justify-between gap-x-4 bg-[url('/images/state/backdrop-mockup.png')] bg-cover ">
            <Image
              src="/images/baner-mockup.png"
              alt=""
              width={1080}
              height={1080}
              className=" w-full h-full z-10 relative object-center left-32 sm:left-0 sm:bottom-0 bottom-10 aspect-[6/7]"
            />
          </div>
          {/* <Image
            src="/images/state/backdrop-mockup.png"
            alt=""
            width={500}
            height={70}
            className=" object-center object-cover z-0 absolute bottom-[-40px] sm:bottom-[140px] right-0 sm:right-20 lg:scale-125 scale-75"
          /> */}
        </div>
      </div>
      {/* end: hero */}

      {/* begin: dashboard image */}
      <div className=" lg:flex w-full items-center justify-center">
        <div className=" flex w-full lg:max-w-6xl aspect-[5/2.5] relative">
          <Image
            src="/images/preview-porto.png"
            alt=""
            width={1080}
            height={768}
            className=" w-full h-full"
          />
        </div>
        <Container>
          <div className=" flex flex-col justify-self-start mr-20 relative">
            <h1 className=" text-3xl font-medium text-neutral-500">
              <span className=" font-bold text-neutral-900">5.029+</span>{" "}
              Pasangan telah merayakan bersama{" "}
              <span className=" font-bold text-pink-600">momentus</span>.
            </h1>
            <div className=" flex w-full mt-4 gap-4 items-center justify-center">
              <div className=" flex w-full relative h-60 rounded-2xl">
                <Image
                  src="/images/dummy/gallery-10.jpg"
                  alt=" fill"
                  className=" object-cover object-center rounded-2xl"
                  fill
                />
              </div>
              <div className=" flex w-full relative h-60 rounded-2xl">
                <Image
                  src="/images/dummy/gallery-11.jpg"
                  alt=" fill"
                  className=" object-cover object-center rounded-2xl"
                  fill
                />
              </div>
              <div className=" flex w-full relative h-60 rounded-2xl">
                <Image
                  src="/images/dummy/gallery-12.jpg"
                  alt=" fill"
                  className=" object-cover object-center rounded-2xl"
                  fill
                />
              </div>
              <div className=" flex w-full relative h-60 rounded-2xl">
                <Image
                  src="/images/dummy/gallery-13.jpg"
                  alt=" fill"
                  className=" object-cover object-center rounded-2xl"
                  fill
                />
              </div>
            </div>
          </div>
        </Container>
      </div>
      {/* end: dashboard image */}

      {/* begin : feature  */}
      <div className=" w-full bg-slate-50/70 my-20">
        <Container>
          <div className=" grid lg:grid-cols-3 w-full gap-8 py-20">
            <div className=" flex w-full aspect-[4/3]  p-10">
              <h1 className=" font-bold text-3xl text-pink-600">
                Fitur Undangan Digital Yang Lengkap & Keren.
              </h1>
            </div>
            {FEATURE_WEB_FAKER.map((feature, i) => (
              <>
                <div className=" flex flex-col w-full  bg-pink-200/50 p-10 gap-1 rounded-2xl shadow-lg">
                  <feature.icon
                    size="56"
                    color="rgb(219 39 119)"
                    variant="Bulk"
                  />
                  <h3 className=" text-lg mt-3">{feature.feature_name}</h3>
                  <p className=" text-neutral-800">
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

        {/* begin: testimonial */}
        <div className=" flex flex-col w-full items-center justify-center my-20">
          <div className=" text-center">
            <h1 className=" text-3xl font-semibold leading-relaxed">
              Apa Kata Mereka?
            </h1>
          </div>
          <TestimonialsSection />
        </div>
        {/* end: testimonial */}

        {/* begin: faq */}

        <div className=" flex-1 w-full my-20">
          <div className=" text-center">
            <h1 className=" text-3xl font-semibold leading-relaxed">FAQ</h1>
            <p className=" text-neutral-500">
              Pertanyaan yang sering ditanyakan
            </p>
          </div>
          <Accordion type="single" collapsible className=" mt-16">
            {FAQ_FAKER.map((faq, i) => (
              <>
                <AccordionItem value={"item-" + faq.item} key={i}>
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
