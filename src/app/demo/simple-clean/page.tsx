"use client";

import BaseImageLightbox from "@/components/common/base-image-lightbox";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { comfortaa, roboto, rubik } from "@/constant/font.constant";
import useScrollspy from "@/hooks/use-scroll-spy";
import { cn } from "@/lib/utils";
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

export default function DemoPage() {
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

  // faker
  const [invitation] = useState({
    bride_name: "Adelia Wesaya",
    bride_instagram: "adelia_wesaya",
    bride_child_sequence: "Kedua",
    bride_father_name: "Dr. Andreas Sanusi S.E",
    bride_mother_name: "Dewi Yuliantara",
    groom_name: "Timothy Pardede S.Kom",
    groom_instagram: "timothy_pardd",
    groom_child_sequence: "Sulung",
    groom_father_name: "Bobby Pardede",
    groom_mother_name: "Jessica Putri",
    wedding_date: "2024-10-23T10:00:00+07:00",
    wedding_location:
      "Plataran Menteng, Jalan HOS. Cokroaminoto, RT.6/RW.4, Gondangdia, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta, Indonesia",
    wedding_reception_date: "2024-10-26T10:00:00+07:00",
    wedding_reception_location:
      "DoubleTree by Hilton Jakarta - Diponegoro Jakarta Pusat",
  });

  const [invitationStyle] = useState({
    invitation_theme: "traditional-java",
    groom_first: true,
  });

  const [invitationGallery] = useState([
    {
      id: 1,
      url: "/images/dummy/gallery-1.jpg",
    },
    {
      id: 2,
      url: "/images/dummy/gallery-2.jpg",
    },
    {
      id: 3,
      url: "/images/dummy/gallery-3.jpg",
    },
    {
      id: 4,
      url: "/images/dummy/gallery-4.jpg",
    },
    {
      id: 5,
      url: "/images/dummy/gallery-5.jpg",
    },
    {
      id: 6,
      url: "/images/dummy/gallery-6.jpg",
    },
    {
      id: 7,
      url: "/images/dummy/gallery-7.jpg",
    },
    {
      id: 8,
      url: "/images/dummy/gallery-8.jpg",
    },
    {
      id: 9,
      url: "/images/dummy/gallery-9.jpg",
    },
  ]);

  const [invitationStories] = useState([
    {
      title: "2019",
      description: "First time we meet.",
      image: "/images/traditional-java/story-image-1.jpg",
    },
    {
      title: "2021",
      description: "We decided to get engaged.",
      image: "/images/traditional-java/story-image-2.jpg",
    },
    {
      title: "2022",
      description: "Finally, we are husband and wife.",
      image: "/images/traditional-java/story-image-3.jpg",
    },
    {
      title: "Finally",
      description:
        "Akhirnya kita bersama didalam pernikahan yang sakral, semoga tuhan meridoi pernikahan kita.",
      image: "/images/traditional-java/story-image-4.jpg",
    },
  ]);

  const [invitationWishes] = useState([
    {
      id: 1,
      name: "Dee",
      location: "Bogor",
      message: "Beautiful 💕",
    },
    {
      id: 2,
      name: "Momentus",
      location: "Bekasi",
      message:
        "Beatiful design matters. happy for all of you that want going to married",
    },
  ]);

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
    () => invitationGallery.map((item) => ({ src: item.url })),
    [invitationGallery]
  );

  return (
    <>
      <div
        className={cn(
          " w-full h-screen fixed flex",
          roboto.className,
          "text-[#3b1f0e]"
        )}
      >
        <div className=" flex-1 bg-[url(/images/simple-clean/thumbnail.jpg)] bg-cover bg-center h-screen hidden lg:block">
          <div className=" w-full h-full bg-black/50 flex justify-center items-center">
            <h1
              className={cn(
                comfortaa.className,
                "text-3xl text-center text-white"
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
                  "text-[#000] h-8 flex items-center px-2.5 transition-all gap-2 rounded-full",
                  {
                    "bg-[#000] text-white": activeId === navigation.target,
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
          <div className=" absolute w-full h-screen bg-[url(/images/simple-clean/cover-background.jpg)] bg-cover bg-center z-[1] blur-sm brightness-75 block lg:hidden" />
          <div
            className=" w-full h-screen overflow-y-scroll absolute z-[2]"
            id="invitation-container"
          >
            <div className=" w-full h-screen max-w-[536px] mx-auto relative">
              <div className=" w-full z-[2] bg-[#d8d8d8]">
                <section
                  id="cover"
                  className=" w-full min-h-screen h-screen bg-[url(/images/simple-clean/cover-background.jpg)] bg-cover bg-center py-20 px-16"
                >
                  <div className=" w-full h-full flex flex-col gap-20">
                    <div className="flex flex-col items-center gap-8 flex-1">
                      <p className="">The Wedding of</p>
                      <div className=" space-y-2 text-center">
                        <h1
                          className={cn(
                            "flex items-center text-3xl",
                            comfortaa.className
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
                  className=" w-full py-20 px-16 bg-[#d8d8d8] bg-cover bg-center"
                >
                  <div className="flex flex-col items-center max-w-md text-center mx-auto">
                    <Image
                      src="/images/simple-clean/decoration-1.png"
                      width={360}
                      height={360}
                      alt=""
                    />
                    <div className=" mt-8">
                      <p className={cn(rubik.className)}>
                        وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُمْ مِنْ أَنْفُسِكُمْ
                        أَزْوَاجًا لِتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُمْ
                        مَوَدَّةً وَرَحْمَةً ۚ إِنَّ فِي ذَٰلِكَ لَآيَاتٍ
                        لِقَوْمٍ يَتَفَكَّرُونَ{" "}
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
                  </div>
                </section>
                <section id="couple">
                  <div className=" w-full grid grid-cols-2 bg-[#fff]">
                    <div className=" w-full aspect-square relative">
                      <Image
                        src="/images/traditional-java/bride-image.jpeg"
                        fill
                        alt=""
                        className=" object-cover object-center"
                      />
                    </div>
                    <div className=" p-4">
                      <h1 className=" text-2xl">{invitation.bride_name}</h1>

                      <div className="flex items-center gap-2">
                        <SiInstagram size={12} />
                        <p className=" text-sm">{invitation.bride_instagram}</p>
                      </div>
                      <div className=" mt-4 text-sm">
                        <p>Putri {invitation.bride_child_sequence} dari</p>
                        <p>Bapak {invitation.bride_father_name}</p>
                        <p>& Ibu {invitation.bride_mother_name}</p>
                      </div>
                    </div>
                    <div className=" p-4">
                      <h1 className=" text-2xl">{invitation.groom_name}</h1>

                      <div className="flex items-center gap-2">
                        <SiInstagram size={12} />
                        <p className=" text-sm">{invitation.groom_instagram}</p>
                      </div>
                      <div className=" mt-4 text-sm">
                        <p>Putri {invitation.groom_child_sequence} dari</p>
                        <p>Bapak {invitation.groom_father_name}</p>
                        <p>& Ibu {invitation.groom_mother_name}</p>
                      </div>
                    </div>
                    <div className=" w-full aspect-square relative">
                      <Image
                        src="/images/traditional-java/groom-image.jpeg"
                        fill
                        alt=""
                        className=" object-cover object-center"
                      />
                    </div>
                  </div>
                </section>
                <section
                  id="story"
                  className=" w-full bg-[url(/images/simple-clean/bg-1.png)] bg-white bg-contain"
                >
                  <div className=" w-full flex flex-col px-16 py-20">
                    <h1
                      className={cn(
                        " text-3xl text-center",
                        comfortaa.className
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
                              className={cn(" text-4xl", comfortaa.className)}
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
                  className=" w-full bg-[url(/images/simple-clean/bg-1.png)] bg-[#d8d8d8] bg-contain bg-center"
                >
                  <div className=" w-full flex flex-col py-20 px-8">
                    <div className="flex flex-col text-center">
                      <h1
                        className={cn(
                          " text-3xl leading-relaxed",
                          comfortaa.className
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
                      {invitationGallery.map((image, i) => (
                        <div
                          key={image.id}
                          className={cn(
                            " w-full h-full aspect-square relative cursor-pointer",
                            {
                              "row-span-2 aspect-[1/2]": i % 3 === 0,
                            }
                          )}
                        >
                          <Image
                            src={image.url}
                            alt=""
                            fill
                            className=" object-cover object-center"
                            onClick={() => {
                              setPhotoActiveIndex(i);
                            }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
                <section id="date" className=" w-full bg-[#525252] ">
                  <div className=" w-full h-fit ">
                    <div className=" w-full flex flex-col py-20 px-8 items-center">
                      <div className=" w-full bg-white p-10 py-16">
                        <h1
                          className={cn(
                            " text-center text-3xl",
                            comfortaa.className
                          )}
                        >
                          Save The Date
                        </h1>
                        <div className=" mt-16 relative">
                          <div className="flex text-[#3b1f0e] flex-col items-center w-full gap-4 text-center justify-center h-full">
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
                                size="lg"
                                className="rounded-none bg-[#000] font-normal"
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
                  className=" w-full bg-[#d8d8d8]  overflow-hidden"
                >
                  <div className=" flex flex-col py-20">
                    <div className="flex flex-col gap-6 w-[90%] items-start justify-center bg-white p-6">
                      <div className=" border-b w-fit py-8 border-[#3b1f0e]">
                        <h1 className={cn(" text-3xl", comfortaa.className)}>
                          Akad Nikah
                        </h1>
                      </div>
                      <div className="">
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
                        className=" bg-transparent border-black rounded-none font-normal"
                      >
                        Lihat Lokasi
                      </Button>
                    </div>
                    <div className="flex flex-col gap-6 w-[90%] ml-auto mt-16 items-end justify-center bg-white p-6">
                      <div className=" border-b w-fit py-8 border-[#3b1f0e]">
                        <h1
                          className={cn(
                            " text-3xl text-center",
                            comfortaa.className
                          )}
                        >
                          Resepsi
                        </h1>
                      </div>
                      <div className=" text-end">
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
                        className=" bg-transparent border-black rounded-none font-normal"
                      >
                        Lihat Lokasi
                      </Button>
                    </div>
                  </div>
                </section>

                <section id="extra">
                  <div className=" w-full p-8 py-16 bg-[url(/images/simple-clean/bg-1.png)] bg-cover bg-center bg-white shadow-lg flex gap-6 flex-col items-center">
                    <h1 className={cn(" text-3xl", comfortaa.className)}>
                      Live Streaming
                    </h1>
                    <p className="">Silahkan untuk join live streaming.</p>
                    <Button className=" bg-[#000] rounded-none">
                      <Video size={16} />
                      Live Streaming
                    </Button>
                  </div>
                  <div className=" w-full p-8 py-16 bg-[#d8d8d8] shadow-lg flex gap-6 flex-col items-center">
                    <h1 className={cn(" text-3xl", comfortaa.className)}>
                      Kirim Hadiah
                    </h1>
                    <p className="">
                      Catatan kado atau kata kata terimakasih untuk yang
                      memberikan hadiah.
                    </p>
                    <Button className=" bg-[#000] rounded-none">
                      <Gift size={16} />
                      Kirim Hadiah
                    </Button>
                  </div>
                </section>

                <section id="wishes">
                  <div className=" w-full py-20 px-8 bg-[#fff] bg-center bg-cover relative">
                    <h1
                      className={cn(
                        " text-center text-3xl z-[3]",
                        comfortaa.className
                      )}
                    >
                      Ucapan & Doa
                    </h1>
                    <div className=" mt-10 w-full">
                      <div className="flex flex-col gap-4 divide-y">
                        {invitationWishes.map((wish) => (
                          <div
                            className="flex gap-4 items-start pt-4 first:pt-0"
                            key={wish.id}
                          >
                            <div className=" w-8 aspect-square rounded-full text-white flex justify-center items-center bg-[#000]">
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
                    <div className=" mt-4 bg-[#d8d8d8] w-full p-8 pb-12 flex flex-col gap-2">
                      <h1 className="">Kirim Ucapan</h1>
                      <Input
                        className=" border-none text-white focus-visible:ring-0 focus-visible:outline-none"
                        placeholder="Nama"
                      />
                      <Textarea
                        className=" border-none text-white focus-visible:ring-0 focus-visible:outline-none"
                        placeholder="Alamat"
                      />
                      <Textarea
                        className=" border-none text-white focus-visible:ring-0 focus-visible:outline-none"
                        placeholder="Pesan"
                      />
                      <Button className=" rounded-none bg-[#000]">
                        Kirim Sekarang
                      </Button>
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
