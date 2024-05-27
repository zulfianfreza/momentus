import Container from "@/components/common/container";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { THEME_FAKER } from "@/constant/faker.constant";

export default function CataloguePage() {
  return (
    <Container>
      <div className=" flex flex-col w-full items-center justify-center my-10">
        <div className=" text-center">
          <h1 className=" text-5xl font-semibold leading-relaxed">
            Pilih Tema Undanganmu
          </h1>
          <p className=" text-neutral-500">
            Pilih tema kesukaanmu dan kreasikan sesuai dengan keinginanmu.
          </p>
        </div>
        <div className=" grid lg:grid-cols-3 gap-8 w-full items-center justify-center mt-16">
          {THEME_FAKER.map((theme) => (
            <>
              <div className=" flex flex-col w-full items-center justify-between aspect-[3/2] rounded-2xl shadow-lg">
                <div className=" flex w-full aspect-[3/2] relative">
                  <Image
                    fill
                    alt=""
                    src={theme.cover}
                    className=" flex h-full w-full rounded-t-2xl"
                  />
                </div>
                <div className=" flex items-center justify-between w-full py-2 px-3">
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
