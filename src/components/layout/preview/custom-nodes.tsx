'use client';

import usePreviewDeviceTypeStore from '@/store/preview-device-type';
import { usePathname } from 'next/navigation';
import { memo, useCallback, useEffect, useMemo } from 'react';

const CustomNodes = () => {
  const pathname = usePathname();
  const partsPathname = pathname.split('/');

  const { type } = usePreviewDeviceTypeStore();

  const url = useMemo(
    () =>
      `${process.env.NEXT_PUBLIC_BASE_URL}/theme/black-and-white?demo_secret=${process.env.NEXT_PUBLIC_DEMO_SECRET}&active_section=${partsPathname[partsPathname.length - 1]}&show_cover=${partsPathname[partsPathname.length - 1] === 'cover' ? true : false}`,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  const handleActiveSection = useCallback(() => {
    const iframe = document.getElementById('preview-page') as HTMLIFrameElement;

    if (!iframe) return;

    iframe.contentWindow?.postMessage(
      {
        type: 'actived-section-updated',
        active_section: partsPathname[partsPathname.length - 1],
        show_cover:
          partsPathname[partsPathname.length - 1] === 'cover' ? true : false,
      },
      '*',
    );
  }, [partsPathname]);

  useEffect(() => {
    handleActiveSection();
  }, [handleActiveSection]);

  return (
    <div
      style={{ scale: 100 / 100 }}
      className=" "
    >
      <div>
        {type === 'laptop' ? (
          <div className=" relative aspect-[621/360] w-[656px] overflow-hidden bg-[url(/images/macbook-frame.png)] bg-contain bg-center bg-no-repeat px-[68px] pb-[38px] pt-[18px]">
            <iframe
              src={url}
              className=" h-[calc(100%*2.5)] w-[calc(100%*2.5)] -translate-x-[30.025%] -translate-y-[30.025%] scale-[0.4] overflow-hidden rounded-md bg-black"
              id="preview-page"
            ></iframe>
          </div>
        ) : type === 'tablet' ? (
          <div className=" relative aspect-[127/177] w-[424px] overflow-hidden  bg-[url(/images/ipad-frame.png)] bg-contain bg-center bg-no-repeat px-[18px] pb-[35px] pt-[37px]">
            <iframe
              src={url}
              className=" h-[calc(100%*1.75)] w-[calc(100%*1.75)] -translate-x-[21.5%] -translate-y-[21.5%] scale-[0.5712] overflow-hidden rounded-xl bg-black"
              id="preview-page"
            ></iframe>
          </div>
        ) : (
          <div className=" relative aspect-[438/892] w-[278px] overflow-hidden bg-[url(/images/mobile-frame.png)] bg-contain bg-center bg-no-repeat px-[16px] pb-[56px] pt-[50px]">
            <iframe
              src={url}
              className=" h-[calc(100%*1.5)] w-[calc(100%*1.5)] -translate-x-[16.667%] -translate-y-[16.667%] scale-[0.667] overflow-hidden bg-black"
              id="preview-page"
            ></iframe>
          </div>
        )}
      </div>
    </div>
  );
};

export default memo(CustomNodes);
