"use client";

import Preview from "@/components/common/preview";
import Sidebar from "@/components/layout/sidebar";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Eye } from "iconsax-react";

export default function InvitationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className=" w-full min-h-screen bg-neutral-100">
      <header className=" fixed w-full h-[72px] bg-white border-b z-[12] shadow-sm">
        <div className="flex justify-between h-[72px] p-4 items-center">
          <button>
            <ArrowLeft />
          </button>
          <div className="flex items-center">
            <Button className=" rounded-xl">
              <Eye size={16} /> Preview
            </Button>
          </div>
        </div>
      </header>
      <Sidebar />
      <div className=" pl-[72px] w-full flex h-screen">
        <div className="w-[624px] h-screen flex left-[72px] bg-white pt-20">
          <div className=" overflow-y-auto w-full">{children}</div>
        </div>
        <Preview />
      </div>
    </div>
  );
}
