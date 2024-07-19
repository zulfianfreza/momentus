'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { PopoverClose } from '@radix-ui/react-popover';
import { AddSquare } from 'iconsax-react';
import { HiChevronUpDown } from 'react-icons/hi2';
import { LuCheck } from 'react-icons/lu';

type TProps = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function SelectInvitation({ setOpen }: TProps) {
  return (
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
              <LuCheck className=" text-primary visible" />
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
              onClick={() => setOpen((prev) => !prev)}
            >
              <AddSquare size={16} />
              Buat Baru
            </Button>
          </PopoverClose>
        </div>
      </PopoverContent>
    </Popover>
  );
}
