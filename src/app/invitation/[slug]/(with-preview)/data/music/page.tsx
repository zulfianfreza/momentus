"use client";

import HeadingConfigurationSection from "@/components/common/heading-configuration-section";
import InputItem from "@/components/common/input-item";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { INVITATION_FAKER, MUSIC_FAKER } from "@/constant/faker.constant";
import { TBackgroundMusic, TInvitation } from "@/types/invitation.type";
import { useState } from "react";

export default function MusicPage() {
  return (
    <div className=" p-5 w-full">
      <HeadingConfigurationSection
        title="Latar Musik"
        subtitle="Pilih musik yang menggambarkan kisah cinta Anda untuk melengkapi undangan pernikahan."
      />

      <div className=" mt-8">
        <InputItem>
          <Label>Gunakan Latar Musik</Label>
          <Switch checked />
        </InputItem>

        <div className="flex flex-col mt-4 gap-6">
          {MUSIC_FAKER.map((music, i) => (
            <div
              className=" space-y-4 rounded-lg border shadow-sm p-4 flex flex-col items-start"
              key={i}
            >
              <p className=" text-sm font-medium text-center">{music.name}</p>
              <audio key={i} src={music.url} controls className=" w-full" />
              <Button
                size="sm"
                // onClick={() => handleChangeBackgroundMusic(music)}
                // variant={
                //   invitation.background_music === music.id
                //     ? "default"
                //     : "secondary"
                // }
              >
                Dipilih
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
