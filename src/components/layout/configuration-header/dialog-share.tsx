'use client';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import React from 'react';

type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function DialogShare({ open, setOpen }: TProps) {
  return (
    <Dialog
      open={open}
      onOpenChange={setOpen}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Bagikan Undangan</DialogTitle>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
