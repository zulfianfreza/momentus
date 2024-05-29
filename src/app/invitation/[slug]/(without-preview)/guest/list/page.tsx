'use client';

import HeadingConfigurationSection from '@/components/common/heading-configuration-section';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import useToggle from '@/hooks/use-toggle';
import {
  AddSquare,
  ExportSquare,
  ImportSquare,
  Send,
  Share,
  Trash,
} from 'iconsax-react';
import { useCallback, useState } from 'react';
import { HiMiniEllipsisHorizontal } from 'react-icons/hi2';
import { PiShare, PiShareNetwork } from 'react-icons/pi';

export default function SettingPage() {
  // state
  const [showAdd, setShowAdd] = useState<boolean>(false);

  const toggle = useCallback(() => {
    setShowAdd((prev) => !prev);
  }, []);

  const DUMMY_VISITOR = [
    {
      id: 1,
      recipient_name: 'Adam Berriz',
      recipient_whatsapp: '082229872',
      recipient_address: 'Jl. Venus',
      created_at: '2024-05-25T17:06:38+00:00',
      recipient_greeting: 'Yth',
    },
  ];
  return (
    <>
      <div className=" w-full p-5">
        <HeadingConfigurationSection
          title="Daftar Tamu"
          subtitle="Tambahkan dan kelola daftar tamu Anda untuk memastikan semua orang yang spesial hadir di hari istimewa Anda."
        />

        <div className=" mt-4">
          <div className="flex items-end justify-between">
            <div className="flex gap-1">
              <Button
                size="sm"
                onClick={toggle}
              >
                <AddSquare size={16} /> Tambah Tamu
              </Button>
              <Button
                size="sm"
                variant="destructive"
              >
                <ExportSquare size={16} /> Export
              </Button>
              <Button
                className=""
                variant="success"
                size="sm"
              >
                <ImportSquare size={16} />
                Import
              </Button>
            </div>
            <div className="flex gap-2">
              <Input
                className=" h-8 rounded-md text-xs"
                placeholder="Cari tamu"
              />
            </div>
          </div>
          <div className=" mt-2 overflow-hidden rounded-xl border">
            <Table>
              <TableHeader>
                <TableRow className=" bg-neutral-100">
                  <TableHead>No.</TableHead>
                  <TableHead>Nama Tamu</TableHead>
                  <TableHead>Nomor Hp.</TableHead>
                  <TableHead>Alamat</TableHead>
                  <TableHead className="text-right">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {DUMMY_VISITOR.map((visitor, i) => (
                  <TableRow key={i}>
                    <TableCell>{i + 1}</TableCell>
                    <TableCell>{visitor.recipient_name}</TableCell>
                    <TableCell>{visitor.recipient_whatsapp}</TableCell>
                    <TableCell>{visitor.recipient_address}</TableCell>
                    <TableCell>
                      <div className="flex items-center justify-end gap-2">
                        <Button size="sm">Share</Button>
                        <Button
                          variant="destructive"
                          size="icon-sm"
                        >
                          <Trash size={16} />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
      <Dialog
        open={showAdd}
        onOpenChange={toggle}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Tambah Tamu</DialogTitle>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
}
