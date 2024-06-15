'use client';

import HeadingConfigurationSection from '@/components/common/heading-configuration-section';
import InputItem from '@/components/common/input-item';
import CustomBreadcrumb from '@/components/custom/custom-breadcrumb';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { INVITATION_GALLERIES_FAKER } from '@/constant/invitation-faker.constant';
import { cn } from '@/lib/utils';
import { TInvitationGallery } from '@/types/invitation.type';
import { reloadIframe } from '@/utils/iframe';
import Image from 'next/image';
import Link from 'next/link';
import { useCallback, useState } from 'react';
import { LuPlus } from 'react-icons/lu';

export default function GalleryPage() {
  const [invitationGalleries, setInvitationGalleries] = useState<
    TInvitationGallery[]
  >(INVITATION_GALLERIES_FAKER);

  // tabs menu
  const TABS_MENU = [
    {
      label: 'Konfigurasi',
      value: 'configuration',
    },
    {
      label: 'Photo',
      value: 'photo',
    },
  ];

  // handle delete photo
  const handleDeletePhoto = useCallback(
    (id: number) => {
      const newGalleries: TInvitationGallery[] = invitationGalleries.filter(
        (item) => item.id !== id,
      );

      setInvitationGalleries(newGalleries);
      reloadIframe('invitation-galleries-updated', {
        invitationGalleries: newGalleries,
      });
    },
    [invitationGalleries],
  );

  return (
    <div className=" w-full p-6">
      <CustomBreadcrumb items={[{ label: 'Data' }, { label: 'Galeri' }]} />
      <HeadingConfigurationSection
        className=" mt-4"
        title="Galeri"
        subtitle="Tambahkan foto-foto spesial untuk membagikan momen berharga dalam perjalanan cinta kalian."
      />
      <Tabs
        defaultValue="configuration"
        className=" mt-4 w-full"
      >
        <TabsList className=" my-0 w-full justify-start rounded-none border-b bg-transparent px-0">
          {TABS_MENU.map((menu) => (
            <TabsTrigger
              key={menu.value}
              value={menu.value}
              className=" h-10 rounded-none border-b-2 border-transparent px-2.5 data-[state=active]:border-pink-600"
            >
              {menu.label}
            </TabsTrigger>
          ))}
        </TabsList>
        <div className=" mt-4">
          <TabsContent value="configuration">
            <div className=" flex flex-col gap-6">
              <InputItem>
                <Label>Judul Galeri</Label>
                <Input
                  placeholder=""
                  value="Moment Yang Berharga"
                />
              </InputItem>
              <InputItem>
                <Label>Deskripsi Galeri</Label>
                <Textarea
                  placeholder=""
                  value="'Menciptakan kenangan adalah hadiah yang tak ternilai harganya. Kenangan akan bertahan seumur hidup; benda-benda hanya dalam waktu singkat.'"
                />
              </InputItem>
              <InputItem>
                <Label>Galeri Style</Label>
                <div className="grid grid-cols-3 gap-4">
                  <div className=" flex w-full flex-col items-center gap-2">
                    <div
                      // onClick={() => handleChangeGalleryStyle("grid")}
                      className={cn(
                        ' flex w-full items-center justify-center rounded-lg border-[1.5px] bg-neutral-100 p-2 pb-0',
                        // {
                        //   " ring-[1.5px] ring-offset-1 ring-pink-500 border-pink-500":
                        //     invitationStyle.gallery_style === "grid",
                        // }
                      )}
                    >
                      <div className=" relative aspect-video w-full overflow-hidden rounded-md rounded-b-none">
                        <Image
                          src="/images/gallery-style-1.png"
                          fill
                          alt="grid"
                          className=" object-cover object-center"
                        />
                      </div>
                    </div>
                    <p className=" text-center text-sm">Grid</p>
                  </div>
                  <div className=" flex w-full flex-col items-center gap-2">
                    <div
                      // onClick={() => handleChangeGalleryStyle("slideshow")}
                      className={cn(
                        ' flex w-full items-center justify-center rounded-lg border-[1.5px] bg-neutral-100 p-2 pb-0',
                        // {
                        //   " ring-[1.5px] ring-offset-1 ring-pink-500 border-pink-500":
                        //     invitationStyle.gallery_style === "slideshow",
                        // }
                      )}
                    >
                      <div className=" relative aspect-video w-full overflow-hidden rounded-md rounded-b-none">
                        <Image
                          src="/images/gallery-style-2.png"
                          fill
                          alt="grid"
                          className=" object-cover object-center"
                        />
                      </div>
                    </div>
                    <p className=" text-center text-sm">Slideshow</p>
                  </div>
                  <div className=" flex w-full flex-col items-center gap-2">
                    <div
                      // onClick={() =>
                      //   handleChangeGalleryStyle("slideshow-with-thumbnail")
                      // }
                      className={cn(
                        ' flex w-full items-center justify-center rounded-lg border-[1.5px] bg-neutral-100 p-2 pb-0',
                        // {
                        //   " ring-[1.5px] ring-offset-1 ring-pink-500 border-pink-500":
                        //     invitationStyle.gallery_style ===
                        //     "slideshow-with-thumbnail",
                        // }
                      )}
                    >
                      <div className=" relative aspect-video w-full overflow-hidden rounded-md rounded-b-none">
                        <Image
                          src="/images/gallery-style-3.png"
                          fill
                          alt="grid"
                          className=" object-cover object-center"
                        />
                      </div>
                    </div>
                    <p className=" text-center text-sm">
                      Slideshow with Thumbnail
                    </p>
                  </div>
                </div>
              </InputItem>
            </div>
          </TabsContent>

          <TabsContent value="photo">
            <div className="grid grid-cols-3 gap-2.5">
              <div className=" flex aspect-square w-full items-center justify-center bg-neutral-100">
                <LuPlus />
              </div>
              {invitationGalleries.map((gallery, i) => (
                <div
                  key={i}
                  className=" group relative aspect-square w-full"
                >
                  <Image
                    src={gallery.url}
                    alt=""
                    fill
                    className=" object-cover object-center"
                  />
                  <div className=" absolute top-0 z-[2] flex h-full w-full items-center justify-center bg-black/50 opacity-0 transition-all group-hover:opacity-100">
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
