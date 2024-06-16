'use client';

import InputItem from '@/components/common/input-item';
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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import React, { Dispatch, SetStateAction, useState } from 'react';

type TProps = {
  open: boolean;
  setOpen: React.Dispatch<SetStateAction<boolean>>;
};

export default function DialogAddInvitation({ open, setOpen }: TProps) {
  const [invitationType, setInvitationType] = useState('wedding');
  return (
    <Dialog
      open={open}
      onOpenChange={setOpen}
    >
      <DialogContent className=" max-w-lg">
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
  );
}
