import HeadingConfigurationSection from '@/components/common/heading-configuration-section';
import Image from 'next/image';

export default function ExtraPage() {
  return (
    <div className=" w-full p-5">
      <HeadingConfigurationSection
        title="Filter Instagram"
        subtitle="Pilih filter yang tepat untuk menciptakan suasana dan gaya yang sesuai dengan tema pernikahan Anda."
      />

      <div className=" mt-4 grid grid-cols-3 gap-4">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className=" flex flex-col items-center gap-2"
          >
            <div className=" relative aspect-[9/16] w-full overflow-hidden rounded-lg">
              <Image
                src="/images/filter/001.png"
                fill
                alt=""
                className=" object-cover object-center"
              />
            </div>
            <p className=" text-sm">Filter {i.toString().padStart(3, '0')}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
