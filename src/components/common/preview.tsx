'use client';

import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { BsLaptop, BsTablet } from 'react-icons/bs';
import { IoPhonePortraitOutline } from 'react-icons/io5';
import { Button } from '../ui/button';
import { LuMinus, LuPlus } from 'react-icons/lu';
import { DndContext, useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';

export default function Preview() {
  const [activedFrame, setActivedFrame] = useState<
    'smartphone' | 'tablet' | 'laptop'
  >('tablet');
  const [scale, setScale] = useState<number>(100);

  const pathname = usePathname();
  const partsPathname = pathname.split('/');

  const handleActiveSection = useCallback(() => {
    const iframe = document.getElementById('preview-page') as HTMLIFrameElement;

    if (!iframe) return;

    iframe.contentWindow?.postMessage(
      {
        type: 'actived-section-updated',
        activeSection: partsPathname[partsPathname.length - 1],
      },
      '*',
    );
  }, [partsPathname]);

  const url = useMemo(
    () =>
      `http://localhost:3000/theme/basic-001?activeSection=${
        partsPathname[partsPathname.length - 1]
      }`,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  useEffect(() => {
    handleActiveSection();
  }, [handleActiveSection]);

  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: 'unique-id',
  });
  const style = {
    transform: CSS.Translate.toString(transform),
  };

  return (
    <div className="  h-screen flex-1 pt-[72px]">
      <div
        className=" relative flex h-full w-full flex-col items-center justify-center overflow-hidden  bg-dot-black/[0.2]"
        id="second-step"
      >
        <div className="absolute left-4 top-4 z-[49] flex flex-col  gap-4">
          <div className="  flex w-10 flex-col items-center gap-4 rounded-full bg-white py-4 ">
            <button onClick={() => setActivedFrame('smartphone')}>
              <IoPhonePortraitOutline
                size={20}
                className={cn({
                  ' text-pink-600': activedFrame === 'smartphone',
                })}
              />
            </button>
            <button onClick={() => setActivedFrame('tablet')}>
              <BsTablet
                size={20}
                className={cn({ ' text-pink-600': activedFrame === 'tablet' })}
              />
            </button>
            <button onClick={() => setActivedFrame('laptop')}>
              <BsLaptop
                size={20}
                className={cn({ ' text-pink-600': activedFrame === 'laptop' })}
              />
            </button>
          </div>
          <div className=" flex flex-col items-center gap-1  rounded-full bg-white p-1">
            <Button
              variant="ghost"
              size="icon-sm"
              className=" rounded-full"
              onClick={() => setScale((prev) => prev - 10)}
            >
              <LuMinus />
            </Button>
            <p className=" text-xs">{scale}</p>
            <Button
              variant="ghost"
              size="icon-sm"
              className=" rounded-full"
              onClick={() => setScale((prev) => prev + 10)}
            >
              <LuPlus />
            </Button>
          </div>
        </div>
        <div
          style={{ scale: scale / 100 }}
          className=" "
        >
          <DndContext>
            {activedFrame === 'laptop' ? (
              <div className=" relative aspect-[621/360] w-[656px] overflow-hidden bg-[url(/images/macbook-frame.png)] bg-contain bg-center bg-no-repeat px-[68px] pb-[38px] pt-[18px]">
                <iframe
                  src={url}
                  className=" h-[calc(100%*2.5)] w-[calc(100%*2.5)] -translate-x-[30.025%] -translate-y-[30.025%] scale-[0.4] overflow-hidden rounded-md"
                  id="preview-page"
                ></iframe>
              </div>
            ) : activedFrame === 'tablet' ? (
              <div
                {...attributes}
                ref={setNodeRef}
                style={
                  {
                    ...style,
                    '--translate-x': `${transform?.x ?? 0}px`,
                    '--translate-y': `${transform?.y ?? 0}px`,
                  } as React.CSSProperties
                }
                {...listeners}
                className=" relative aspect-[127/176] w-[424px] overflow-hidden  bg-[url(/images/ipad-frame.png)] bg-contain bg-center bg-no-repeat px-[18px] pb-[35px] pt-[37px]"
              >
                <iframe
                  src={url}
                  className=" h-[calc(100%*1.75)] w-[calc(100%*1.75)] -translate-x-[21.5%] -translate-y-[21.5%] scale-[0.5712] overflow-hidden rounded-xl"
                  id="preview-page"
                ></iframe>
              </div>
            ) : (
              <div className=" relative aspect-[438/892] w-[278px] overflow-hidden bg-[url(/images/mobile-frame.png)] bg-contain bg-center bg-no-repeat px-[16px] pb-[56px] pt-[50px]">
                <iframe
                  src={url}
                  className=" h-[calc(100%*1.5)] w-[calc(100%*1.5)] -translate-x-[16.667%] -translate-y-[16.667%] scale-[0.667] overflow-hidden"
                  id="preview-page"
                ></iframe>
              </div>
            )}
          </DndContext>
        </div>
      </div>
    </div>
  );
}
