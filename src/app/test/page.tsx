"use client";

import useScrollspy from "@/hooks/use-scroll-spy";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { useCallback, useState } from "react";

export default function TestPage() {
  const activeId = useScrollspy(["section-1", "section-2"], 5);

  // handle scroll to element
  const handleScrollTo = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
      e.stopPropagation();
      e.preventDefault();

      const invitationContainer = document.querySelector(
        "#invitation-container"
      );
      const el = document.getElementById(id);
      if (invitationContainer) {
        if (el) {
          invitationContainer.scrollTo({
            top: el.offsetTop,
            behavior: "smooth",
          });
        }
      }
    },
    []
  );

  return (
    <>
      <div className=" w-full p-5 flex fixed z-[50] items-center justify-center gap-4">
        <Link
          href="#section-1"
          className={cn("text-white", {
            "text-red-500": activeId === "section-1",
          })}
          onClick={(e) => handleScrollTo(e, "section-1")}
        >
          Section 1
        </Link>
        <Link
          href="#section-2"
          className={cn("text-white", {
            "text-red-500": activeId === "section-2",
          })}
          onClick={(e) => handleScrollTo(e, "section-2")}
        >
          Section 2
        </Link>
      </div>
      <div
        className=" h-screen overflow-y-auto w-full"
        id="invitation-container"
      >
        <section id="section-1">
          <div className=" w-full h-screen bg-purple-500"></div>
        </section>
        <section id="section-2">
          <div className=" w-full h-screen bg-sky-500"></div>
        </section>
      </div>
    </>
  );
}
