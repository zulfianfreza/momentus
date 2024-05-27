"use client";

import React from "react";
import Container from "../common/container";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const PRODUCT_MENU = [
    {
      label: "Tema",
      path: "/theme",
    },
    {
      label: "Panduan",
      path: "/guide",
    },
    {
      label: "Harga",
      path: "/pricing",
    },
  ];
  const COMPANY_MENU = [
    {
      label: "Tentang",
      path: "/about",
    },
    {
      label: "Blog",
      path: "/blog",
    },
    {
      label: "FAQ",
      path: "/faq",
    },
    {
      label: "Portfolio",
      path: "/portfolio",
    },
  ];
  const LEGAL_MENU = [
    {
      label: "Privacy Policy",
      path: "/privacy-policy",
    },
    {
      label: "Terms & Conditions",
      path: "/terms-and-conditions",
    },
  ];
  const SOCIAL_MEDIA = [
    {
      label: "Instagram",
      path: "/",
    },
    {
      label: "Tiktok",
      path: "/",
    },
    {
      label: "YouTube",
      path: "/",
    },
    {
      label: "Email",
      path: "/",
    },
  ];
  return (
    <Container className=" mt-10 py-10">
      <div className=" grid grid-cols-4 lg:grid-cols-12 gap-8">
        <div className=" col-span-4 flex flex-col gap-4 items-center lg:items-start order-last lg:order-first">
          <div className=" flex-1">
            <div className=" w-10 aspect-square relative">
              <Image
                src="/images/logo.png"
                fill
                alt=""
                className=" object-contain object-center"
              />
            </div>
          </div>
          <p className=" text-neutral-500 text-sm text-center lg:text-start">
            Copyright © 2024 Momentus Corp.
            <br />
            All rights reserved.
          </p>
        </div>
        <div className=" col-span-2 flex flex-col gap-2">
          <p className=" text-sm uppercase font-semibold text-neutral-500">
            Product
          </p>
          {PRODUCT_MENU.map((menu) => (
            <Link
              href={menu.path}
              key={menu.path}
              className=" text-neutral-500 hover:text-neutral-900"
            >
              {menu.label}
            </Link>
          ))}
        </div>
        <div className=" col-span-2 flex flex-col gap-2">
          <p className=" text-sm uppercase font-semibold text-neutral-500">
            Company
          </p>
          {COMPANY_MENU.map((menu) => (
            <Link
              href={menu.path}
              key={menu.path}
              className=" text-neutral-500 hover:text-neutral-900"
            >
              {menu.label}
            </Link>
          ))}
        </div>
        <div className=" col-span-2 flex flex-col gap-2">
          <p className=" text-sm uppercase font-semibold text-neutral-500">
            Contact
          </p>
          {SOCIAL_MEDIA.map((socialMedia) => (
            <Link
              href={socialMedia.path}
              key={socialMedia.path}
              className=" text-neutral-500 hover:text-neutral-900"
            >
              {socialMedia.label}
            </Link>
          ))}
        </div>
        <div className=" col-span-2 flex flex-col gap-2">
          <p className=" text-sm uppercase font-semibold text-neutral-500">
            Legal
          </p>
          {LEGAL_MENU.map((menu) => (
            <Link
              href={menu.path}
              key={menu.path}
              className=" text-neutral-500 hover:text-neutral-900"
            >
              {menu.label}
            </Link>
          ))}
        </div>
      </div>
    </Container>
  );
}
