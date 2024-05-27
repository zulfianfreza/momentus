"use client";

import HeadingConfigurationSection from "@/components/common/heading-configuration-section";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { INVITATION_FAKER, QUOTES_FAKER } from "@/constant/faker.constant";
import { rubik } from "@/constant/font.constant";
import { cn } from "@/lib/utils";
import { TInvitation } from "@/types/invitation.type";
import { reloadIframe } from "@/utils/iframe";
import { useCallback, useState } from "react";

export default function DataPage() {
  // state
  const [showListQuotes, setShowListQuotes] = useState<boolean>(false);

  return (
    <div className=" p-6 w-full">
      <HeadingConfigurationSection
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

      <Dialog open={showListQuotes} onOpenChange={setShowListQuotes}>
        <DialogContent className=" max-h-[80vh] overflow-hidden flex flex-col p-0 gap-0">
          <DialogHeader className=" p-6">
            <DialogTitle>Quote Pilihan</DialogTitle>
          </DialogHeader>
          <div className=" flex flex-col gap-4 flex-1 overflow-y-scroll px-6 pb-6">
            {QUOTES_FAKER.map((quote, i) => (
              <div
                // onClick={() => handleChangeQuote(quote.quote)}
                className=" rounded-xl w-full border shadow-sm px-16 py-16 relative flex flex-col items-center gap-4"
                key={i}
              >
                <p className={cn(" text-sm text-center", rubik.className)}>
                  {quote.quote}
                </p>
                <Button size="sm" variant="secondary-primary">
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
