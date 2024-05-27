import Container from "@/components/common/container";
import React from "react";
import Image from "next/image";

export default function GuidePage() {
  return (
    <>
      <Container>
        <div className=" flex flex-col w-full items-center justify-center my-10">
          <div className=" text-center">
            <h1 className=" text-5xl font-semibold leading-relaxed">
              Panduan Penggunaan
            </h1>
            <p className=" text-neutral-500">
              Untuk dapat memahami cara kerja layanan momentus, kami menyediakan
              tutorial lengkap mulai dari proses pembuatan undangan, pemesanan
              undangan, cara mengedit undangan dan penjelasan mengenai kegunaan
              dari berbagai fitur yang tersedia.
            </p>
          </div>
        </div>
      </Container>
      <div className=" flex flex-col w-full mt-16 items-center justify-center ">
        <div className=" flex w-full h-60 overflow-visible items-center justify-between lg:px-36 px-5 gap-x-20 bg-pink-50">
          <div className=" flex w-full">
            <h1 className=" text-xl text-left justify-start">
              1. Registrasi untuk membuat akun undangan kamu.
            </h1>
          </div>
          <div className=" flex w-full max-w-sm aspect-video relative">
            <Image
              src="/images/state/guide-state-1.png"
              alt=""
              fill
              className=" w-full h-full"
            />
          </div>
        </div>
        <div className=" flex w-full h-60 overflow-visible items-center justify-between lg:px-36 px-5 gap-x-20 bg-pink-100">
          <div className=" flex w-full max-w-sm aspect-video relative">
            <Image
              src="/images/state/guide-state-2.png"
              alt=""
              fill
              className=" w-full h-full"
            />
          </div>
          <div className=" flex w-full justify-end">
            <h1 className=" text-xl text-right">
              2. Pilih tema undangan sesuai dengan keinginan kamu.
            </h1>
          </div>
        </div>
        <div className=" flex w-full h-60 overflow-visible items-center justify-between lg:px-36 px-5 gap-x-20 bg-pink-200/80">
          <div className=" flex w-full">
            <h1 className=" text-xl text-left justify-start">
              3. Tentukan tamu, teks, gambar, warna serta elemen dan section
              undangan kamu.
            </h1>
          </div>
          <div className=" flex w-full max-w-sm aspect-video relative">
            <Image
              src="/images/state/guide-state-3.png"
              alt=""
              fill
              className=" w-full h-full"
            />
          </div>
        </div>
        <div className=" flex w-full h-60 overflow-visible items-center justify-between lg:px-36 px-5 gap-x-20 bg-pink-300/70">
          <div className=" flex w-full max-w-sm aspect-video relative">
            <Image
              src="/images/state/guide-state-4.png"
              alt=""
              fill
              className=" w-full h-full"
            />
          </div>
          <div className=" flex w-full justify-end">
            <h1 className=" text-xl text-right">
              4. Kirim dan bagikan undangan ke tamu yang sudah kamu tentukan.
            </h1>
          </div>
        </div>
      </div>
      <Container>
        <div className=" flex flex-col w-full items-center mt-20 justify-center gap-6">
          <h1 className=" text-2xl font-semibold leading-relaxed">
            Agar lebih mudah, kami menyediakan video tutorial untuk bisa kamu
            ikuti.
          </h1>
          <div className=" flex w-full aspect-video bg-slate-300 rounded-2xl shadow-lg max-w-2xl"></div>
        </div>
      </Container>
    </>
  );
}
