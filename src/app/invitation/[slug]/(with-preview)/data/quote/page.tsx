'use client';

import HeadingConfigurationSection from '@/components/common/heading-configuration-section';
import CustomBreadcrumb from '@/components/custom/custom-breadcrumb';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { QUOTES_FAKER } from '@/constant/faker.constant';
import { rubik } from '@/constant/font.constant';
import { cn } from '@/lib/utils';
import { useState } from 'react';

export default function DataPage() {
  // state
  const [showListQuotes, setShowListQuotes] = useState<boolean>(false);

  return (
    <div className=" w-full p-6">
      <CustomBreadcrumb items={[{ label: 'Data' }, { label: 'Quote' }]} />
      <HeadingConfigurationSection
        className=" mt-4"
        title="Quote"
        subtitle="Tambahkan kutipan inspiratif untuk memperindah undangan Anda dan
          menyampaikan pesan cinta yang mendalam."
      />

      <div className=" mt-4">
        <Textarea rows={8} />
        <div className=" mt-4 flex w-full">
          <Button
            className=" w-full"
            onClick={() => setShowListQuotes((prev) => !prev)}
          >
            Daftar Quote
          </Button>
        </div>
      </div>

      <Dialog
        open={showListQuotes}
        onOpenChange={setShowListQuotes}
      >
        <DialogContent className=" flex max-h-[80vh] flex-col gap-0 overflow-hidden p-0">
          <DialogHeader className=" p-6">
            <DialogTitle>Quote Pilihan</DialogTitle>
          </DialogHeader>
          <div className=" flex flex-1 flex-col gap-4 overflow-y-scroll px-6 pb-6">
            {QUOTES_FAKER.map((quote, i) => (
              <div
                // onClick={() => handleChangeQuote(quote.quote)}
                className=" relative flex w-full flex-col items-center gap-4 rounded-xl border px-16 py-16 shadow-sm"
                key={i}
              >
                <p className={cn(' text-center text-sm', rubik.className)}>
                  {quote.quote}
                </p>
                <Button
                  size="sm"
                  variant="secondary-primary"
                >
                  Pilih Quote Ini
                </Button>
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
