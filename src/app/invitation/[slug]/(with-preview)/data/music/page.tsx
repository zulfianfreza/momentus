'use client';

import HeadingConfigurationSection from '@/components/common/heading-configuration-section';
import CustomBreadcrumb from '@/components/custom/custom-breadcrumb';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { MUSIC_FAKER } from '@/constant/faker.constant';

export default function MusicPage() {
  return (
    <div className=" w-full p-5">
      <CustomBreadcrumb items={[{ label: 'Data' }, { label: 'Musik' }]} />
      <HeadingConfigurationSection
        className=" mt-4"
        title="Latar Musik"
        subtitle="Pilih musik yang menggambarkan kisah cinta Anda untuk melengkapi undangan pernikahan."
      />

      <div className=" mt-8">
        <div className=" flex items-center gap-2">
          <Switch checked />
          <Label>Gunakan Latar Musik</Label>
        </div>

        <div className="mt-4 flex flex-col gap-4">
          {MUSIC_FAKER.map((music, i) => (
            <div
              className=" flex flex-col items-start space-y-2 rounded-xl border p-4 shadow-sm"
              key={i}
            >
              <p className=" text-center text-sm font-medium">{music.name}</p>
              <audio
                key={i}
                src={music.url}
                controls
                className=" w-full"
              />
              <Button
                size="sm"
                variant="secondary-primary"
                // onClick={() => handleChangeBackgroundMusic(music)}
                // variant={
                //   invitation.background_music === music.id
                //     ? "default"
                //     : "secondary"
                // }
              >
                Pilih
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
