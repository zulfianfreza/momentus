'use client';

import InputItem from '@/components/common/input-item';
import Sidebar from '@/components/layout/sidebar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';
import { PopoverClose } from '@radix-ui/react-popover';
import { AddSquare } from 'iconsax-react';
import Link from 'next/link';
import { useState } from 'react';
import { HiChevronUpDown } from 'react-icons/hi2';
import { LuCheck } from 'react-icons/lu';

export default function InvitationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showAddInvitation, setShowAddInvitation] = useState<boolean>(false);
  const [invitationType, setInvitationType] = useState('wedding');
  const [showShare, setShowShare] = useState<boolean>(false);

  return (
    <>
      <div
        className={cn(
          ' h-screen w-full overflow-hidden bg-neutral-100 text-neutral-900',
        )}
      >
        <header className=" fixed z-[12] h-14 w-full border-b bg-white pl-14 shadow-sm lg:h-[72px]">
          <div className="flex h-14 items-center justify-between p-2 lg:h-[72px] lg:p-4">
            <div className=" flex items-center gap-4">
              <Popover>
                <PopoverTrigger asChild>
                  <div className="flex h-8 cursor-pointer items-center gap-2 text-sm">
                    <div className="flex items-center gap-1">
                      <p>sekar-hilman</p>
                    </div>
                    <HiChevronUpDown />
                  </div>
                </PopoverTrigger>
                <PopoverContent
                  align="start"
                  side="bottom"
                  className=" max-w-max rounded-lg p-0"
                >
                  <div className=" flex flex-col gap-1 p-1">
                    <PopoverClose asChild>
                      <Button
                        variant="ghost"
                        className=" justify-start"
                        size="sm"
                      >
                        <LuCheck className=" invisible" />
                        <p>momenthus-gathering</p>
                        <Badge
                          variant="info"
                          size="xs"
                        >
                          Fair
                        </Badge>
                      </Button>
                    </PopoverClose>
                    <PopoverClose asChild>
                      <Button
                        variant="ghost"
                        className=" justify-start"
                        size="sm"
                      >
                        <LuCheck className=" visible text-pink-600" />
                        <p>sekar-hilman</p>
                        <Badge
                          variant="rarely"
                          size="xs"
                        >
                          Rarely
                        </Badge>
                      </Button>
                    </PopoverClose>
                    <PopoverClose asChild>
                      <Button
                        variant="ghost"
                        className=" justify-start"
                        size="sm"
                      >
                        <LuCheck className=" invisible" />
                        <p>adam-anne</p>
                        <Badge
                          variant="success"
                          size="xs"
                        >
                          Trial
                        </Badge>
                      </Button>
                    </PopoverClose>
                    <PopoverClose asChild>
                      <Button
                        variant="ghost"
                        className=" justify-start"
                        size="sm"
                      >
                        <LuCheck className=" invisible" />
                        <p>dian-ado</p>
                        <Badge
                          variant="destructive"
                          size="xs"
                        >
                          Expired
                        </Badge>
                      </Button>
                    </PopoverClose>
                  </div>
                  <div className=" border-t p-1">
                    <PopoverClose asChild>
                      <Button
                        className=" w-full gap-1 text-sm"
                        size="sm"
                        onClick={() => setShowAddInvitation((prev) => !prev)}
                      >
                        <AddSquare size={16} />
                        Buat Baru
                      </Button>
                    </PopoverClose>
                  </div>
                </PopoverContent>
              </Popover>
              <Badge variant="rarely">Rarely</Badge>
              {/* <CountdownDisplay
                days={days}
                hours={hours}
                minutes={minutes}
                seconds={seconds}
              /> */}
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                onClick={() => setShowShare((prev) => !prev)}
              >
                Share
              </Button>
              <Button asChild>
                <Link
                  href="http://localhost:3000/demo"
                  target="_blank"
                >
                  Live View
                </Link>
              </Button>
            </div>
          </div>
        </header>
        <Sidebar />
        {children}
      </div>

      <Dialog
        open={showAddInvitation}
        onOpenChange={setShowAddInvitation}
      >
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
              <Select
                value={invitationType}
                onValueChange={setInvitationType}
              >
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

            {invitationType === 'wedding' ? (
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
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <Button>Buat Sekarang</Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog
        open={showShare}
        onOpenChange={setShowShare}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Bagikan Undangan</DialogTitle>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
}
