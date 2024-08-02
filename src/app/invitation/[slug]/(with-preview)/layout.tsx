'use client';

import PreviewCanvas from '@/components/layout/preview';

export default function WithPreviewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className=" flex h-screen w-full pl-20">
      <PreviewCanvas />

      <div className=" hidden h-screen w-[400px] p-2 pl-0 pt-14 md:flex lg:w-[512px] lg:pt-[80px]">
        <div className=" h-full w-full overflow-y-auto rounded-xl bg-white">
          {children}
        </div>
      </div>
    </div>
  );
}
