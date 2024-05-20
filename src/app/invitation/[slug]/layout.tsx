"use client";

import CountdownDisplay from "@/components/common/countdown-display";
import Preview from "@/components/common/preview";
import Sidebar from "@/components/layout/sidebar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { INVITATION_FAKER } from "@/constant/faker.constant";
import { useCountdown } from "@/hooks/use-count-down";
import { ArrowLeft, Eye } from "iconsax-react";
import Link from "next/link";

export default function InvitationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [days, hours, minutes, seconds] = useCountdown(
    new Date(INVITATION_FAKER.plan_expired_date)
  );
  return (
    <div className=" w-full min-h-screen bg-neutral-100 text-neutral-900">
      <header className=" fixed w-full h-14 lg:h-[72px] bg-white border-b z-[12] pl-14 lg:pl-[72px] shadow-sm">
        <div className="flex justify-between h-14 lg:h-[72px] p-2 lg:p-4 items-center">
          <div className=" flex items-center gap-4">
            <Badge className=" bg-green-100 text-green-500 h-8 px-4 font-normal">
              Free Trial
            </Badge>
            <CountdownDisplay
              days={days}
              hours={hours}
              minutes={minutes}
              seconds={seconds}
            />
          </div>
          <div className="flex items-center">
            <Button className=" rounded-lg" asChild>
              <Link href="http://localhost:3000/demo" target="_blank">
                <Eye size={16} /> Preview
              </Link>
            </Button>
          </div>
        </div>
      </header>
      <Sidebar />
      {children}
    </div>
  );
}
