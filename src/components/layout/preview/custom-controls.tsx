'use client';

import { cn } from '@/lib/utils';
import usePreviewDeviceTypeStore from '@/store/preview-device-type';
import { TPreviewDeviceType } from '@/types/common.type';
import { BsLaptop, BsTablet } from 'react-icons/bs';
import { IoPhonePortraitOutline } from 'react-icons/io5';
import { LuFocus, LuMinus, LuPlus } from 'react-icons/lu';
import { useReactFlow, useStoreApi } from 'reactflow';
import { Button } from '../../ui/button';

export default function CustomControls() {
  const store = useStoreApi();
  const { type, setType } = usePreviewDeviceTypeStore();
  const { zoomIn, zoomOut, setCenter } = useReactFlow();

  //
  const focusNode = () => {
    const { nodeInternals } = store.getState();
    const nodes = Array.from(nodeInternals).map(([, node]) => node);

    if (nodes.length > 0) {
      const node = nodes[0];

      if (node.width && node.height) {
        const x = node.position.x + node.width / 2;
        const y = node.position.y + node.height / 2;
        const zoom = 1;

        setCenter(x, y, { zoom, duration: 1000 });
      }
    }
  };

  const handleChangeType = (type: TPreviewDeviceType) => {
    setType(type);
    setTimeout(() => focusNode(), 50);
  };

  return (
    <div className="absolute right-4 top-4 z-[99] flex flex-col gap-2">
      <div className="flex flex-col items-center gap-1 rounded-lg bg-white p-1 shadow-sm">
        <Button
          variant="ghost"
          size="icon-sm"
          onClick={() => handleChangeType('smartphone')}
        >
          <IoPhonePortraitOutline
            size={20}
            className={cn({
              ' text-pink-600': type === 'smartphone',
            })}
          />
        </Button>
        <Button
          variant="ghost"
          size="icon-sm"
          onClick={() => handleChangeType('tablet')}
        >
          <BsTablet
            size={20}
            className={cn({ ' text-pink-600': type === 'tablet' })}
          />
        </Button>
        <Button
          variant="ghost"
          size="icon-sm"
          onClick={() => handleChangeType('laptop')}
        >
          <BsLaptop
            size={20}
            className={cn({ ' text-pink-600': type === 'laptop' })}
          />
        </Button>
      </div>
      <div className=" flex flex-col items-center gap-1  rounded-lg bg-white p-1">
        <Button
          variant="ghost"
          size="icon-sm"
          onClick={() => zoomIn()}
        >
          <LuPlus />
        </Button>
        <Button
          variant="ghost"
          size="icon-sm"
          className=" rounded-full"
          onClick={() => zoomOut()}
        >
          <LuMinus />
        </Button>
        <Button
          variant="ghost"
          size="icon-sm"
          className=" rounded-full"
          onClick={() => focusNode()}
        >
          <LuFocus />
        </Button>
      </div>
    </div>
  );
}
