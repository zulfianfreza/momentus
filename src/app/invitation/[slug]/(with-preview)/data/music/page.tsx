"use client";

import HeadingConfigurationSection from "@/components/common/heading-configuration-section";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { INVITATION_FAKER, MUSIC_FAKER } from "@/constant/faker.constant";
import { TBackgroundMusic, TInvitation } from "@/types/invitation.type";
import { useState } from "react";

export default function MusicPage() {
  // state
  const [invitation, setInvitation] = useState<TInvitation>(INVITATION_FAKER);

  const handleChangeBackgroundMusic = (music: TBackgroundMusic) => {
    setInvitation({ ...invitation, background_music: music.id });
  };

  return (
    <div className=" p-5 w-full">
      <HeadingConfigurationSection
        title="Latar Musik"
        subtitle="Pilih musik yang menggambarkan kisah cinta Anda untuk melengkapi undangan pernikahan."
      />

      <div className=" mt-8">
        <div className=" flex flex-col space-y-2">
          <Label>Gunakan Latar Musik</Label>
          <Switch checked />
        </div>

        <div className="flex flex-col mt-4 gap-6">
          {MUSIC_FAKER.map((music, i) => (
            <div className=" space-y-2" key={i}>
              <div className="flex justify-between">
                <p className=" text-sm font-medium">{music.name}</p>
                <Button
                  size="sm"
                  onClick={() => handleChangeBackgroundMusic(music)}
                  variant={
                    invitation.background_music === music.id
                      ? "default"
                      : "secondary"
                  }
                >
                  {invitation.background_music === music.id
                    ? "Dipilih"
                    : "Pilih lagu ini"}
                </Button>
              </div>
              <audio key={i} src={music.url} controls className=" w-full" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
