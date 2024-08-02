'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useState } from 'react';
import DialogAddInvitation from './dialog-add-invitation';
import DialogShare from './dialog-share';
import SelectInvitation from './select-invitation';
import Logo from '@/components/common/logo';

export default function ConfigurationHeader() {
  const [showAddInvitation, setShowAddInvitation] = useState<boolean>(false);
  const [showShare, setShowShare] = useState<boolean>(false);
  return (
    <>
      <header className=" fixed z-[12] h-14 w-full border-b bg-white shadow-sm lg:h-[72px]">
        <div className="flex h-14 items-center justify-between p-2 lg:h-[72px] lg:p-4">
          <div className=" flex items-center gap-4">
            <Logo />

            <SelectInvitation setOpen={setShowAddInvitation} />
            <Badge variant="destructive">Expired</Badge>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              onClick={() => setShowShare((prev) => !prev)}
              className=" rounded-full"
            >
              Share
            </Button>
            <Button
              asChild
              className=" rounded-full"
            >
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
      <DialogAddInvitation
        open={showAddInvitation}
        setOpen={setShowAddInvitation}
      />
      <DialogShare
        open={showShare}
        setOpen={setShowShare}
      />
    </>
  );
}
