"use client";

import { cn } from "@/lib/utils";
import { Calendar, Gallery, Lovely, Magicpen, Map1 } from "iconsax-react";
import { Rubik } from "next/font/google";
import Image from "next/image";
import React, { useState } from "react";
import { SiInstagram } from "react-icons/si";
import { Element, Link as RSLink } from "react-scroll";

const rubik = Rubik({ subsets: ["arabic"] });

export default function DemoPage() {
  const [active, setActive] = useState<string>("");
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
      label: "Story",
      target: "story",
      icon: Magicpen,
    },
  ];
  return (
    <div className={cn(" w-full", rubik.className)}>
      <div className=" w-full overflow-hidden h-screen bg-[url(/images/demo-1/cover-background.jpg)] brightness-25 fixed flex">
        <div className="  w-[900px] hidden lg:block h-screen bg-[url(/images/demo-1/thumbnail.jpg)] bg-cover bg-center relative">
          <div className=" w-12 p-2 flex flex-col absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-[#d8cfc9]">
            {navigations.map((navigation) => (
              <RSLink
                key={navigation.target}
                to={navigation.target}
                spy={true}
                smooth={true}
                duration={500}
                offset={50}
                isDynamic
                hashSpy
                className={cn(
                  "flex gap-2 cursor-pointer items-center w-fit h-[30px] rounded-full px-2 text-[#3b1f0e]",
                  { "bg-[#3b1f0e] text-white": active === navigation.target }
                )}
                onSetActive={() => setActive(navigation.target)}
                onSetInactive={() => setActive("")}
                activeClass="text-white"
                containerId="invitation-container"
              >
                <navigation.icon size={16} />
                {active === navigation.target && (
                  <p className=" text-xs">{navigation.label}</p>
                )}
              </RSLink>
            ))}
          </div>
        </div>
        <Element
          name="invitation-container"
          id="invitation-container"
          className=" flex-1 max-w-[512px] lg:max-w-full mx-auto bg-red-500 overflow-y-auto h-screen"
        >
          <div className=" w-full h-screen bg-[url(/images/demo-1/cover-background.jpg)] bg-cover bg-center flex flex-col items-center p-8">
            <div className=" w-44 aspect-square rounded-full overflow-hidden relative">
              <Image
                src="/images/demo-1/couple-image.jpg"
                fill
                alt="couple"
                className=" object-cover object-center"
              />
            </div>
            <div className=" text-center mt-6 flex-1 justify-center flex flex-col">
              <p className=" text-sm">The Wedding of</p>
              <h1 className=" text-4xl mt-4">Sekar & Hilman</h1>
              <p className=" mt-4 flex gap-2 justify-center">
                19<span>.</span>10<span>.</span>2024
              </p>
            </div>

            <div className="flex flex-col items-center gap-1">
              <div className=" w-6 h-10 rounded-full border-2 border-white flex justify-center items-center">
                <div className=" w-1 h-3 rounded-full animate-bounce bg-yellow-950"></div>
              </div>
              <p className=" text-sm">scroll</p>
            </div>
          </div>

          <div className=" bg-[url(/images/demo-1/cover-background.jpg)] w-full py-16 bg-cover bg-center flex flex-col justify-center items-center p-8">
            <div className=" max-w-xs flex flex-col gap-4 text-center">
              <p>
                وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُمْ مِنْ أَنْفُسِكُمْ أَزْوَاجًا
                لِتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُمْ مَوَدَّةً وَرَحْمَةً
                ۚ إِنَّ فِي ذَٰلِكَ لَآيَاتٍ لِقَوْمٍ يَتَفَكَّرُونَ{" "}
              </p>
              <p>
                Artinya: “Dan di antara tanda-tanda kekuasaan-Nya ialah Dia
                menciptakan untukmu isteri-isteri dari jenismu sendiri, supaya
                kamu cenderung dan merasa tenteram kepadanya, dan dijadikan-Nya
                diantaramu rasa kasih dan sayang. Sesungguhnya pada yang
                demikian itu benar-benar terdapat tanda-tanda bagi kaum yang
                berfikir.” (QS. Ar-Rum: 21)
              </p>
            </div>
          </div>

          <Element name="couple">
            <div className=" w-full p-8 py-16 flex flex-col justify-center items-center bg-[url(/images/demo-1/cover-background.jpg)] bg-center bg-cover">
              <div className=" relative">
                <div className=" w-[285px] h-[355px] relative rounded-[80%] overflow-hidden">
                  <Image
                    src="/images/demo-1/bride-image.jpeg"
                    fill
                    alt=""
                    className=" object-cover object-center"
                  />
                </div>
                <div className=" -top-4 -left-2 w-[300px] h-[380px] bg-[url(/images/demo-1/profile-frame.png)] bg-center bg-cover absolute"></div>
                <div className=" w-[120px] absolute bottom-0 -right-10 h-[200px] bg-[url(/images/demo-1/profile-ornament.png)] bg-contain bg-center rotate-[30deg]" />
              </div>

              <div className=" mt-8 text-center">
                <h1 className=" text-2xl">Adinda Mawaria</h1>
                <div className=" text-center flex items-center gap-1 justify-center">
                  <SiInstagram />
                  <p className=" text-sm">adinda.mawaria</p>
                </div>
                <p className=" mt-6 text-sm">
                  Putri bungsu dari <br />
                  Bapak Sanusi S.M. <br />& Ibu Jubaedah
                </p>
              </div>
            </div>
          </Element>

          <Element name="gallery">
            <div className=" w-full h-screen bg-purple-500"></div>
          </Element>
          <Element name="date">
            <div className=" w-full h-screen bg-sky-500"></div>
          </Element>
          <Element name="location">
            <div className=" w-full h-screen bg-indigo-500"></div>
          </Element>
          <Element name="story">
            <div className=" w-full h-screen bg-pink-500"></div>
          </Element>
        </Element>
      </div>
    </div>
  );
}
