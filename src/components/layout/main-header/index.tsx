'use client';

import Container from '@/components/common/container';
import Logo from '@/components/common/logo';
import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { logout } from '@/services/http/auth.service';
import { TUser } from '@/types/user.type';
import { getInitials } from '@/utils/string';
import { PopoverClose } from '@radix-ui/react-popover';
import { HambergerMenu, LogoutCurve } from 'iconsax-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

type TProps = {
  user: TUser;
};

export default function MainHeader({ user }: TProps) {
  // hooks
  const router = useRouter();

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
          {user ? (
            <Popover>
              <PopoverTrigger asChild>
                <div className=" flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-primary text-sm text-white">
                  {getInitials(user.name)}
                </div>
              </PopoverTrigger>
              <PopoverContent
                side="bottom"
                align="end"
                className=" w-64 rounded-xl p-2"
              >
                <div className="flex items-center gap-2 p-2">
                  <div className=" flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm text-white">
                    {getInitials(user.name)}
                  </div>
                  <div className="flex flex-col">
                    <h1 className=" text-sm font-medium">{user.name}</h1>
                    <p className=" text-xs text-neutral-500">{user.email}</p>
                  </div>
                </div>
                <hr className=" my-2" />
                <PopoverClose asChild>
                  <Button
                    variant="ghost"
                    className=" w-full justify-start"
                    size="sm"
                    onClick={() => {
                      logout();
                      router.replace('/login');
                    }}
                  >
                    <LogoutCurve size={16} />
                    Logout
                  </Button>
                </PopoverClose>
              </PopoverContent>
            </Popover>
          ) : (
            <Button className=" rounded-full">
              Daftar <span className=" hidden lg:block">& Coba Gratis</span>
            </Button>
          )}
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
