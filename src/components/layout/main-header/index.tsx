'use client';

import { comfortaa } from '@/constant/font.constant';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { HambergerMenu } from 'iconsax-react';
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  useAuth,
} from '@clerk/nextjs';
import Container from '@/components/common/container';
import { Button } from '@/components/ui/button';
import Logo from '@/components/common/logo';

export default function MainHeader() {
  const MENUS = [
    {
      label: 'Tema',
      path: '/theme',
    },
    {
      label: 'Portfolio',
      path: '/portfolio',
    },
    {
      label: 'Panduan',
      path: '/guide',
    },
    {
      label: 'Blog',
      path: '/blog',
    },
  ];

  const { getToken } = useAuth();

  return (
    <Container>
      <div className=" flex w-full items-center justify-between py-5">
        {/* begin: left */}
        <div className=" flex-1">
          <Link href="/">
            <Logo />
          </Link>
        </div>
        {/* end: left */}

        {/* begin: center */}
        <nav className=" hidden justify-center gap-2 lg:flex">
          {MENUS.map((menu, i) => (
            <Button
              key={i}
              asChild
              variant="ghost"
              className=" rounded-full"
            >
              <Link
                href={menu.path}
                className=""
              >
                {menu.label}
              </Link>
            </Button>
          ))}
        </nav>
        {/* end: center */}

        {/* begin: right */}
        <div className=" flex flex-1 justify-end gap-4">
          <Button className=" rounded-full">
            Daftar <span className=" hidden lg:block">& Coba Gratis</span>
          </Button>
          <Button
            variant="secondary"
            size="icon"
            className=" flex rounded-full lg:hidden"
          >
            <HambergerMenu size={16} />
          </Button>
        </div>
        {/* end: right */}
      </div>
    </Container>
  );
}
