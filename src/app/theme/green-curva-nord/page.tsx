'use client';

import BackgroundMusic from '@/components/theme/shared/background-music';
import InvitationGallery from '@/components/theme/shared/invitation-gallery';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Textarea } from '@/components/ui/textarea';
import { INVITATION_GALLERIES_FAKER } from '@/constant/faker.constant';
import { abhayaLibre, judson } from '@/constant/font.constant';
import useScrollspy from '@/hooks/use-scroll-spy';
import { cn } from '@/lib/utils';
import {
  Calendar,
  Copy,
  Edit,
  GalleryFavorite,
  Lovely,
  Magicpen,
} from 'iconsax-react';
import Image from 'next/image';
import { useCallback, useState } from 'react';
import { SiFacebook, SiInstagram, SiWhatsapp } from 'react-icons/si';

export default function GreenCurvaNord() {
  const fontTitle = abhayaLibre.className;

  const navigations = [
    {
      icon: Lovely,
      label: 'Pasangan',
      target: 'couple',
    },
    {
      icon: Calendar,
      label: 'Acara',
      target: 'event',
    },
    {
      icon: Magicpen,
      label: 'Kisah Cinta',
      target: 'story',
    },
    {
      icon: GalleryFavorite,
      label: 'Galeri',
      target: 'gallery',
    },
    {
      icon: Edit,
      label: 'Ucapan',
      target: 'wish',
    },
  ];

  const activeId = useScrollspy(
    navigations.map((item) => item.target),
    5,
  );

  // handle scroll to element
  const handleScrollTo = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>, id: string) => {
      e.stopPropagation();
      e.preventDefault();

      const el = document.getElementById(id);
      if (el) {
        window.scrollTo({
          top: el.offsetTop,
          behavior: 'smooth',
        });
      }
    },
    [],
  );

  const [showCover, setShowCover] = useState<boolean>(true);
  const [playAudio, setPlayAudio] = useState<boolean>(false);

  return (
    <div
      className={cn(judson.className, `tracking-normal text-[#034405]`)}
      onContextMenu={(e) => e.preventDefault()}
    >
      {/* begin: cover */}
      <div
        className={cn(
          ' fixed inset-0 z-[9999] h-screen w-full bg-[url(/images/dummy/dummy-7.jpeg)] bg-cover bg-center transition-all duration-1000',
          { ' -translate-y-full opacity-0': !showCover },
        )}
      >
        <div className=" flex h-full w-full flex-col items-center justify-end bg-[#EBDEC899] p-20">
          <div className=" text-center">
            <p className={cn(' text-sm')}>The Wedding of</p>
            <h1 className={cn(fontTitle, 'text-5xl')}>Declan & Aideen</h1>
            <p className=" text-sm">12 Desember 2024</p>
          </div>
          <div className=" mt-12 text-center">
            <p className=" text-sm">Kepada:</p>
            <p className="  text-sm font-bold">La Gandras</p>
            <div className=" mt-6">
              <Button
                className=" rounded-full bg-[#034405] px-6 text-[#EBDEC8] hover:bg-[#034405]/90"
                onClick={() => {
                  setPlayAudio((prev) => !prev);
                  setShowCover((prev) => !prev);
                }}
              >
                Buka Undangan
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/* end: cover */}

      <div className=" flex w-full">
        {/* begin: left */}
        <div className=" fixed hidden h-screen w-[calc(100%-430px)] flex-1 bg-[url(/images/dummy/dummy-1.jpeg)] bg-cover bg-center lg:block">
          <div className=" flex h-full w-full items-end justify-center bg-[#EBDEC899] p-20">
            <div className="flex flex-col items-center justify-center">
              <div className=" text-center">
                <p className={cn(' text-sm')}>The Wedding of</p>
                <h1 className={cn(fontTitle, 'text-5xl')}>Declan & Aideen</h1>
                <p className=" text-sm">12 Desember 2024</p>
              </div>
            </div>
          </div>
        </div>
        {/* end: left */}
        <div className=" flex w-full justify-center bg-[#EBDEC899] lg:justify-end">
          {/* <div className=" fixed block h-screen  w-full bg-[url(/images/dummy/dummy-7.jpeg)] bg-cover bg-center lg:hidden">
            <div className=" h-full w-full bg-[#EBDEC8]/60 backdrop-blur-lg" />
          </div> */}
          <div className=" z-[998] min-h-screen w-full sm:w-[430px]">
            <div className=" fixed bottom-4 right-1/2 z-[999] flex translate-x-1/2 gap-1 rounded-full bg-black/25 p-1 shadow-lg backdrop-blur-md lg:right-[215px]">
              {navigations.map((navigation) => (
                <Button
                  key={navigation.target}
                  size={activeId === navigation.target ? 'default' : 'icon'}
                  className={cn(
                    ' rounded-full bg-black/10 text-[#EBDEC8] transition-all hover:bg-black/15 hover:text-white',
                    {
                      'bg-[#034405] hover:bg-[#034405]/90':
                        activeId === navigation.target,
                    },
                  )}
                  variant="ghost"
                  onClick={(e) => handleScrollTo(e, navigation.target)}
                >
                  <navigation.icon size={16} />{' '}
                  <span
                    className={cn('hidden transition-all', {
                      block: activeId === navigation.target,
                    })}
                  >
                    {navigation.label}
                  </span>
                </Button>
              ))}
            </div>

            <BackgroundMusic
              play={playAudio}
              setPlay={setPlayAudio}
            />

            <section id="opening">
              <div className=" min-h-screen w-full bg-[url(/images/dummy/dummy-13.jpeg)] bg-cover bg-center">
                <div className=" flex min-h-screen w-full flex-col bg-[#EBDEC899] px-12 py-20">
                  <div className=" flex flex-col items-center text-center">
                    <p className=" text-sm">The Wedding of</p>
                    <h1 className={cn(' text-5xl', fontTitle)}>
                      Declan & Aideen
                    </h1>
                    <p className=" text-sm">12 Desember 2024</p>
                    <div className=" mt-4 flex h-[55px] w-[251px] items-center justify-center gap-4 bg-[url(/images/dummy/decoration-1.png)] bg-contain bg-center bg-no-repeat">
                      <div className="flex flex-col leading-none">
                        <p>12</p>
                        <p>Hari</p>
                      </div>
                      <div className="flex flex-col leading-none">
                        <p>12</p>
                        <p>Jam</p>
                      </div>
                      <div className="flex flex-col leading-none">
                        <p>12</p>
                        <p>Menit</p>
                      </div>
                      <div className="flex flex-col leading-none">
                        <p>12</p>
                        <p>Detik</p>
                      </div>
                    </div>
                  </div>

                  <div className=" mx-auto mt-auto flex h-[152.5px] w-[336px] items-center justify-center bg-[url(/images/dummy/decoration-2.png)] bg-contain bg-center bg-no-repeat p-6">
                    <p className=" text-center text-sm">
                      Matius 19:6 &quot;Demikianlah mereka bukan lagi dua,
                      melainkan satu. Karena itu, apa yang telah dipersatukan
                      Allah, tidak boleh diceraikan manusia.&quot;
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section id="couple">
              <div className=" flex min-h-screen w-full flex-col items-center bg-[#EBDEC8] px-12 py-20">
                <div className=" flex h-[73px] w-[336px] items-center justify-center bg-[url(/images/dummy/decoration-3.png)] bg-contain bg-center bg-no-repeat px-4 py-2.5 text-center">
                  <h1 className={cn('text-[44px] font-extrabold', fontTitle)}>
                    Groom & Bride
                  </h1>
                </div>

                <div className=" mt-12 flex flex-col gap-4">
                  <div className="flex flex-col items-center text-center">
                    <h1 className={cn(fontTitle, ' text-3xl font-bold')}>
                      Declan Hornet
                    </h1>
                    <p className="">Anak kedua dari</p>
                    <p className="">Bapak William Hornet</p>
                    <p className="">dan Ibu Mia Hornet</p>
                    <div className=" relative mt-4">
                      <div className=" absolute top-0 z-[2] h-[219px] w-[164px] bg-[url(/images/dummy/decoration-4.png)] bg-contain bg-center"></div>
                      <div
                        className=" relative h-[219px] w-[164px]"
                        style={{
                          maskImage: 'url(/images/dummy/decoration-mask-1.png)',
                          maskSize: '100%',
                        }}
                      >
                        <Image
                          src="/images/dummy/dummy-8.jpeg"
                          fill
                          alt=""
                          className=" object-cover object-center"
                        />
                      </div>
                    </div>
                    <div className="mt-2.5 flex items-center justify-center gap-1 text-[#36713A]">
                      <SiInstagram className="" />
                      <p className=" text-sm">declanhorn</p>
                    </div>
                  </div>
                  <h1 className=" text-center text-3xl">&</h1>
                  <div className="flex flex-col items-center text-center">
                    <h1 className={cn(fontTitle, ' text-3xl font-bold')}>
                      Aideen Johanson
                    </h1>
                    <p className="">Anak sulung dari</p>
                    <p className="">Bapak Fredrick Johansen</p>
                    <p className="">dan Ibu Tina Johansen</p>
                    <div className=" relative mt-4">
                      <div className=" absolute top-0 z-[2] h-[219px] w-[164px] bg-[url(/images/dummy/decoration-4.png)] bg-contain bg-center"></div>
                      <div
                        className=" relative h-[219px] w-[164px]"
                        style={{
                          maskImage: 'url(/images/dummy/decoration-mask-1.png)',
                          maskSize: '100%',
                        }}
                      >
                        <Image
                          src="/images/dummy/dummy-5.jpeg"
                          fill
                          alt=""
                          className=" object-cover object-center"
                        />
                      </div>
                    </div>
                    <div className="mt-2.5 flex items-center justify-center gap-1 text-[#36713A]">
                      <SiInstagram className="" />
                      <p className=" text-xs">aideenjnsn</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="event">
              <div className=" w-full bg-[url(/images/dummy/dummy-3.jpeg)] bg-cover bg-center">
                <div className=" flex h-full w-full flex-col items-center justify-center gap-6 bg-[#96BC9A]/85 px-12 py-20">
                  <p className=" text-center text-sm">
                    Kami mengundang Bapak/Ibu/Saudara/i untuk menghadiri acara
                    pernikahan kami yang akan dilaksanakan pada :
                  </p>
                  <div className=" flex h-[164px] w-[255px] flex-col items-center justify-center bg-[url(/images/dummy/decoration-5.png)] bg-contain bg-center bg-no-repeat p-6 py-4 text-center">
                    <h1 className={cn(fontTitle, ' text-3xl font-semibold')}>
                      Akad Nikah
                    </h1>
                    <p className=" text-sm">Minggu, 12 Desember 2024</p>
                    <p className=" text-sm">Pukul 08:00 WIB</p>
                    <p className=" text-sm">
                      Tempat : Lapangan Voli RW 10 Perumahan Sukamaju
                    </p>
                  </div>
                  <div className=" flex h-[164px] w-[255px] flex-col items-center justify-center bg-[url(/images/dummy/decoration-5.png)] bg-contain bg-center bg-no-repeat p-6 py-4 text-center">
                    <h1 className={cn(fontTitle, ' text-3xl font-semibold')}>
                      Resepsi
                    </h1>
                    <p className=" text-sm">Minggu, 12 Desember 2024</p>
                    <p className=" text-sm">Pukul 11:00 s/d Selesai</p>
                    <p className=" text-sm">
                      Tempat : Lapangan Voli RW 10 Perumahan Sukamaju
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section id="story">
              <div className=" w-full bg-[#EBDEC8] px-12 py-20">
                <h1
                  className={cn(
                    ' text-center text-[44px] font-extrabold',
                    fontTitle,
                  )}
                >
                  Our Story
                </h1>
                <div className="mt-8 flex flex-col gap-4">
                  <div className="flex flex-col">
                    <p className=" text-sm font-semibold">Awal Bertemu</p>
                    <p className=" text-sm">
                      Kami bertemu pertama kali saat masih duduk di bangku SMA.
                      Karena berada di kelas yang sama, kami seringkali
                      mengobrol dan bercanda bersama. Namun, kami tidak
                      menyadari jika ada perasaan sayang.
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <p className=" text-sm font-semibold">Perpisahan</p>
                    <p className=" text-sm">
                      Waktu memisahkan kami begitu lama. Empat tahun lamanya
                      setelah lulus sekolah menengah, kami tidak pernah saling
                      berkomunikasi.
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <p className=" text-sm font-semibold">Pertemuan Kembali</p>
                    <p className=" text-sm">
                      Acara reuni mempertemukan kami dan membuat kami semakin
                      dekat. Hingga kami merasa memiliki perasaan yang sama dan
                      menjalin hubungan.
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <p className=" text-sm font-semibold">Pernikahan</p>
                    <p className=" text-sm">
                      Perasaan cinta yang kuat membuat kami yakin menuju jenjang
                      pernikahan. Untuk menjalani hari-hari bersama dan
                      berbahagia dalam jalinan rumah tangga.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section id="gallery">
              <div className=" w-full bg-[#EBDEC8] px-[30px] py-20 pt-0">
                <div className="flex flex-col text-center">
                  <h1 className={cn(' text-[44px]', fontTitle)}>Our Moment</h1>
                  <p className=" text-sm">
                    Menciptakan kenangan adalah hadiah yang tak ternilai
                    harganya. Kenangan akan bertahan seumur hidup; benda-benda
                    hanya dalam waktu singkat.
                  </p>
                </div>
                <div className=" mt-8">
                  <InvitationGallery
                    type="grid"
                    galleries={INVITATION_GALLERIES_FAKER}
                  />
                </div>
              </div>
            </section>

            <section id="gift">
              <div className=" w-full bg-[#EBDEC8] px-10 py-20 pt-0">
                <h1 className={cn(fontTitle, 'text-center text-[64px]')}>
                  Send Gift
                </h1>

                <RadioGroup
                  defaultValue="transfer"
                  className=""
                >
                  <div className="flex space-x-2">
                    <RadioGroupItem
                      value="address"
                      id="address"
                    />
                    <Label htmlFor="address">
                      <div className=" space-y-1">
                        <p>Kirim Kado</p>
                        <p className=" font-normal">
                          Kirim kado ke alamat yang tertera
                        </p>
                      </div>
                    </Label>
                  </div>
                  <div className="flex space-x-2">
                    <RadioGroupItem
                      value="transfer"
                      id="transfer"
                    />
                    <Label htmlFor="transfer">
                      <div className=" space-y-1">
                        <p>Transfer</p>
                        <p className=" font-normal">
                          Transfer ke rekening yang tertera
                        </p>
                      </div>
                    </Label>
                  </div>
                </RadioGroup>

                <div className=" mt-6 flex w-full flex-col">
                  <div className=" relative ">
                    <div className=" absolute right-0 top-0">
                      <Image
                        src="/images/logo-bca.png"
                        width={84}
                        height={36}
                        className=" object-contain object-center"
                        alt="bca"
                      />
                    </div>
                    <p className="">BCA</p>
                    <div className=" flex items-center gap-1">
                      <p className=" font-semibold">01234567890</p>
                      <Copy size={16} />
                    </div>
                    <p className="">a/n Rachel Taylor</p>
                  </div>
                  <hr className=" my-6 border-[#034405]" />
                  <div className=" relative ">
                    <div className=" absolute right-0 top-0">
                      <Image
                        src="/images/logo-bri.png"
                        width={84}
                        height={36}
                        className=" object-contain object-center"
                        alt="bca"
                      />
                    </div>
                    <p className="">BCA</p>
                    <div className=" flex items-center gap-1">
                      <p className=" font-semibold">01234567890</p>
                      <Copy size={16} />
                    </div>
                    <p className="">a/n Rachel Taylor</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="wish">
              <div className=" w-full bg-[#36713A] px-12 py-20">
                <h1
                  className={cn(
                    ' text-center text-[44px] text-[#EBDEC8]',
                    fontTitle,
                  )}
                >
                  Wedding Wishes
                </h1>
                <div className=" mt-8 flex flex-col gap-4">
                  <Input
                    className=" rounded-none border-none bg-[#EBDEC8]"
                    placeholder="Nama Lengkap"
                  />
                  <Input
                    className=" rounded-none border-none bg-[#EBDEC8]"
                    placeholder="Alamat"
                  />
                  <Textarea
                    className=" rounded-none border-none bg-[#EBDEC8]"
                    placeholder="Ucapan"
                  />
                  <Button className=" rounded-none bg-[#EBDEC8] text-[#034405]">
                    Kirim
                  </Button>
                </div>

                <div className=" mt-8 flex flex-col gap-6">
                  <div className=" space-y-2 border-b border-b-[#EBDEC8] pb-2.5 text-[#EBDEC8]">
                    <>
                      <h1 className=" font-bold">Apdul</h1>
                      <p className=" text-sm">di Bandung</p>
                    </>
                    <p className=" text-sm">
                      “Semoga lancar sampai hari H dan menjadi keluarga yang
                      samawa, aamiin..”
                    </p>
                  </div>
                  <div className=" space-y-2 border-b border-b-[#EBDEC8] pb-2.5 text-[#EBDEC8]">
                    <>
                      <h1 className=" font-bold">Dilan</h1>
                      <p className=" text-sm">di Bandung</p>
                    </>
                    <p className=" text-sm">
                      “Semoga lancar sampai hari H dan menjadi keluarga yang
                      samawa, aamiin..”
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section id="footer">
              <div className=" w-full bg-[#EBDEC8] py-6 pb-20 text-center">
                <p className=" text-xs">Powered by</p>
                <h1 className="">Momentus</h1>
                <div className="mt-2 flex items-center justify-center gap-2">
                  <SiWhatsapp
                    className=" text-[#034405]"
                    size={12}
                  />
                  <SiInstagram
                    className=" text-[#034405]"
                    size={12}
                  />
                  <SiFacebook
                    className=" text-[#034405]"
                    size={12}
                  />
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
