"use client";

import BaseImageLightbox from "@/components/common/base-image-lightbox";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { javassoul, overlock, rubik } from "@/constant/font.constant";
import useScrollspy from "@/hooks/use-scroll-spy";
import { cn } from "@/lib/utils";
import {
  TInvitation,
  TInvitationGallery,
  TInvitationStory,
  TInvitationStyle,
  TInvitationWish,
} from "@/types/invitation.type";
import { getFirstName, getInitials } from "@/utils/string";
import {
  Calendar,
  CalendarAdd,
  Clock,
  Gallery,
  Gift,
  Location,
  Lovely,
  Magicpen,
  Map1,
  Video,
} from "iconsax-react";
import Image from "next/image";
import Link from "next/link";
import React, { useCallback, useMemo, useState } from "react";
import { RiDiscFill } from "react-icons/ri";
import { SiInstagram } from "react-icons/si";
import Lightbox, { SlideImage } from "yet-another-react-lightbox";
import Counter from "yet-another-react-lightbox/plugins/counter";
import "yet-another-react-lightbox/plugins/counter.css";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/styles.css";
import InvitationGallery from "../shared/invitation-gallery";

type TTraditionalJavaProps = {
  invitation: TInvitation;
  invitationStyle: TInvitationStyle;
  invitationStories: TInvitationStory[];
  invitationGalleries: TInvitationGallery[];
  invitationWishes: TInvitationWish[];
};

export default function TraditionalJava({
  invitation,
  invitationStyle,
  invitationStories,
  invitationGalleries,
  invitationWishes,
}: TTraditionalJavaProps) {
  // state
  const [paused, setPaused] = useState(false);

  // navigation
  const navigations = [
    {
      label: "Couple",
      target: "couple",
      icon: Lovely,
    },
    {
      label: "Gallery",
      target: "gallery",
      icon: Gallery,
    },
    {
      label: "Date",
      target: "date",
      icon: Calendar,
    },
    {
      label: "Location",
      target: "location",
      icon: Map1,
    },
    {
      label: "Wishes",
      target: "wishes",
      icon: Magicpen,
    },
  ];

  const activeId = useScrollspy(
    navigations.map((item) => item.target),
    5
  );

  // handle scroll to element
  const handleScrollTo = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
      e.stopPropagation();
      e.preventDefault();

      const container = document.querySelector("#invitation-container");
      const el = document.getElementById(id);
      if (container) {
        if (el) {
          container.scrollTo({
            top: el.offsetTop,
            behavior: "smooth",
          });
        }
      }
    },
    []
  );

  const [photoActiveIndex, setPhotoActiveIndex] = React.useState(-1);
  const photos = useMemo<SlideImage[]>(
    () => invitationGalleries.map((item) => ({ src: item.url })),
    [invitationGalleries]
  );

  return (
    <>
      <div
        className={cn(
          " w-full h-screen fixed flex",
          overlock.className,
          "text-[#3b1f0e]"
        )}
      >
        <div className=" flex-1 bg-[url(/images/traditional-java/thumbnail.jpg)] bg-cover bg-center h-screen hidden lg:block">
          <div className=" w-full h-full bg-black/50 flex justify-center items-center">
            <h1
              className={cn(
                javassoul.className,
                "text-5xl text-center text-white"
              )}
            >
              {getFirstName(invitation.bride_name)}
              <br />&<br />
              {getFirstName(invitation.groom_name)}
            </h1>
          </div>
        </div>
        <div className=" lg:w-[536px] w-full h-screen relative">
          <div
            onClick={() => setPaused((prev) => !prev)}
            className={cn(
              " p-3 rounded-full animate-spin aspect-square bg-black absolute bottom-24 right-4 min-[512px]:right-[calc(50%-250px)] z-[9]",
              { paused: paused }
            )}
            style={{ animationDuration: "10s" }}
          >
            <RiDiscFill className=" text-white" size={20} />
          </div>
          <div className=" w-fit rounded-full items-center flex gap-2 px-2 py-2 bg-[#fff] absolute bottom-4 left-1/2 -translate-x-1/2 z-[9]">
            {navigations.map((navigation, i) => (
              <Link
                href={`#${navigation.target}`}
                onClick={(e) => handleScrollTo(e, navigation.target)}
                className={cn(
                  "text-[#3b1f0e] h-8 flex items-center px-2.5 transition-all gap-2 rounded-full",
                  {
                    "bg-[#3b1f0e] text-white": activeId === navigation.target,
                  }
                )}
                key={i}
              >
                <navigation.icon size={16} />
                {activeId === navigation.target && (
                  <p className=" text-xs">{navigation.label}</p>
                )}
              </Link>
            ))}
          </div>
          <div className=" absolute w-full h-screen bg-[url(/images/traditional-java/cover-background.jpg)] bg-cover bg-center z-[1] blur-sm brightness-75 block lg:hidden" />
          <div
            className=" w-full h-screen overflow-y-scroll absolute z-[2]"
            id="invitation-container"
          >
            <div className=" w-full h-screen max-w-[536px] mx-auto relative">
              <div className=" w-full z-[2] bg-[#d8cfc9]">
                <section
                  id="cover"
                  className=" w-full min-h-screen h-screen bg-[url(/images/traditional-java/cover-background.jpg)] bg-cover bg-center py-20 px-16"
                >
                  <div className=" w-full h-full flex flex-col gap-20">
                    <div className="flex flex-col items-center gap-8 flex-1">
                      <p className="">The Wedding of</p>
                      <div className=" space-y-2 text-center">
                        <h1
                          className={cn(
                            "flex items-center text-5xl",
                            javassoul.className
                          )}
                        >
                          <span>{getFirstName(invitation.groom_name)}</span>
                          <span>&nbsp;&&nbsp;</span>
                          <span>{getFirstName(invitation.bride_name)}</span>
                        </h1>
                        <p className=" tracking-widest">19 . 10 . 2024</p>
                      </div>
                    </div>

                    <div className=" mx-auto flex flex-col items-center gap-2">
                      <div className=" w-6 h-9 flex justify-center items-center border-2 border-[#3b1f0e] relative rounded-full">
                        <div className=" w-1 h-2.5 -mt-2 animate-bounce bg-[#3b1f0e] rounded-full" />
                      </div>
                      <p className=" text-xs font-medium text-[#3b1f0e]">
                        scroll
                      </p>
                    </div>
                  </div>
                </section>
                <section
                  id="quote"
                  className=" w-full py-20 px-16 bg-[url(/images/traditional-java/quote-background.jpg)] bg-cover bg-center"
                >
                  <div className="flex flex-col items-center max-w-xs text-center mx-auto">
                    <p className={cn(rubik.className)}>
                      وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُمْ مِنْ أَنْفُسِكُمْ
                      أَزْوَاجًا لِتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُمْ
                      مَوَدَّةً وَرَحْمَةً ۚ إِنَّ فِي ذَٰلِكَ لَآيَاتٍ لِقَوْمٍ
                      يَتَفَكَّرُونَ{" "}
                    </p>
                    <p>
                      Artinya: “Dan di antara tanda-tanda kekuasaan-Nya ialah
                      Dia menciptakan untukmu isteri-isteri dari jenismu
                      sendiri, supaya kamu cenderung dan merasa tenteram
                      kepadanya, dan dijadikan-Nya diantaramu rasa kasih dan
                      sayang. Sesungguhnya pada yang demikian itu benar-benar
                      terdapat tanda-tanda bagi kaum yang berfikir.” (QS.
                      Ar-Rum: 21)
                    </p>
                  </div>
                </section>
                <section
                  id="couple"
                  className=" w-full bg-[url(/images/traditional-java/bg-repeat.png)] bg-contain"
                >
                  <div className="flex flex-col items-center w-full gap-16 py-20 px-16 ">
                    {/* begin: bride */}
                    <div className="flex flex-col gap-8">
                      <div className=" w-[285px] h-[355px] relative">
                        <div className=" w-full h-full overflow-hidden rounded-[50%] relative">
                          <Image
                            src="/images/traditional-java/bride-image.jpeg"
                            fill
                            alt=""
                            className=" object-cover object-center"
                          />
                        </div>
                        <div className=" w-full h-full before:content-[''] before:bg-[url(/images/traditional-java/profile-frame.png)] before:absolute before:inset-0 before:bg-contain before:scale-[1.1]"></div>
                      </div>

                      <div className=" text-center">
                        <h1 className=" text-2xl">{invitation.bride_name}</h1>

                        <div className="flex items-center gap-2 justify-center">
                          <SiInstagram size={12} />
                          <p className=" text-sm">
                            {invitation.bride_instagram}
                          </p>
                        </div>
                        <div className=" text-center mt-4 text-sm">
                          <p>Putri {invitation.bride_child_sequence} dari</p>
                          <p>Bapak {invitation.bride_father_name}</p>
                          <p>& Ibu {invitation.bride_mother_name}</p>
                        </div>
                      </div>
                    </div>
                    {/* end: bride */}

                    {/* begin: groom */}
                    <div className="flex flex-col gap-8">
                      <div className=" w-[285px] h-[355px] relative">
                        <div className=" w-full h-full overflow-hidden rounded-[50%] relative">
                          <Image
                            src="/images/traditional-java/groom-image.jpeg"
                            fill
                            alt=""
                            className=" object-cover object-center"
                          />
                        </div>
                        <div className=" w-full h-full before:content-[''] before:bg-[url(/images/traditional-java/profile-frame.png)] before:absolute before:inset-0 before:bg-contain before:scale-[1.1]"></div>
                      </div>

                      <div className=" text-center">
                        <h1 className=" text-2xl">{invitation.groom_name}</h1>

                        <div className="flex items-center gap-2 justify-center">
                          <SiInstagram size={12} />
                          <p className=" text-sm">
                            {invitation.groom_instagram}
                          </p>
                        </div>
                        <div className=" text-center mt-4 text-sm">
                          <p>Putri {invitation.groom_child_sequence} dari</p>
                          <p>Bapak {invitation.groom_father_name}</p>
                          <p>& Ibu {invitation.groom_mother_name}</p>
                        </div>
                      </div>
                    </div>
                    {/* end: groom */}
                  </div>
                </section>
                <section
                  id="story"
                  className=" w-full bg-[url(/images/traditional-java/bg-repeat.png)] bg-contain"
                >
                  <div className=" w-full flex flex-col px-16 py-20">
                    <h1
                      className={cn(
                        " text-5xl text-center",
                        javassoul.className
                      )}
                    >
                      Our Love Story
                    </h1>
                    <div className="flex flex-col mt-16 gap-8">
                      {invitationStories.map((story, i) => (
                        <div
                          key={i}
                          className=" w-full p-6 bg-[url(/images/traditional-java/quote-background.jpg)] bg-cover bg-center rounded-[120px]"
                        >
                          <div className=" w-full aspect-square relative rounded-t-[96px] overflow-hidden">
                            <Image
                              src={story.image}
                              fill
                              alt=""
                              className=" object-cover object-center"
                            />
                          </div>
                          <div className=" p-8 text-center space-y-4">
                            <h1
                              className={cn(" text-4xl", javassoul.className)}
                            >
                              {story.title}
                            </h1>
                            <p className="">{story.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
                <section
                  id="gallery"
                  className=" w-full bg-[url(/images/traditional-java/quote-background.jpg)] bg-cover bg-center"
                >
                  <div className=" w-full flex flex-col py-20 px-8">
                    <div className="flex flex-col text-center">
                      <h1
                        className={cn(
                          " text-5xl leading-relaxed",
                          javassoul.className
                        )}
                      >
                        Moment Yang Berharga
                      </h1>
                      <p className=" text-center">
                        &apos;Menciptakan kenangan adalah hadiah yang tak
                        ternilai harganya. Kenangan akan bertahan seumur hidup;
                        benda-benda hanya dalam waktu singkat.&apos;
                      </p>
                    </div>

                    <div className=" mt-8 grid grid-cols-3 gap-2">
                      <InvitationGallery
                        galleries={invitationGalleries}
                        type={invitationStyle.gallery_style}
                      />
                    </div>
                  </div>
                </section>
                <section
                  id="date"
                  className=" w-full bg-[url(/images/traditional-java/quote-background.jpg)] shadow-[inner_2000px_0_0_0_rgba(156,136,127,0.7)] bg-cover bg-center"
                >
                  <div className=" w-full h-fit bg-[rgba(156,136,127,0.5)]">
                    <div className=" w-full flex flex-col py-20 px-8 items-center">
                      <h1
                        className={cn(
                          " text-center text-5xl",
                          javassoul.className
                        )}
                      >
                        Save The Date
                      </h1>

                      <div className=" mt-16 relative">
                        <div className=" absolute top-20">
                          <Image
                            src="/images/traditional-java/decoration-1.png"
                            width={356}
                            height={356}
                            className=" object-contain object-center"
                            alt=""
                          />
                        </div>
                        <div className=" absolute top-[196px] z-[2] -left-8">
                          <Image
                            src="/images/traditional-java/decoration-3.png"
                            width={124}
                            height={124}
                            className=" object-contain object-center"
                            alt=""
                          />
                        </div>
                        <div className=" absolute top-[196px] z-[2] scale-x-[-1] -right-8">
                          <Image
                            src="/images/traditional-java/decoration-3.png"
                            width={124}
                            height={124}
                            className=" object-contain object-center"
                            alt=""
                          />
                        </div>
                        <div className=" countdown-wrapper w-[360px] h-[568px] bg-[#d8cfc9]">
                          <div className="flex text-[#3b1f0e] flex-col items-center pt-[256px] w-full gap-4 text-center py-20 justify-center h-full">
                            <p className=" text-sm">Sabtu, 19 Oktober 2024</p>
                            <div className="flex items-center justify-center gap-4">
                              <div className=" text-2xl">
                                <p>10</p>
                                <p className=" text-sm">Hari</p>
                              </div>
                              <div className="text-2xl">
                                <p>12</p>
                                <p className=" text-sm">Jam</p>
                              </div>
                              <div className="text-2xl">
                                <p>31</p>
                                <p className=" text-sm">Menit</p>
                              </div>
                              <div className="text-2xl">
                                <p>24</p>
                                <p className=" text-sm">Detil</p>
                              </div>
                            </div>
                            <div className=" mt-8">
                              <Button
                                size="sm"
                                className="rounded-full bg-[#5a574e] font-normal"
                              >
                                <CalendarAdd size={16} />
                                Tambah ke Kalendar
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section
                  id="location"
                  className=" w-full bg-[url(/images/traditional-java/quote-background.jpg)] bg-cover bg-center overflow-hidden"
                >
                  <div className=" w-full flex flex-col py-20 px-8">
                    <div className=" w-full py-20 px-8 rounded-[120px] bg-white/80 shadow-lg bg-[url(/images/traditional-java/bg-repeat.png)] bg-contain relative">
                      <div className=" absolute scale-[1.2] -top-10 left-0 w-full">
                        <div className=" w-full aspect-video relative">
                          <Image
                            src="/images/traditional-java/decoration-4.png"
                            fill
                            alt=""
                            className=" object-contain object-center"
                          />
                        </div>
                      </div>
                      <div className=" absolute scale-[1.1] -bottom-10 scale-y-[-1] left-0 w-full">
                        <div className=" w-full aspect-video relative">
                          <Image
                            src="/images/traditional-java/decoration-4.png"
                            fill
                            alt=""
                            className=" object-contain object-center"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col gap-6 items-center justify-center">
                        <div className=" border-b w-fit py-8 border-[#3b1f0e]">
                          <h1
                            className={cn(
                              " text-5xl text-center",
                              javassoul.className
                            )}
                          >
                            Akad Nikah
                          </h1>
                        </div>
                        <div className=" text-center">
                          <p>Jumat, 2 April 2023</p>
                          <p className=" whitespace-pre-wrap">
                            <Clock size={16} className=" inline-block" />
                            &nbsp;pukul 09:00 WIB - selesai
                          </p>
                          <p className=" whitespace-pre-wrap">
                            <Location className=" inline-block" size={16} />
                            &nbsp;Plataran Menteng, Jalan HOS. Cokroaminoto,
                            RT.6/RW.4, Gondangdia, Kota Jakarta Pusat, Daerah
                            Khusus Ibukota Jakarta, Indonesia
                          </p>
                        </div>
                        <Button
                          variant="outline"
                          className=" bg-transparent border-black rounded-full font-normal"
                        >
                          Lihat Lokasi
                        </Button>
                      </div>
                      <div className="flex flex-col gap-6 mt-16 items-center justify-center">
                        <div className=" border-b w-fit py-8 border-[#3b1f0e]">
                          <h1
                            className={cn(
                              " text-5xl text-center",
                              javassoul.className
                            )}
                          >
                            Resepsi
                          </h1>
                        </div>
                        <div className=" text-center">
                          <p>Jumat, 2 April 2023</p>
                          <p className=" whitespace-pre-wrap">
                            <Clock size={16} className=" inline-block" />
                            &nbsp;pukul 09:00 WIB - selesai
                          </p>
                          <p className=" whitespace-pre-wrap">
                            <Location className=" inline-block" size={16} />
                            &nbsp;Plataran Menteng, Jalan HOS. Cokroaminoto,
                            RT.6/RW.4, Gondangdia, Kota Jakarta Pusat, Daerah
                            Khusus Ibukota Jakarta, Indonesia
                          </p>
                        </div>
                        <Button
                          variant="outline"
                          className=" bg-transparent border-black rounded-full font-normal"
                        >
                          Lihat Lokasi
                        </Button>
                      </div>
                    </div>
                  </div>
                </section>

                <section id="extra">
                  <div className=" w-full py-20 px-10 gap-8 bg-[url(/images/traditional-java/bg-texture-1.png)] bg-center bg-cover flex flex-col">
                    <div className=" w-full p-8 rounded-2xl py-16 bg-[url(/images/traditional-java/bg-repeat.png)] bg-contain bg-center bg-white/80 shadow-lg flex gap-6 flex-col items-center">
                      <h1 className={cn(" text-5xl", javassoul.className)}>
                        Live Streaming
                      </h1>
                      <p className="">Silahkan untuk join live streaming.</p>
                      <Button className=" bg-[#3b1f0e] rounded-full">
                        <Video size={16} />
                        Live Streaming
                      </Button>
                    </div>
                    <div className=" w-full p-8 rounded-2xl py-16 bg-[url(/images/traditional-java/bg-repeat.png)] bg-contain bg-center bg-white/80 shadow-lg flex gap-6 flex-col items-center">
                      <h1 className={cn(" text-5xl", javassoul.className)}>
                        Kirim Hadiah
                      </h1>
                      <p className="">
                        Catatan kado atau kata kata terimakasih untuk yang
                        memberikan hadiah.
                      </p>
                      <Button className=" bg-[#3b1f0e] rounded-full">
                        <Gift size={16} />
                        Kirim Hadiah
                      </Button>
                    </div>
                    <div className=" w-full p-8 rounded-2xl py-16 bg-[url(/images/traditional-java/bg-repeat.png)] bg-contain bg-center bg-white/80 shadow-lg flex gap-6 flex-col items-center">
                      <h1 className={cn(" text-5xl", javassoul.className)}>
                        Instagram Filter
                      </h1>
                      <p className="">
                        Bagikan momentmu pakai Instagram Filter dan bagikan
                        Bersama kami.
                      </p>
                      <Button className=" bg-[#3b1f0e] rounded-full">
                        <SiInstagram size={16} />
                        Filter Instagram
                      </Button>
                    </div>
                  </div>
                </section>

                <section id="wishes">
                  <div className=" w-full py-20 px-8 bg-[url(/images/traditional-java/bg-texture-1.png)] bg-center bg-cover relative">
                    <div className=" absolute -top-24 z-[2] w-full left-0">
                      <div className=" w-full aspect-square relative">
                        <Image
                          src="/images/traditional-java/decoration-5.png"
                          fill
                          alt=""
                          className=" object-cover object-center"
                        />
                      </div>
                    </div>
                    <div className=" w-full p-4 rounded-[80px] border-[6px] pt-56 border-double">
                      <h1
                        className={cn(
                          " text-center text-5xl z-[3]",
                          javassoul.className
                        )}
                      >
                        Ucapan & Doa
                      </h1>
                      <div className=" mt-10 rounded-t-[64px] bg-[#9c887f] w-full p-8">
                        <div className="flex flex-col gap-4">
                          {invitationWishes.map((wish) => (
                            <div
                              className="flex gap-4 items-start"
                              key={wish.id}
                            >
                              <div className=" w-8 aspect-square rounded-full text-white flex justify-center items-center bg-[#3b1f0e]">
                                <p className=" text-sm">
                                  {getInitials(wish.name)}
                                </p>
                              </div>
                              <div className="flex flex-col flex-1">
                                <h1 className=" text-sm font-medium">
                                  {wish.name}
                                </h1>
                                <p className=" text-xs">di {wish.location}</p>
                                <p className=" text-sm mt-2">
                                  &quot;{wish.message}&quot;
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className=" mt-4 rounded-b-[64px] bg-[#9c887f] w-full p-8 pb-12 flex flex-col gap-2">
                        <h1 className="">Kirim Ucapan</h1>
                        <Input
                          className="bg-[#d8cfc9] border-none text-white focus-visible:ring-0 focus-visible:outline-none"
                          placeholder="Nama"
                        />
                        <Textarea
                          className="bg-[#d8cfc9] border-none text-white focus-visible:ring-0 focus-visible:outline-none"
                          placeholder="Alamat"
                        />
                        <Textarea
                          className="bg-[#d8cfc9] border-none text-white focus-visible:ring-0 focus-visible:outline-none"
                          placeholder="Pesan"
                        />
                        <Button className=" rounded-full bg-[#3b1f0e]">
                          Kirim Sekarang
                        </Button>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Lightbox
        styles={{
          container: { backgroundColor: "#000" },
          icon: { color: "#FFF", boxShadow: "none" },
        }}
        index={photoActiveIndex}
        slides={photos}
        plugins={[Thumbnails, Counter]}
        counter={{ container: { style: { top: 0 } } }}
        open={photoActiveIndex >= 0}
        close={() => setPhotoActiveIndex(-1)}
        render={{ slide: BaseImageLightbox }}
      />
    </>
  );
}
