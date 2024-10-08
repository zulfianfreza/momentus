'use client';

import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { getSidebarMenu } from '@/constant/navigation.constant';
import useMediaQuery from '@/hooks/use-media-query';
import { cn } from '@/lib/utils';
import { PopoverClose } from '@radix-ui/react-popover';
import { InfoCircle } from 'iconsax-react';

import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';
import { useCallback, useState } from 'react';
import { BsTablet } from 'react-icons/bs';
import { PiArrowLeft } from 'react-icons/pi';
import { RiCustomerService2Line } from 'react-icons/ri';
import Joyride, { CallBackProps, STATUS, Step } from 'react-joyride';

export default function ConfigurationSidebar() {
  // hooks
  const pathname = usePathname();
  const params = useParams<{ slug: string }>();
  const isWithForm = useMediaQuery('(min-width: 768px)');

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
        placement: 'auto',
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
    <aside className=" fixed left-0 z-[11] h-screen p-2 pt-14 lg:pt-[80px]">
      <div
        className=" flex h-full w-16 flex-col rounded-xl bg-white shadow-sm "
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
        <div className=" mt-2 flex h-full w-full flex-1 flex-col items-center">
          <Button
            variant="ghost"
            size="icon"
          >
            <PiArrowLeft size={20} />
          </Button>
          <p className=" mt-4 text-center text-[10px] text-neutral-500">Menu</p>
          <div className="mt-2 flex flex-col items-center gap-1">
            {sidebarMenu.map((menu) => {
              if (isWithForm) {
                return (
                  <TooltipProvider
                    key={menu.path}
                    delayDuration={0}
                  >
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          size="icon"
                          variant={activeMenu(menu.path) ? 'default' : 'ghost'}
                          asChild
                          className={cn(' rounded-full', {
                            '': activeMenu(menu.path),
                          })}
                        >
                          <Link href={menu.path}>
                            <menu.icon
                              size={20}
                              variant={
                                activeMenu(menu.path) ? 'Outline' : 'Outline'
                              }
                              className={cn(' ', {
                                ' ': activeMenu(menu.path),
                              })}
                            />
                          </Link>
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent
                        side="right"
                        align={menu.submenu ? 'start' : 'center'}
                        className=" rounded-lg p-2"
                      >
                        <p className=" text-neutral-900">{menu.title}</p>
                        {menu.submenu && (
                          <div className="mt-2 flex flex-col gap-2">
                            {menu.submenu.map((submenu) => (
                              <Button
                                key={submenu.title}
                                size="sm"
                                variant={
                                  activeMenu(submenu.path)
                                    ? 'default'
                                    : 'secondary'
                                }
                                className=" justify-start "
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
                );
              } else {
                return menu.submenu ? (
                  <Popover key={menu.path}>
                    <PopoverTrigger asChild>
                      <Button
                        key={menu.path}
                        size="icon"
                        variant={activeMenu(menu.path) ? 'default' : 'ghost'}
                        className={cn('', {
                          '': activeMenu(menu.path),
                        })}
                      >
                        <menu.icon
                          size={20}
                          variant={
                            activeMenu(menu.path) ? 'Outline' : 'Outline'
                          }
                          className={cn(' ', {
                            ' ': activeMenu(menu.path),
                          })}
                        />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent
                      side="right"
                      align="start"
                      className=" w-64"
                    >
                      <p className="">{menu.title}</p>
                      <div className=" mt-2 grid grid-cols-3 gap-2">
                        {menu.submenu.map((submenu) => (
                          <PopoverClose
                            key={submenu.path}
                            className="flex flex-col items-center justify-center gap-1 rounded-lg border p-2 shadow-sm"
                          >
                            <submenu.icon
                              size={16}
                              variant={
                                activeMenu(menu.path) ? 'Outline' : 'Outline'
                              }
                              className={cn(' ', {
                                ' ': activeMenu(menu.path),
                              })}
                            />
                            <p className=" text-center text-xs">
                              {submenu.title}
                            </p>
                          </PopoverClose>
                        ))}
                      </div>
                    </PopoverContent>
                  </Popover>
                ) : (
                  <TooltipProvider
                    key={menu.path}
                    delayDuration={0}
                  >
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          size="icon"
                          variant={activeMenu(menu.path) ? 'default' : 'ghost'}
                          asChild
                          className={cn('', {
                            '': activeMenu(menu.path),
                          })}
                        >
                          <Link href={menu.path}>
                            <menu.icon
                              size={20}
                              variant={
                                activeMenu(menu.path) ? 'Outline' : 'Outline'
                              }
                              className={cn(' ', {
                                ' ': activeMenu(menu.path),
                              })}
                            />
                          </Link>
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent
                        side="right"
                        align={menu.submenu ? 'start' : 'center'}
                        className=" rounded-lg p-2"
                      >
                        <p className=" text-neutral-900">{menu.title}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                );
              }
            })}
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
          </div>
          <p className=" mt-4 text-center text-[10px] text-neutral-500">
            Bantuan
          </p>
          <div className="mt-2 flex flex-col gap-1">
            <TooltipProvider delayDuration={0}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    size="icon"
                    variant="ghost"
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
          </div>
        </div>
      </div>
      {/* <div className="flex flex-col gap-2 p-2"></div> */}
    </aside>
  );
}
