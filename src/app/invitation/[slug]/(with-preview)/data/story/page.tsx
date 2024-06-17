'use client';

import HeadingConfigurationSection from '@/components/common/heading-configuration-section';
import InputItem from '@/components/common/input-item';
import CustomBreadcrumb from '@/components/custom/custom-breadcrumb';
import CustomTabsList from '@/components/custom/custom-tabs-list';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { INVITATION_STORIES_FAKER } from '@/constant/invitation-faker.constant';
import { GalleryAdd, ReceiptAdd } from 'iconsax-react';
import Image from 'next/image';
import { useState } from 'react';
import Dropzone from 'react-dropzone';

export default function StoryPage() {
  // state
  const [showAddStory, setShowAddStory] = useState<boolean>(false);
  const [showEditStory, setShowEditStory] = useState<boolean>(false);

  // tabs menu
  const TABS_MENU = [
    {
      label: 'Konfigurasi',
      value: 'configuration',
    },
    {
      label: 'Cerita',
      value: 'story',
    },
  ];

  return (
    <>
      <div className=" w-full p-5">
        <CustomBreadcrumb
          items={[{ label: 'Data' }, { label: 'Love Story' }]}
        />
        <HeadingConfigurationSection
          className=" mt-4"
          title="Love Story"
          subtitle="Bagikan perjalanan cinta Anda dari awal hingga hari istimewa ini dengan para tamu."
        />

        <Tabs
          defaultValue="configuration"
          className=" mt-4 w-full"
        >
          <CustomTabsList tabs={TABS_MENU} />
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
                  <div
                    key={i}
                    className=" rounded-xl border p-4 shadow-sm"
                  >
                    <div className=" relative aspect-video w-full overflow-hidden rounded-lg">
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
                      <Button
                        size="sm"
                        variant="destructive"
                      >
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

      <Dialog
        open={showAddStory}
        onOpenChange={setShowAddStory}
      >
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
                    className=" flex w-full flex-col items-center justify-center rounded-lg border-2 border-dashed bg-neutral-50 py-8"
                  >
                    <Input {...getInputProps()} />
                    <GalleryAdd
                      variant="Bulk"
                      size={60}
                      className=" text-pink-300"
                    />
                    <div className="mt-4 flex flex-col items-center gap-2 text-center text-sm leading-none text-neutral-500">
                      <p>Drag your image here</p>
                      <p>or</p>
                      <Button
                        size="sm"
                        onClick={open}
                      >
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
      <Dialog
        open={showEditStory}
        onOpenChange={setShowEditStory}
      >
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
                    className=" flex w-full flex-col items-center justify-center rounded-lg border-2 border-dashed bg-neutral-50 py-8"
                  >
                    <Input {...getInputProps()} />
                    <GalleryAdd
                      variant="Bulk"
                      size={60}
                      className=" text-pink-300"
                    />
                    <div className="mt-4 flex flex-col items-center gap-2 text-center text-sm leading-none text-neutral-500">
                      <p>Drag your image here</p>
                      <p>or</p>
                      <Button
                        size="sm"
                        onClick={open}
                      >
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
