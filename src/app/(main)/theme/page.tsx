import Container from '@/components/common/container';
import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { THEME_FAKER } from '@/constant/faker.constant';

export default function CataloguePage() {
  return (
    <Container>
      <div className=" my-10 flex w-full flex-col items-center justify-center">
        <div className=" text-center">
          <h1 className=" text-5xl font-semibold leading-relaxed">
            Pilih Tema Undanganmu
          </h1>
          <p className=" text-neutral-500">
            Pilih tema kesukaanmu dan kreasikan sesuai dengan keinginanmu.
          </p>
        </div>
        <div className=" mt-16 grid w-full items-center justify-center gap-8 lg:grid-cols-3">
          {THEME_FAKER.map((theme) => (
            <>
              <div className=" flex aspect-[3/2] w-full flex-col items-center justify-between rounded-2xl shadow-lg">
                <div className=" relative flex aspect-[3/2] w-full">
                  <Image
                    fill
                    alt=""
                    src={theme.cover}
                    className=" flex h-full w-full rounded-t-2xl"
                  />
                </div>
                <div className=" flex w-full items-center justify-between px-3 py-2">
                  <Badge>{theme.plan.name}</Badge>
                  <Button variant="secondary-primary">{theme.name}</Button>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </Container>
  );
}
