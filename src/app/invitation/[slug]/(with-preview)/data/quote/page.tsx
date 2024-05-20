import HeadingConfigurationSection from "@/components/common/heading-configuration-section";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { SIDEBAR_MENU } from "@/constant/common.constant";
import { QUOTES_FAKER } from "@/constant/faker.constant";
import { rubik } from "@/constant/font.constant";
import { cn } from "@/lib/utils";

export default function DataPage() {
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
          <Dialog>
            <DialogTrigger asChild>
              <Button className=" w-full">Daftar Quote</Button>
            </DialogTrigger>
            <DialogContent className=" max-h-[80vh] overflow-hidden flex flex-col p-0 gap-0">
              <DialogHeader className=" p-6">
                <DialogTitle>Quote Pilihan</DialogTitle>
              </DialogHeader>
              <div className=" flex flex-col gap-4 flex-1 overflow-y-scroll px-6 pb-6">
                {QUOTES_FAKER.map((quote, i) => (
                  <div
                    className=" rounded-xl w-full border shadow-sm px-16 py-16"
                    key={i}
                  >
                    <p className={cn(" text-sm text-center", rubik.className)}>
                      {quote.quote}
                    </p>
                  </div>
                ))}
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
}
