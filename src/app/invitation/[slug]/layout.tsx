"use client";

import CountdownDisplay from "@/components/common/countdown-display";
import InputItem from "@/components/common/input-item";
import Preview from "@/components/common/preview";
import Sidebar from "@/components/layout/sidebar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { INVITATION_FAKER } from "@/constant/faker.constant";
import { useCountdown } from "@/hooks/use-count-down";
import { ArrowLeft, Eye } from "iconsax-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { LuChevronDown } from "react-icons/lu";

export default function InvitationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showAddInvitation, setShowAddInvitation] = useState<boolean>(false);
  const [invitationType, setInvitationType] = useState("wedding");

  return (
    <>
      <div className=" w-full min-h-screen bg-neutral-100 text-neutral-900">
        <header className=" fixed w-full h-14 lg:h-[72px] bg-white border-b z-[12] pl-14 shadow-sm">
          <div className="flex justify-between h-14 lg:h-[72px] p-2 lg:p-4 items-center">
            <div className=" flex items-center gap-4">
              <DropdownMenu>
                <DropdownMenuTrigger className="">
                  <div className="flex items-center gap-2 text-sm h-8">
                    sekar-hilman <LuChevronDown />
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className=" rounded-xl">
                  <DropdownMenuLabel>Daftar Undangan</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <div className="flex items-center gap-1">
                      <p>sekar-hilman</p>
                      <div className=" bg-neutral-900 text-yellow-500 text-[10px] rounded-full px-[8px] leading-none py-[4px]">
                        Rarely
                      </div>
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <div className="flex items-center gap-1">
                      <p>momenthus-gathering</p>
                      <div className=" bg-blue-100 text-blue-500 text-[10px] rounded-full px-[8px] leading-none py-[4px]">
                        Fair
                      </div>
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <div className="flex items-center gap-1">
                      <p>adam-anne</p>
                      <div className=" bg-green-100 text-green-500 text-[10px] rounded-full px-[8px] leading-none py-[4px]">
                        Trial
                      </div>
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <div className="flex items-center gap-1">
                      <p>dian-ado</p>
                      <div className=" bg-red-100 text-red-500 text-[10px] rounded-full px-[8px] leading-none py-[4px]">
                        Expired
                      </div>
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Button
                      className=" w-full rounded-lg"
                      onClick={() => setShowAddInvitation((prev) => !prev)}
                    >
                      Buat Baru
                    </Button>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Badge className=" bg-neutral-900 text-yellow-500 font-medium h-8 px-4">
                Rarely
              </Badge>
              {/* <CountdownDisplay
                days={days}
                hours={hours}
                minutes={minutes}
                seconds={seconds}
              /> */}
            </div>
            <div className="flex items-center gap-2">
              <Button className=" rounded-xl" variant="outline">
                Share
              </Button>
              <Button className=" rounded-xl" asChild>
                <Link href="http://localhost:3000/demo" target="_blank">
                  Live View
                </Link>
              </Button>
            </div>
          </div>
        </header>
        <Sidebar />
        {children}
      </div>

      <Dialog open={showAddInvitation} onOpenChange={setShowAddInvitation}>
        <DialogContent className=" max-w-xl">
          <DialogHeader>
            <DialogTitle>Buat Undangan Baru</DialogTitle>
            <DialogDescription>
              Mulailah dengan mengisi informasi dasar untuk undangan pernikahan
              Anda.
            </DialogDescription>
          </DialogHeader>

          <div className="flex flex-col gap-4">
            <InputItem>
              <Label>Tipe Undangan</Label>
              <Select value={invitationType} onValueChange={setInvitationType}>
                <SelectTrigger>
                  <SelectValue placeholder="Tipe Undangan" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="wedding">Pernikahan</SelectItem>
                  <SelectItem value="khitanan">Khitanan</SelectItem>
                  <SelectItem value="birthday">Ulang Tahun</SelectItem>
                  <SelectItem value="other">Lainnya</SelectItem>
                </SelectContent>
              </Select>
            </InputItem>

            {invitationType === "wedding" ? (
              <>
                <InputItem>
                  <Label>Nama Panggilan Pria</Label>
                  <Input placeholder="Sekar" />
                </InputItem>
                <InputItem>
                  <Label>Nama Panggilan Wanita</Label>
                  <Input placeholder="Hilman" />
                </InputItem>
              </>
            ) : (
              <>
                <InputItem>
                  <Label>Nama Pribadi/Organisasi/Acara</Label>
                  <Input placeholder="Ulang Tahun Kim Jong Un / Momentus Gathering" />
                </InputItem>
                <InputItem>
                  <Label>Deskripsi</Label>
                  <Textarea placeholder="Ulang Tahun Kim Jong Un / Momentus Gathering" />
                </InputItem>
              </>
            )}
            <div className="flex justify-end gap-2">
              <Button variant="outline">Cancel</Button>
              <Button>Buat Sekarang</Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
