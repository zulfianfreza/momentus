'use client';

import Image from 'next/image';
import React from 'react';

export default function Quote() {
  return (
    <section id="quote">
      <div className=" relative w-full p-6">
        <Image
          src="/images/decoration/decoration-6.png"
          height={50}
          width={50}
          alt=""
          className=" absolute bottom-0 right-0 z-[2]"
        />
        <div className=" mx-auto mt-auto flex w-full items-center justify-center border-2 border-[#546595] p-8">
          <p className=" text-center text-sm text-[#546595]">
            &quot;Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia
            menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar
            kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di
            antaramu rasa kasih dan sayang. Sungguh, pada yang demikian itu
            benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang
            berpikir.&quot;
          </p>
        </div>
      </div>
    </section>
  );
}
