"use client";

import HeadingConfigurationSection from "@/components/common/heading-configuration-section";
import InputItem from "@/components/common/input-item";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { INVITATION_STORIES_FAKER } from "@/constant/faker.constant";
import { GalleryAdd, ReceiptAdd } from "iconsax-react";
import Image from "next/image";
import { useState } from "react";
import Dropzone from "react-dropzone";

export default function StoryPage() {
  // state
  const [showAddStory, setShowAddStory] = useState<boolean>(false);
  const [showEditStory, setShowEditStory] = useState<boolean>(false);

  // tabs menu
  const TABS_MENU = [
    {
      label: "Konfigurasi",
      value: "configuration",
    },
    {
      label: "Cerita",
      value: "story",
    },
  ];

  return (
    <>
      <div className=" p-5 w-full">
        <HeadingConfigurationSection
          title="Love Story"
          subtitle="Bagikan perjalanan cinta Anda dari awal hingga hari istimewa ini dengan para tamu."
        />

        <Tabs defaultValue="configuration" className=" w-full mt-4">
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
                  <Label>Judul Story</Label>
                  <Input value="Our Love Story" />
                </InputItem>
                <InputItem>
                  <Label>Deskripsi Story</Label>
                  <Textarea value="Our Love Story" />
                </InputItem>
              </div>
            </TabsContent>
            <TabsContent value="story">
              <Button
                className=" w-full"
                onClick={() => setShowAddStory((prev) => !prev)}
              >
                <ReceiptAdd size={16} />
                Tambah Cerita
              </Button>

              <div className=" mt-4 flex flex-col gap-4">
                {INVITATION_STORIES_FAKER.map((story, i) => (
                  <div key={i} className=" rounded-lg border shadow-sm p-4">
                    <div className=" w-full aspect-video relative rounded-lg overflow-hidden">
                      <Image
                        src={story.image}
                        fill
                        alt=""
                        className=" object-cover object-center"
                      />
                    </div>
                    <div className=" my-4">
                      <h1 className=" font-medium">{story.title}</h1>
                      <p className=" text-sm text-neutral-500">
                        {story.description}
                      </p>
                    </div>

                    <div className="flex justify-end gap-2">
                      <Button
                        size="sm"
                        variant="secondary"
                        onClick={() => setShowEditStory((prev) => !prev)}
                      >
                        Ubah Cerita
                      </Button>
                      <Button size="sm" variant="destructive">
                        Hapus Cerita
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>

      <Dialog open={showAddStory} onOpenChange={setShowAddStory}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Tambah Cerita</DialogTitle>
          </DialogHeader>
          <div className=" flex flex-col gap-4">
            <InputItem>
              <Label>Photo Cerita</Label>
              <Dropzone
                onDrop={(acceptedFiles) => {
                  if (acceptedFiles) {
                    // setGroomImage(acceptedFiles[0]);
                  }
                }}
                noClick
              >
                {({ getRootProps, getInputProps, open }) => (
                  <div
                    {...getRootProps()}
                    className=" w-full rounded-lg border-dashed bg-neutral-50 py-8 border-2 flex flex-col justify-center items-center"
                  >
                    <Input {...getInputProps()} />
                    <GalleryAdd
                      variant="Bulk"
                      size={60}
                      className=" text-pink-300"
                    />
                    <div className="flex text-center text-sm items-center text-neutral-500 flex-col gap-2 leading-none mt-4">
                      <p>Drag your image here</p>
                      <p>or</p>
                      <Button size="sm" onClick={open}>
                        Browse
                      </Button>
                    </div>
                  </div>
                )}
              </Dropzone>
            </InputItem>

            <InputItem>
              <Label>Judul Cerita</Label>
              <Input value="Our Love Story" />
            </InputItem>
            <InputItem>
              <Label>Cerita Perjalanan</Label>
              <Textarea value="Our Love Story" />
            </InputItem>

            <Button>Tambah Cerita</Button>
          </div>
        </DialogContent>
      </Dialog>
      <Dialog open={showEditStory} onOpenChange={setShowEditStory}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Cerita</DialogTitle>
          </DialogHeader>
          <div className=" flex flex-col gap-4">
            <InputItem>
              <Label>Photo Cerita</Label>
              <Dropzone
                onDrop={(acceptedFiles) => {
                  if (acceptedFiles) {
                    // setGroomImage(acceptedFiles[0]);
                  }
                }}
                noClick
              >
                {({ getRootProps, getInputProps, open }) => (
                  <div
                    {...getRootProps()}
                    className=" w-full rounded-lg border-dashed bg-neutral-50 py-8 border-2 flex flex-col justify-center items-center"
                  >
                    <Input {...getInputProps()} />
                    <GalleryAdd
                      variant="Bulk"
                      size={60}
                      className=" text-pink-300"
                    />
                    <div className="flex text-center text-sm items-center text-neutral-500 flex-col gap-2 leading-none mt-4">
                      <p>Drag your image here</p>
                      <p>or</p>
                      <Button size="sm" onClick={open}>
                        Browse
                      </Button>
                    </div>
                  </div>
                )}
              </Dropzone>
            </InputItem>

            <InputItem>
              <Label>Judul Cerita</Label>
              <Input value="Our Love Story" />
            </InputItem>
            <InputItem>
              <Label>Cerita Perjalanan</Label>
              <Textarea value="Our Love Story" />
            </InputItem>

            <Button>Edit Cerita</Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
