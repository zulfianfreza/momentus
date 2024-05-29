'use client';

/* eslint-disable @next/next/no-img-element */
import HeadingConfigurationSection from '@/components/common/heading-configuration-section';
import InputItem from '@/components/common/input-item';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { GalleryAdd } from 'iconsax-react';
import { useState } from 'react';
import Dropzone from 'react-dropzone';
import ReactCrop, { type Crop } from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';

type TPageParams = {
  params: {
    slug: string;
  };
};

export default function ProfilePage({ params }: TPageParams) {
  const [crop, setCrop] = useState<Crop>();
  const [groomImage, setGroomImage] = useState<File | undefined>();
  const [brideImage, setBrideImage] = useState<File | undefined>();

  // tabs menu
  const TABS_MENU = [
    {
      label: 'Konfigurasi',
      value: 'configuration',
    },
    {
      label: 'Pengantin Pria',
      value: 'groom',
    },
    {
      label: 'Pengantin Wanita',
      value: 'bride',
    },
  ];

  return (
    <div className=" w-full p-6">
      <HeadingConfigurationSection
        title="Profil Pasangan"
        subtitle="Lengkapi data diri pasangan Anda untuk membuat undangan yang lebih
        personal dan istimewa."
      />
      <Tabs
        defaultValue="configuration"
        className=" mt-4 w-full"
      >
        <TabsList className=" my-0 w-full justify-start gap-4 rounded-none border-b bg-transparent px-0">
          {TABS_MENU.map((menu) => (
            <TabsTrigger
              key={menu.value}
              value={menu.value}
              className=" h-10 rounded-none border-b-2 border-transparent px-0 data-[state=active]:border-pink-600"
            >
              {menu.label}
            </TabsTrigger>
          ))}
        </TabsList>
        <div className=" mt-4">
          <TabsContent value="configuration">
            <div className=" flex flex-col gap-4">
              <div className="flex flex-col gap-y-2">
                <Label>Judul Profil</Label>
                <Input
                  placeholder=""
                  value="Bride & Groom"
                />
              </div>
              <div className="flex flex-col gap-y-2">
                <Label>Deskripsi Profil</Label>
                <Textarea
                  placeholder=""
                  value="We’re getting hitched! And we’d be delighted if you could join our wedding!"
                />
              </div>
              <div className=" flex flex-col space-y-2">
                <Label>Urutkan Pengantin Pria Terlebih Dahulu</Label>
                <Switch />
              </div>
            </div>
          </TabsContent>
          <TabsContent value="groom">
            <div className=" flex flex-col gap-4">
              <InputItem>
                <Label>Photo Pengantin Pria</Label>
                <Dropzone
                  onDrop={(acceptedFiles) => {
                    if (acceptedFiles) {
                      setGroomImage(acceptedFiles[0]);
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

              <Dialog open={!!groomImage}>
                <DialogContent className=" flex h-[80vh] max-h-[80vh] max-w-3xl flex-col gap-4">
                  <DialogHeader>
                    <DialogTitle>Sesuaikan Foto Pengantin</DialogTitle>
                    <DialogDescription>
                      Crop foto pengantin Anda untuk memastikan tampilan yang
                      sempurna pada undangan.
                    </DialogDescription>
                  </DialogHeader>
                  <div className=" flex h-full w-full items-center justify-center overflow-hidden">
                    {!!groomImage && (
                      <ReactCrop
                        crop={crop}
                        onChange={(c) => setCrop(c)}
                        aspect={1}
                        className=" h-full w-max"
                      >
                        <img
                          alt=""
                          src={URL.createObjectURL(groomImage)}
                          className=" h-full w-full object-contain object-center"
                        />
                      </ReactCrop>
                    )}
                  </div>
                  <div className=" flex justify-end gap-2">
                    <DialogClose asChild>
                      <Button variant="secondary">Cancel</Button>
                    </DialogClose>
                    <Button>Simpan</Button>
                  </div>
                </DialogContent>
              </Dialog>

              <InputItem>
                <Label>Username Instagram</Label>
                <div className=" relative overflow-hidden rounded-lg">
                  <div className=" absolute left-0 top-0 flex aspect-square w-12 items-center justify-center bg-neutral-100">
                    @
                  </div>
                  <Input
                    placeholder="adam.berriz"
                    className=" pl-14"
                  />
                </div>
              </InputItem>

              <InputItem>
                <Label>Nama Pria</Label>
                <Input placeholder="Adam Berriz PhD" />
              </InputItem>

              <InputItem>
                <Label>Anak ke</Label>
                <Input placeholder="Pertama/Kedua/Terakhir/Bungsu/Tunggal" />
              </InputItem>

              <InputItem>
                <div className="flex items-center gap-2">
                  <Switch />
                  <Label>Tampilkan nama orang tua di undangan</Label>
                </div>
              </InputItem>

              <InputItem>
                <Label>Nama Ayah</Label>
                <Input placeholder="John Doe" />
              </InputItem>

              <InputItem>
                <Label>Nama Ibu</Label>
                <Input placeholder="Maria Anne" />
              </InputItem>
            </div>
          </TabsContent>
          <TabsContent value="bride">
            <div className=" flex flex-col gap-4">
              <InputItem>
                <Label>Photo Pengantin Pria</Label>
                <Dropzone
                  onDrop={(acceptedFiles) => {
                    if (acceptedFiles) {
                      setBrideImage(acceptedFiles[0]);
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

              <Dialog open={!!brideImage}>
                <DialogContent className=" flex h-[80vh] max-h-[80vh] max-w-3xl flex-col gap-4">
                  <DialogHeader>
                    <DialogTitle>Sesuaikan Foto Pengantin</DialogTitle>
                    <DialogDescription>
                      Crop foto pengantin Anda untuk memastikan tampilan yang
                      sempurna pada undangan.
                    </DialogDescription>
                  </DialogHeader>
                  <div className=" flex h-full w-full items-center justify-center overflow-hidden">
                    {!!brideImage && (
                      <ReactCrop
                        crop={crop}
                        onChange={(c) => setCrop(c)}
                        aspect={1}
                        className=" h-full w-max"
                      >
                        <img
                          alt=""
                          src={URL.createObjectURL(brideImage)}
                          className=" h-full w-full object-contain object-center"
                        />
                      </ReactCrop>
                    )}
                  </div>
                  <div className=" flex justify-end gap-2">
                    <DialogClose asChild>
                      <Button variant="secondary">Cancel</Button>
                    </DialogClose>
                    <Button>Simpan</Button>
                  </div>
                </DialogContent>
              </Dialog>
              <InputItem>
                <Label>Username Instagram</Label>
                <div className=" relative overflow-hidden rounded-lg">
                  <div className=" absolute left-0 top-0 flex aspect-square w-12 items-center justify-center bg-neutral-100">
                    @
                  </div>
                  <Input
                    placeholder="adam.berriz"
                    className=" pl-14"
                  />
                </div>
              </InputItem>

              <InputItem>
                <Label>Nama Wanita</Label>
                <Input placeholder="Adam Berriz PhD" />
              </InputItem>

              <InputItem>
                <Label>Anak ke</Label>
                <Input placeholder="Pertama/Kedua/Terakhir/Bungsu/Tunggal" />
              </InputItem>

              <InputItem>
                <div className="flex items-center gap-2">
                  <Switch />
                  <Label>Tampilkan nama orang tua di undangan</Label>
                </div>
              </InputItem>

              <InputItem>
                <Label>Nama Ayah</Label>
                <Input placeholder="John Doe" />
              </InputItem>

              <InputItem>
                <Label>Nama Ibu</Label>
                <Input placeholder="Maria Anne" />
              </InputItem>
            </div>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
}
