"use client";

import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { getSidebarMenu } from "@/constant/common.constant";
import { cn } from "@/lib/utils";
import { ArrowLeft, InfoCircle } from "iconsax-react";
import Image from "next/image";

import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { Circle } from "rc-progress";
import { useCallback } from "react";
import { BsTablet } from "react-icons/bs";
import { PiArrowLeft } from "react-icons/pi";
import { RiCustomerService2Line } from "react-icons/ri";

export default function Sidebar() {
  // hooks
  const pathname = usePathname();
  const params = useParams<{ slug: string }>();

  // sidebar menu
  const sidebarMenu = getSidebarMenu(params.slug);

  // active menu
  const activeMenu = useCallback(
    (menu: string) =>
      menu === "/invitation/xyz"
        ? menu === pathname
        : pathname.startsWith(menu),
    [pathname]
  );

  return (
    <aside className=" flex h-screen fixed z-[12] left-0 w-fit bg-white border-r shadow-sm flex-col">
      <div className=" h-full w-full flex-1 flex flex-col items-center">
        <Button variant="ghost" size="icon" className=" mt-2">
          <PiArrowLeft size={20} />
        </Button>
        <p className=" text-xs text-neutral-500 text-center mt-4">Menu</p>
        <div className="flex flex-col mt-2">
          {sidebarMenu.map((menu) => (
            <TooltipProvider key={menu.path} delayDuration={0}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    size="icon"
                    variant={activeMenu(menu.path) ? "secondary" : "ghost"}
                    asChild
                    className={cn(
                      " rounded-none w-14 h-12 border-r-2 border-transparent ",
                      {
                        "border-pink-600": activeMenu(menu.path),
                      }
                    )}
                  >
                    <Link href={menu.path}>
                      <menu.icon
                        size={20}
                        variant={activeMenu(menu.path) ? "Outline" : "Outline"}
                        className={cn(" ml-[2px]", {
                          "": activeMenu(menu.path),
                        })}
                      />
                    </Link>
                  </Button>
                </TooltipTrigger>
                <TooltipContent
                  side="right"
                  align={menu.submenu ? "start" : "center"}
                  className=" p-2.5 rounded-xl"
                >
                  <p className=" text-neutral-900">{menu.title}</p>
                  {menu.submenu && (
                    <div className="flex flex-col mt-2 gap-2">
                      {menu.submenu.map((submenu) => (
                        <Button
                          key={submenu.title}
                          size="sm"
                          variant={
                            activeMenu(submenu.path) ? "default" : "secondary"
                          }
                          className=" justify-start"
                          asChild
                        >
                          <Link href={submenu.path}>
                            <submenu.icon
                              size={16}
                              className={cn(" ", {
                                "text-white": activeMenu(submenu.path),
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
                    className=" rounded-none w-14"
                  >
                    <BsTablet size={20} />
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="right" align="start" className=" p-2">
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
                  className=" rounded-none w-14 h-12"
                >
                  <RiCustomerService2Line size={20} />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right" align="center" className=" p-2">
                <p className=" text-neutral-900">Support</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
      <div className="flex flex-col gap-2 p-2">
        <Button size="icon" variant="ghost">
          <InfoCircle
            size={20}
            variant="Outline"
            className={cn(" ml-[2px]", {})}
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
