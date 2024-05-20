"use client";

import HeadingConfigurationSection from "@/components/common/heading-configuration-section";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import {
  INVITATION_FAKER,
  INVITATION_STYLE_FAKER,
} from "@/constant/faker.constant";
import { TInvitation, TInvitationStyle } from "@/types/invitation.type";
import { reloadIframe } from "@/utils/iframe";
import { GalleryAdd } from "iconsax-react";
import Image from "next/image";
import { useCallback, useState } from "react";
import Dropzone from "react-dropzone";
import ReactCrop, { type Crop } from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";

export default function ProfilePage() {
  // state
  const [invitationStyle, setInvitationStyle] = useState<TInvitationStyle>(
    INVITATION_STYLE_FAKER
  );
  const [crop, setCrop] = useState<Crop>();
  const [invitation, setInvitation] = useState<TInvitation>(INVITATION_FAKER);
  const [groomImage, setGroomImage] = useState<File | undefined>();
  const [brideImage, setBrideImage] = useState<File | undefined>();

  // handle order couple
  const handleOrderCouple = useCallback((order: boolean) => {
    const invitationStyle: TInvitationStyle = {
      ...INVITATION_STYLE_FAKER,
      groom_first: order,
    };
    setInvitationStyle(invitationStyle);
    reloadIframe("invitation-style-updated", { invitationStyle });
  }, []);

  // tabs menu
  const TABS_MENU = [
    {
      label: "Konfigurasi",
      value: "configuration",
    },
    {
      label: "Pengantin Pria",
      value: "groom",
    },
    {
      label: "Pengantin Wanita",
      value: "bride",
    },
  ];

  return (
    <div className=" p-6 w-full">
      <HeadingConfigurationSection
        title="Profil Pasangan"
        subtitle="Lengkapi data diri pasangan Anda untuk membuat undangan yang lebih
        personal dan istimewa."
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
              <div className="flex flex-col gap-y-2">
                <Label>Judul Profil</Label>
                <Input placeholder="" value="Bride & Groom" />
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
                <Switch
                  checked={invitationStyle.groom_first}
                  onCheckedChange={(checked) => handleOrderCouple(checked)}
                />
              </div>
            </div>
          </TabsContent>
          <TabsContent value="groom">
            <div className=" flex flex-col gap-6">
              <div className=" space-y-2">
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
              </div>

              <Dialog open={!!groomImage}>
                <DialogContent className=" max-w-3xl max-h-[80vh] h-[80vh] flex flex-col gap-4">
                  <DialogHeader>
                    <DialogTitle>Sesuaikan Foto Pengantin</DialogTitle>
                    <DialogDescription>
                      Crop foto pengantin Anda untuk memastikan tampilan yang
                      sempurna pada undangan.
                    </DialogDescription>
                  </DialogHeader>
                  <div className=" w-full h-full flex justify-center items-center overflow-hidden">
                    {!!groomImage && (
                      <ReactCrop
                        crop={crop}
                        onChange={(c) => setCrop(c)}
                        aspect={1}
                        className=" w-max h-full"
                      >
                        <img
                          alt=""
                          src={URL.createObjectURL(groomImage)}
                          className=" w-full h-full object-contain object-center"
                        />
                      </ReactCrop>
                    )}
                  </div>
                  <div className=" flex gap-2 justify-end">
                    <DialogClose asChild>
                      <Button variant="secondary">Cancel</Button>
                    </DialogClose>
                    <Button>Simpan</Button>
                  </div>
                </DialogContent>
              </Dialog>

              <div className=" space-y-2">
                <Label>Username Instagram</Label>
                <div className=" relative rounded-lg overflow-hidden">
                  <div className=" w-12 aspect-square bg-neutral-100 flex justify-center items-center absolute top-0 left-0">
                    @
                  </div>
                  <Input
                    placeholder="adam.berriz"
                    className=" pl-14"
                    value={invitation.groom_instagram}
                    onChange={(e) =>
                      setInvitation({
                        ...invitation,
                        groom_instagram: e.target.value,
                      })
                    }
                  />
                </div>
              </div>

              <div className=" space-y-2">
                <Label>Nama Pria</Label>
                <Input
                  placeholder="Adam Berriz PhD"
                  value={invitation.groom_name}
                  onChange={(e) =>
                    setInvitation({
                      ...invitation,
                      groom_name: e.target.value,
                    })
                  }
                />
              </div>

              <div className=" space-y-2">
                <Label>Anak ke</Label>
                <Input
                  placeholder="Pertama/Kedua/Terakhir/Bungsu/Tunggal"
                  value={invitation.groom_child_sequence}
                  onChange={(e) =>
                    setInvitation({
                      ...invitation,
                      groom_child_sequence: e.target.value,
                    })
                  }
                />
              </div>

              <div className=" space-y-2">
                <Label>Nama Ayah</Label>
                <Input
                  placeholder="John Doe"
                  value={invitation.groom_father_name}
                  onChange={(e) =>
                    setInvitation({
                      ...invitation,
                      groom_father_name: e.target.value,
                    })
                  }
                />
              </div>

              <div className=" space-y-2">
                <Label>Nama Ibu</Label>
                <Input
                  placeholder="Maria Anne"
                  value={invitation.groom_mother_name}
                  onChange={(e) =>
                    setInvitation({
                      ...invitation,
                      groom_mother_name: e.target.value,
                    })
                  }
                />
              </div>
            </div>
          </TabsContent>
          <TabsContent value="bride">
            <div className=" flex flex-col gap-6">
              <div className=" space-y-2">
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
              </div>

              <Dialog open={!!brideImage}>
                <DialogContent className=" max-w-3xl max-h-[80vh] h-[80vh] flex flex-col gap-4">
                  <DialogHeader>
                    <DialogTitle>Sesuaikan Foto Pengantin</DialogTitle>
                    <DialogDescription>
                      Crop foto pengantin Anda untuk memastikan tampilan yang
                      sempurna pada undangan.
                    </DialogDescription>
                  </DialogHeader>
                  <div className=" w-full h-full flex justify-center items-center overflow-hidden">
                    {!!brideImage && (
                      <ReactCrop
                        crop={crop}
                        onChange={(c) => setCrop(c)}
                        aspect={1}
                        className=" w-max h-full"
                      >
                        <img
                          alt=""
                          src={URL.createObjectURL(brideImage)}
                          className=" w-full h-full object-contain object-center"
                        />
                      </ReactCrop>
                    )}
                  </div>
                  <div className=" flex gap-2 justify-end">
                    <DialogClose asChild>
                      <Button variant="secondary">Cancel</Button>
                    </DialogClose>
                    <Button>Simpan</Button>
                  </div>
                </DialogContent>
              </Dialog>
              <div className=" space-y-2">
                <Label>Username Instagram</Label>
                <div className=" relative rounded-lg overflow-hidden">
                  <div className=" w-12 aspect-square bg-neutral-100 flex justify-center items-center absolute top-0 left-0">
                    @
                  </div>
                  <Input
                    placeholder="adam.berriz"
                    className=" pl-14"
                    value={invitation.bride_instagram}
                    onChange={(e) =>
                      setInvitation({
                        ...invitation,
                        bride_instagram: e.target.value,
                      })
                    }
                  />
                </div>
              </div>

              <div className=" space-y-2">
                <Label>Nama Wanita</Label>
                <Input
                  placeholder="Adam Berriz PhD"
                  value={invitation.bride_name}
                  onChange={(e) =>
                    setInvitation({
                      ...invitation,
                      bride_name: e.target.value,
                    })
                  }
                />
              </div>

              <div className=" space-y-2">
                <Label>Anak ke</Label>
                <Input
                  placeholder="Pertama/Kedua/Terakhir/Bungsu/Tunggal"
                  value={invitation.bride_child_sequence}
                  onChange={(e) =>
                    setInvitation({
                      ...invitation,
                      bride_child_sequence: e.target.value,
                    })
                  }
                />
              </div>

              <div className=" space-y-2">
                <Label>Nama Ayah</Label>
                <Input
                  placeholder="John Doe"
                  value={invitation.bride_father_name}
                  onChange={(e) =>
                    setInvitation({
                      ...invitation,
                      bride_father_name: e.target.value,
                    })
                  }
                />
              </div>

              <div className=" space-y-2">
                <Label>Nama Ibu</Label>
                <Input
                  placeholder="Maria Anne"
                  value={invitation.bride_mother_name}
                  onChange={(e) =>
                    setInvitation({
                      ...invitation,
                      bride_mother_name: e.target.value,
                    })
                  }
                />
              </div>
            </div>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
}
