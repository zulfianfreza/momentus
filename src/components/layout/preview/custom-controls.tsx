'use client';

import { cn } from '@/lib/utils';
import usePreviewDeviceTypeStore from '@/store/preview-device-type';
import { TPreviewDeviceType } from '@/types/common.type';
import { BsLaptop, BsTablet } from 'react-icons/bs';
import { IoPhonePortraitOutline } from 'react-icons/io5';
import { LuFocus, LuMinus, LuPlus } from 'react-icons/lu';
import { useReactFlow, useStoreApi } from 'reactflow';
import { Button } from '../../ui/button';
import { useCallback, useEffect } from 'react';

export default function CustomControls() {
  const store = useStoreApi();
  const { type, setType } = usePreviewDeviceTypeStore();
  const { zoomIn, zoomOut, setCenter } = useReactFlow();

  // handle set the nodes to focus to the center
  const focusNode = useCallback(() => {
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
  }, [setCenter, store]);

  // handle change active device type
  const handleChangeType = useCallback(
    (type: TPreviewDeviceType) => {
      setType(type);
      setTimeout(() => focusNode(), 50);
    },
    [focusNode, setType],
  );

  // set nodes to center when window size change
  useEffect(() => {
    window.addEventListener('resize', focusNode);
    return () => {
      window.addEventListener('resize', focusNode);
    };
  }, [focusNode]);

  return (
    <div className="absolute right-4 top-4 z-[99] flex flex-col gap-2">
      <div className="flex flex-col items-center gap-1 rounded-full bg-white p-1 shadow-sm">
        <Button
          variant="ghost"
          size="icon-sm"
          onClick={() => handleChangeType('smartphone')}
          className=" rounded-full"
        >
          <IoPhonePortraitOutline
            size={16}
            className={cn({
              ' text-primary': type === 'smartphone',
            })}
          />
        </Button>
        <Button
          variant="ghost"
          size="icon-sm"
          onClick={() => handleChangeType('tablet')}
          className=" rounded-full"
        >
          <BsTablet
            size={16}
            className={cn({ ' text-primary': type === 'tablet' })}
          />
        </Button>
        <Button
          variant="ghost"
          size="icon-sm"
          onClick={() => handleChangeType('laptop')}
          className=" rounded-full"
        >
          <BsLaptop
            size={16}
            className={cn({ ' text-primary': type === 'laptop' })}
          />
        </Button>
      </div>
      <div className=" flex flex-col items-center gap-1  rounded-full bg-white p-1">
        <Button
          variant="ghost"
          size="icon-sm"
          onClick={() => zoomIn({ duration: 1000 })}
          className=" rounded-full"
        >
          <LuPlus />
        </Button>
        <Button
          variant="ghost"
          size="icon-sm"
          className=" rounded-full"
          onClick={() => zoomOut({ duration: 1000 })}
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
