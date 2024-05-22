"use client";

import { comfortaa } from "@/constant/font.constant";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import Container from "../common/container";
import { HambergerMenu } from "iconsax-react";

export default function Header() {
  const MENUS = [
    {
      label: "Tema",
      path: "/theme",
    },
    {
      label: "Portfolio",
      path: "/portfolio",
    },
    {
      label: "Panduan",
      path: "/guide",
    },
  ];
  return (
    <Container>
      <div className=" w-full py-5 flex justify-between items-center">
        {/* begin: left */}
        <div className=" flex-1">
          <Link href="/" className="flex items-center gap-2 w-fit">
            <div className=" w-10 aspect-square relative">
              <Image
                src="/images/logo.png"
                fill
                alt=""
                className=" object-contain object-center"
              />
            </div>
            <h1
              className={cn(
                comfortaa.className,
                " text-xl font-bold text-pink-600"
              )}
            >
              Momentus
            </h1>
          </Link>
        </div>
        {/* end: left */}

        {/* begin: center */}
        <nav className=" hidden lg:flex justify-center gap-2">
          {MENUS.map((menu, i) => (
            <Button key={i} asChild variant="ghost" className=" rounded-full">
              <Link href={menu.path} className="">
                {menu.label}
              </Link>
            </Button>
          ))}
        </nav>
        {/* end: center */}

        {/* begin: right */}
        <div className=" flex-1 justify-end flex gap-2">
          <Button className=" rounded-full">
            Daftar <span className=" hidden lg:block">& Coba Gratis</span>
          </Button>
          <Button
            variant="secondary"
            size="icon"
            className=" rounded-full flex lg:hidden"
          >
            <HambergerMenu size={16} />
          </Button>
        </div>
        {/* end: right */}
      </div>
    </Container>
  );
}
