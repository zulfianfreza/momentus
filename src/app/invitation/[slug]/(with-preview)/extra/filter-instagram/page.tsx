import HeadingConfigurationSection from "@/components/common/heading-configuration-section";
import Image from "next/image";

export default function ExtraPage() {
  return (
    <div className=" p-5 w-full">
      <HeadingConfigurationSection
        title="Filter Instagram"
        subtitle="Pilih filter yang tepat untuk menciptakan suasana dan gaya yang sesuai dengan tema pernikahan Anda."
      />

      <div className=" mt-8 grid grid-cols-3 gap-4">
        {[...Array(12)].map((_, i) => (
          <div key={i} className=" flex flex-col items-center gap-2">
            <div className=" w-full aspect-[9/16] relative rounded-lg overflow-hidden">
              <Image
                src="/images/filter/001.png"
                fill
                alt=""
                className=" object-cover object-center"
              />
            </div>
            <p className=" text-sm">Filter {i.toString().padStart(3, "0")}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
