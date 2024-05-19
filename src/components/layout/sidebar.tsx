"use client";

import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { SIDEBAR_MENU } from "@/constant/common.constant";
import { cn } from "@/lib/utils";
import { ArrowLeft } from "iconsax-react";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback } from "react";
import { BsTablet } from "react-icons/bs";
import { IoPhonePortraitOutline } from "react-icons/io5";

export default function Sidebar() {
  const pathname = usePathname();

  const activeMenu = useCallback(
    (menu: string) =>
      menu === "/invitation/xyz"
        ? menu === pathname
        : pathname.startsWith(menu),
    [pathname]
  );
  return (
    <aside className=" flex h-screen fixed z-[12] left-0 w-fit bg-white border-r shadow-sm flex-col">
      <div className=" h-14 lg:h-[72px] p-2 lg:p-4 w-full">
        <Button variant="ghost" size="icon">
          <ArrowLeft />
        </Button>
      </div>
      <div className=" h-full p-2 lg:p-4 w-full">
        <div className="flex flex-col gap-2">
          {SIDEBAR_MENU.map((menu) => (
            <TooltipProvider key={menu.path} delayDuration={0}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    size="icon"
                    variant={activeMenu(menu.path) ? "default" : "ghost"}
                    asChild
                    className=" rounded-lg"
                  >
                    <Link href={menu.path}>
                      <menu.icon
                        size={20}
                        variant={activeMenu(menu.path) ? "Outline" : "Outline"}
                        className={cn(" text-neutral-900", {
                          "text-white": activeMenu(menu.path),
                        })}
                      />
                    </Link>
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="right" align="start" className=" p-2">
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
                              variant={submenu.variant ?? "Outline"}
                              className={cn(" text-pink-600", {
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
                  <Button size="icon" variant="ghost" className=" rounded-lg">
                    <BsTablet size={20} />
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="right" align="start" className=" p-2">
                  <p className=" text-neutral-900">Preview</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </div>
    </aside>
  );
}
