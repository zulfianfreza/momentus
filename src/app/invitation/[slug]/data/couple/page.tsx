"use client";

import HeadingConfigurationSection from "@/components/common/heading-configuration-section";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  INVITATION_FAKER,
  INVITATION_STYLE_FAKER,
} from "@/constant/faker.constant";
import { TInvitation, TInvitationStyle } from "@/types/invitation.type";
import { useCallback, useState } from "react";

export default function ProfilePage() {
  const [invitationStyle, setInvitationStyle] = useState<TInvitationStyle>(
    INVITATION_STYLE_FAKER
  );

  const [invitation, setInvitation] = useState<TInvitation>(INVITATION_FAKER);
  const handleOrderCouple = useCallback((order: boolean) => {
    const invitationStyle: TInvitationStyle = {
      ...INVITATION_STYLE_FAKER,
      groom_first: order,
    };
    setInvitationStyle(invitationStyle);
    const iframe = document.getElementById("preview-page") as HTMLIFrameElement;

    if (!iframe) return;

    iframe.contentWindow?.postMessage(
      {
        type: "invitation-style-updated",
        invitationStyle,
      },
      "*"
    );
  }, []);

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
      <Tabs defaultValue="groom" className=" w-full mt-4">
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
            <div className=" flex flex-col">
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
