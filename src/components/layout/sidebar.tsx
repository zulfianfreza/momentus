'use client';

import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { getSidebarMenu } from '@/constant/common.constant';
import { cn } from '@/lib/utils';
import { ArrowLeft, InfoCircle } from 'iconsax-react';
import Image from 'next/image';

import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';
import { Circle } from 'rc-progress';
import { useCallback, useState } from 'react';
import { BsTablet } from 'react-icons/bs';
import { PiArrowLeft } from 'react-icons/pi';
import { RiCustomerService2Line } from 'react-icons/ri';
import Joyride, { CallBackProps, STATUS, Step } from 'react-joyride';

export default function Sidebar() {
  // hooks
  const pathname = usePathname();
  const params = useParams<{ slug: string }>();

  // sidebar menu
  const sidebarMenu = getSidebarMenu(params.slug);

  // active menu
  const activeMenu = useCallback(
    (menu: string) =>
      menu === '/invitation/xyz'
        ? menu === pathname
        : pathname.startsWith(menu),
    [pathname],
  );

  type State = {
    run: boolean;
    steps: Step[];
  };

  const [{ run, steps }, setState] = useState<State>({
    run: false,
    steps: [
      {
        content: <h2>Let&apos;s begin our journey!</h2>,
        placement: 'center',
        target: 'body',
      },
      {
        target: '#first-step',
        content: 'Navigasi',
        placement: 'right',
      },
      {
        target: '#second-step',
        content: 'Preview',
        placement: 'left',
      },
    ],
  });

  const handleJoyrideCallback = (data: CallBackProps) => {
    const { status, type } = data;
    const finishedStatuses: string[] = [STATUS.FINISHED, STATUS.SKIPPED];

    if (finishedStatuses.includes(status)) {
      setState((prev) => ({ ...prev, run: false }));
    }
  };

  return (
    <aside
      className=" fixed left-0 z-[12] flex h-screen w-fit flex-col border-r bg-white shadow-sm"
      id="first-step"
    >
      <Joyride
        run={run}
        callback={handleJoyrideCallback}
        disableOverlayClose
        steps={steps}
        styles={{
          options: {},
          buttonNext: {
            backgroundColor: '#db2777',
            fontSize: '14px',
          },
          buttonBack: {
            color: '#db2777',
            fontSize: '14px',
          },
        }}
        continuous
        showSkipButton
        scrollToFirstStep
        showProgress
      />
      <div className=" flex h-full w-full flex-1 flex-col items-center">
        <Button
          variant="ghost"
          size="icon"
          className=" mt-2"
        >
          <PiArrowLeft size={20} />
        </Button>
        <p className=" mt-4 text-center text-xs text-neutral-500">Menu</p>
        <div className="mt-2 flex flex-col">
          {sidebarMenu.map((menu) => (
            <TooltipProvider
              key={menu.path}
              delayDuration={0}
            >
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    size="icon"
                    variant={activeMenu(menu.path) ? 'secondary' : 'ghost'}
                    asChild
                    className={cn(
                      ' h-12 w-14 rounded-none border-r-2 border-transparent ',
                      {
                        'border-pink-600': activeMenu(menu.path),
                      },
                    )}
                  >
                    <Link href={menu.path}>
                      <menu.icon
                        size={20}
                        variant={activeMenu(menu.path) ? 'Outline' : 'Outline'}
                        className={cn(' ml-[2px]', {
                          '': activeMenu(menu.path),
                        })}
                      />
                    </Link>
                  </Button>
                </TooltipTrigger>
                <TooltipContent
                  side="right"
                  align={menu.submenu ? 'start' : 'center'}
                  className=" rounded-xl p-2.5"
                >
                  <p className=" text-neutral-900">{menu.title}</p>
                  {menu.submenu && (
                    <div className="mt-2 flex flex-col gap-2">
                      {menu.submenu.map((submenu) => (
                        <Button
                          key={submenu.title}
                          size="sm"
                          variant={
                            activeMenu(submenu.path) ? 'default' : 'secondary'
                          }
                          className=" justify-start"
                          asChild
                        >
                          <Link href={submenu.path}>
                            <submenu.icon
                              size={16}
                              className={cn(' ', {
                                'text-white': activeMenu(submenu.path),
                              })}
                            />
                            {submenu.title}
                          </Link>
                        </Button>
                      ))}
                    </div>
                  )}
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
          <div className=" block lg:hidden">
            <TooltipProvider delayDuration={0}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    size="icon"
                    variant="ghost"
                    className=" w-14 rounded-none"
                  >
                    <BsTablet size={20} />
                  </Button>
                </TooltipTrigger>
                <TooltipContent
                  side="right"
                  align="start"
                  className=" p-2"
                >
                  <p className=" text-neutral-900">Preview</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <TooltipProvider delayDuration={0}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  size="icon"
                  variant="ghost"
                  className=" h-12 w-14 rounded-none"
                >
                  <RiCustomerService2Line size={20} />
                </Button>
              </TooltipTrigger>
              <TooltipContent
                side="right"
                align="center"
                className=" p-2"
              >
                <p className=" text-neutral-900">Support</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
      <div className="flex flex-col gap-2 p-2">
        <Button
          size="icon"
          variant="ghost"
          onClick={(e) => {
            e.preventDefault();
            setState((prev) => ({ ...prev, run: !prev.run }));
          }}
        >
          <InfoCircle
            size={20}
            variant="Outline"
            className={cn(' ml-[2px]', {})}
          />
        </Button>
        {/* <div className=" relative">
          <Circle
            strokeWidth={6}
            percent={10}
            strokeColor="#db2777"
            trailWidth={6}
          />
          <p className=" absolute text-sm text-pink-600 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
            10%
          </p>
        </div> */}
        {/* <div className=" w-10 aspect-square rounded-[50%] relative overflow-hidden">
          <Image
            src="/images/51.png"
            fill
            alt=""
            className=" object-cover object-center"
          />
        </div> */}
      </div>
    </aside>
  );
}
