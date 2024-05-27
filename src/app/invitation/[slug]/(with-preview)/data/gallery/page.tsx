"use client";

import HeadingConfigurationSection from "@/components/common/heading-configuration-section";
import InputItem from "@/components/common/input-item";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { INVITATION_GALLERIES_FAKER } from "@/constant/faker.constant";
import { cn } from "@/lib/utils";
import { TInvitationGallery } from "@/types/invitation.type";
import { reloadIframe } from "@/utils/iframe";
import { Trash } from "iconsax-react";
import Image from "next/image";
import { useCallback, useState } from "react";
import { LuPlus } from "react-icons/lu";

export default function GalleryPage() {
  const [invitationGalleries, setInvitationGalleries] = useState<
    TInvitationGallery[]
  >(INVITATION_GALLERIES_FAKER);

  // tabs menu
  const TABS_MENU = [
    {
      label: "Konfigurasi",
      value: "configuration",
    },
    {
      label: "Photo",
      value: "photo",
    },
  ];

  // handle delete photo
  const handleDeletePhoto = useCallback(
    (id: number) => {
      const newGalleries: TInvitationGallery[] = invitationGalleries.filter(
        (item) => item.id !== id
      );

      setInvitationGalleries(newGalleries);
      reloadIframe("invitation-galleries-updated", {
        invitationGalleries: newGalleries,
      });
    },
    [invitationGalleries]
  );

  return (
    <div className=" p-6 w-full">
      <HeadingConfigurationSection
        title="Gallery"
        subtitle="Tambahkan foto-foto spesial untuk membagikan momen berharga dalam perjalanan cinta kalian."
      />
      <Tabs defaultValue="photo" className=" w-full mt-4">
        <TabsList className=" bg-transparent border-b rounded-none px-0 my-0 w-full justify-start gap-4">
          {TABS_MENU.map((menu) => (
            <TabsTrigger
              key={menu.value}
              value={menu.value}
              className=" px-0 border-b-2 border-transparent data-[state=active]:border-pink-600 rounded-none h-10"
            >
              {menu.label}
            </TabsTrigger>
          ))}
        </TabsList>
        <div className=" mt-4">
          <TabsContent value="configuration">
            <div className=" flex flex-col gap-6">
              <InputItem>
                <Label>Judul Gallery</Label>
                <Input placeholder="" value="Moment Yang Berharga" />
              </InputItem>
              <InputItem>
                <Label>Deskripsi Gallery</Label>
                <Textarea
                  placeholder=""
                  value="'Menciptakan kenangan adalah hadiah yang tak ternilai harganya. Kenangan akan bertahan seumur hidup; benda-benda hanya dalam waktu singkat.'"
                />
              </InputItem>
              <InputItem>
                <Label>Gallery Style</Label>
                <div className="grid grid-cols-3 gap-4">
                  <div className=" w-full flex flex-col gap-2 items-center">
                    <div
                      // onClick={() => handleChangeGalleryStyle("grid")}
                      className={cn(
                        " w-full p-2 pb-0 border-[1.5px] bg-neutral-100 rounded-lg flex justify-center items-center"
                        // {
                        //   " ring-[1.5px] ring-offset-1 ring-pink-500 border-pink-500":
                        //     invitationStyle.gallery_style === "grid",
                        // }
                      )}
                    >
                      <div className=" w-full aspect-video relative rounded-md rounded-b-none overflow-hidden">
                        <Image
                          src="/images/gallery-style-1.png"
                          fill
                          alt="grid"
                          className=" object-cover object-center"
                        />
                      </div>
                    </div>
                    <p className=" text-sm text-center">Grid</p>
                  </div>
                  <div className=" w-full flex flex-col gap-2 items-center">
                    <div
                      // onClick={() => handleChangeGalleryStyle("slideshow")}
                      className={cn(
                        " w-full p-2 pb-0 border-[1.5px] bg-neutral-100 rounded-lg flex justify-center items-center"
                        // {
                        //   " ring-[1.5px] ring-offset-1 ring-pink-500 border-pink-500":
                        //     invitationStyle.gallery_style === "slideshow",
                        // }
                      )}
                    >
                      <div className=" w-full aspect-video relative rounded-md rounded-b-none overflow-hidden">
                        <Image
                          src="/images/gallery-style-2.png"
                          fill
                          alt="grid"
                          className=" object-cover object-center"
                        />
                      </div>
                    </div>
                    <p className=" text-sm text-center">Slideshow</p>
                  </div>
                  <div className=" w-full flex flex-col gap-2 items-center">
                    <div
                      // onClick={() =>
                      //   handleChangeGalleryStyle("slideshow-with-thumbnail")
                      // }
                      className={cn(
                        " w-full p-2 pb-0 border-[1.5px] bg-neutral-100 rounded-lg flex justify-center items-center"
                        // {
                        //   " ring-[1.5px] ring-offset-1 ring-pink-500 border-pink-500":
                        //     invitationStyle.gallery_style ===
                        //     "slideshow-with-thumbnail",
                        // }
                      )}
                    >
                      <div className=" w-full aspect-video relative rounded-md rounded-b-none overflow-hidden">
                        <Image
                          src="/images/gallery-style-3.png"
                          fill
                          alt="grid"
                          className=" object-cover object-center"
                        />
                      </div>
                    </div>
                    <p className=" text-sm text-center">
                      Slideshow with Thumbnail
                    </p>
                  </div>
                </div>
              </InputItem>
            </div>
          </TabsContent>

          <TabsContent value="photo">
            <div className="grid grid-cols-3 gap-4">
              <div className=" w-full aspect-square bg-neutral-100 flex justify-center items-center">
                <LuPlus />
              </div>
              {invitationGalleries.map((gallery, i) => (
                <div key={i} className=" w-full aspect-square relative group">
                  <Image
                    src={gallery.url}
                    alt=""
                    fill
                    className=" object-cover object-center"
                  />
                  <div className=" w-full h-full bg-black/50 flex group-hover:opacity-100 opacity-0 transition-all justify-center items-center absolute top-0 z-[2]">
                    <Button
                      onClick={() => handleDeletePhoto(gallery.id)}
                      size="sm"
                      variant="destructive"
                    >
                      Hapus
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
}
