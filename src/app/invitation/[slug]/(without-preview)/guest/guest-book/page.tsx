import HeadingConfigurationSection from '@/components/common/heading-configuration-section';
import Image from 'next/image';

export default function GuestBookPage() {
  return (
    <div className=" h-full w-full p-5">
      <HeadingConfigurationSection title="Buku Tamu" />

      <div className=" flex h-full items-center justify-center">
        <h1 className="">Soming Coon.</h1>
      </div>
    </div>
  );
}
