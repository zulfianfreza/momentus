import HeadingConfigurationSection from "@/components/common/heading-configuration-section";
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

      <div className=" mt-4 flex flex-col gap-4">
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
    </div>
  );
}
