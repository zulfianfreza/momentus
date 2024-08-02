import { Button } from '@/components/ui/button';
import { inika, kumarOne } from '@/constant/font.constant';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import React from 'react';
import { SiInstagram } from 'react-icons/si';

export default function ArtDeco() {
  const fontTitle = kumarOne.className;
  return (
    <>
      <div className={cn('bg-[#223A2C] text-[#CFBD91]', inika.className)}>
        {/* begin: opening */}
        <div className=" flex min-h-screen w-full flex-col items-center justify-center bg-[url(/images/decoration/bg-pattern-1.png)] bg-cover bg-center p-20">
          <div className=" relative h-[516px] w-[283px]">
            <Image
              src="/images/dummy/dummy-9.jpeg"
              fill
              alt=""
              className=" object-cover object-center"
            />
            <div className=" absolute left-1/2 top-1/2 h-[546px] w-[367px] -translate-x-1/2 -translate-y-1/2 bg-[url(/images/decoration/decoration-1-1.png)] bg-contain bg-center bg-no-repeat"></div>
          </div>
          <div className=" mt-12 flex flex-col items-center gap-2.5">
            <p className=" text-sm">The Wedding of</p>
            <h1 className={cn('text-3xl', fontTitle)}>Ado & Ayu</h1>
            <p className=" text-sm">Saturday, November 25th 2024</p>
          </div>
        </div>
        {/* end: opening */}

        {/* begin: quote */}
        <div className=" relative flex items-center justify-center p-20">
          <div className=" absolute left-0 top-0 h-[30px] w-full bg-[url(/images/decoration/decoration-1-2.png)] bg-contain bg-center" />
          <div className=" absolute bottom-0 left-0 h-[30px] w-full bg-[url(/images/decoration/decoration-1-2.png)] bg-contain bg-center" />
          <div className=" flex aspect-[945/430] w-[945px] items-center justify-center bg-[url(/images/decoration/decoration-1-3.png)] bg-contain bg-center bg-no-repeat px-40 text-center">
            <p>
              Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan
              pasangan-pasangan untukmu dari jenismu sendiri, agar kamu
              cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di
              antaramu rasa kasih dan sayang. Sungguh, pada yang demikian itu
              benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang
              berpikir. (Ar Rum: 21)
            </p>
          </div>
        </div>
        {/* end: quote */}

        {/* begin: couple */}
        <div className=" relative p-20 pt-56">
          <div className=" absolute bottom-0 left-0">
            <div className=" relative h-[160px] w-[124px]">
              <Image
                src="/images/decoration/decoration-1-5.png"
                fill
                alt=""
                className=" object-contain object-center"
              />
            </div>
          </div>
          <div className=" absolute left-0 top-0 scale-y-[-1]">
            <div className=" relative h-[160px] w-[124px]">
              <Image
                src="/images/decoration/decoration-1-5.png"
                fill
                alt=""
                className=" object-contain object-center"
              />
            </div>
          </div>
          <div className=" absolute right-0 top-0 scale-x-[-1] scale-y-[-1]">
            <div className=" relative h-[160px] w-[124px]">
              <Image
                src="/images/decoration/decoration-1-5.png"
                fill
                alt=""
                className=" object-contain object-center"
              />
            </div>
          </div>
          <div className=" absolute bottom-0 right-0 scale-x-[-1]">
            <div className=" relative h-[160px] w-[124px]">
              <Image
                src="/images/decoration/decoration-1-5.png"
                fill
                alt=""
                className=" object-contain object-center"
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-[256px] lg:flex-row">
            <div className="flex flex-col items-center">
              <div className=" relative aspect-square w-[270px]">
                <div className=" absolute left-1/2 top-1/2 z-[2] aspect-square w-[700px] -translate-x-[calc(50%-10px)] -translate-y-1/2 bg-[url(/images/decoration/decoration-1-4.png)] bg-contain bg-center bg-no-repeat" />
                <Image
                  src="/images/dummy/dummy-11.jpeg"
                  fill
                  alt=""
                  className=" object-cover object-center"
                />
              </div>
              <div className=" mt-40 flex flex-col items-center gap-2">
                <h1 className={cn(' text-3xl', fontTitle)}>Ado Adha</h1>
                <p className=" text-center text-sm">
                  Son of Charlie Geller <br />
                  and Betty Geller
                </p>
                <div className="flex items-center gap-1">
                  <SiInstagram size={16} />
                  <p className=" text-sm">adhaado_</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className=" relative aspect-square w-[270px]">
                <div className=" absolute left-1/2 top-1/2 z-[2] aspect-square w-[700px] -translate-x-[calc(50%-10px)] -translate-y-1/2 bg-[url(/images/decoration/decoration-1-4.png)] bg-contain bg-center bg-no-repeat" />
                <Image
                  src="/images/dummy/dummy-12.jpeg"
                  fill
                  alt=""
                  className=" object-cover object-center"
                />
              </div>
              <div className=" mt-40 flex flex-col items-center gap-2">
                <h1 className={cn(' text-3xl', fontTitle)}>Ayu Dia</h1>
                <p className=" text-center text-sm">
                  Daughter of Charlie Geller <br />
                  and Betty Geller
                </p>
                <div className="flex items-center gap-1">
                  <SiInstagram size={16} />
                  <p className=" text-sm">ayudia_</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end: couple */}

        {/* begin: event */}
        <div className=" p-20">
          <div className=" space-y-2 text-center">
            <h1 className={cn(fontTitle, 'text-3xl')}>Wedding Event</h1>
            <p className=" mx-auto max-w-lg text-sm">
              Dengan penuh rasa hormat kami mengharapkan kehadiran
              Bapak/Ibu/Saudara sekalian pada Acara Pernikahan kami yang akan
              kami laksanakan pada :
            </p>
          </div>
          <div className="mt-48 flex items-center justify-center gap-24">
            <div className=" relative w-[480px] border-[3px] border-[#CFBD91]">
              <div className=" absolute top-0 -translate-y-[calc(100%-6px)]">
                <div className=" relative aspect-[480/154] w-[474px]">
                  <Image
                    src="/images/decoration/decoration-1-6.png"
                    fill
                    alt=""
                    className=" object-contain object-center"
                  />
                </div>
              </div>
              <div className=" flex flex-col items-center gap-2 text-clip p-6">
                <h1 className={cn(fontTitle, 'text-3xl')}>Vow</h1>
                <div className=" text-center">
                  <p className="">Monday, May 5th, 2025 </p>
                  <p>08:00 WIB</p>
                </div>
                <p className=" text-lg font-bold">Graha Manggala Siliwangi</p>
                <Button className=" mt-4 rounded-full bg-[#CFBD91] px-8 text-[#223A2C]">
                  Location
                </Button>
              </div>
            </div>
            <div className=" relative w-[480px] border-[3px] border-[#CFBD91]">
              <div className=" absolute top-0 -translate-y-[calc(100%-6px)]">
                <div className=" relative aspect-[480/154] w-[474px]">
                  <Image
                    src="/images/decoration/decoration-1-6.png"
                    fill
                    alt=""
                    className=" object-contain object-center"
                  />
                </div>
              </div>
              <div className=" flex flex-col items-center gap-2 text-clip p-6">
                <h1 className={cn(fontTitle, 'text-3xl')}>Reception</h1>
                <div className=" text-center">
                  <p className="">Monday, May 5th, 2025 </p>
                  <p>08:00 WIB</p>
                </div>
                <p className=" text-lg font-bold">Graha Manggala Siliwangi</p>
                <Button className=" mt-4 rounded-full bg-[#CFBD91] px-8 text-[#223A2C]">
                  Location
                </Button>
              </div>
            </div>
          </div>
          <div className=" mt-48"></div>
        </div>
        {/* end: event */}
      </div>
    </>
  );
}
