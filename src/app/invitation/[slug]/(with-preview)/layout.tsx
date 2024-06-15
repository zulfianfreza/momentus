'use client';

import PreviewCanvas from '@/components/layout/preview';

export default function WithPreviewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className=" flex h-screen w-full pl-14">
      <PreviewCanvas />

      <div className=" hidden h-screen w-[400px] bg-white pt-14 md:flex lg:w-[512px] lg:pt-[72px]">
        <div className=" w-full overflow-y-auto">{children}</div>
      </div>
    </div>
  );
}
