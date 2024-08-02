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
import { IconType } from 'react-icons/lib';

type TDeviceList = {
  name: TPreviewDeviceType;
  icon: IconType;
};

export default function CustomControls() {
  const DEVICE_LIST: Array<TDeviceList> = [
    {
      name: 'smartphone',
      icon: IoPhonePortraitOutline,
    },
    {
      name: 'tablet',
      icon: BsTablet,
    },
    {
      name: 'laptop',
      icon: BsLaptop,
    },
  ];

  const CONTROL_LIST = [
    {
      name: 'zoom-in',
      icon: LuPlus,
      action: () => zoomIn({ duration: 1000 }),
    },
    {
      name: 'zoom-out',
      icon: LuMinus,
      action: () => zoomOut({ duration: 1000 }),
    },
    {
      name: 'focus',
      icon: LuFocus,
      action: () => focusNode(),
    },
  ];
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
    <div className="absolute right-2 top-2 z-[99] flex flex-col gap-2">
      <div className="flex flex-col items-center gap-1 rounded-full bg-white p-1 shadow-sm">
        {DEVICE_LIST.map((device) => (
          <Button
            key={device.name}
            variant="ghost"
            size="icon-sm"
            onClick={() => handleChangeType(device.name)}
            className={cn('rounded-full', {
              'bg-neutral-100': type === device.name,
            })}
          >
            <device.icon
              size={16}
              className={cn({
                ' text-primary': type === device.name,
              })}
            />
          </Button>
        ))}
      </div>
      <div className=" flex flex-col items-center gap-1  rounded-full bg-white p-1">
        {CONTROL_LIST.map((control) => (
          <Button
            key={control.name}
            variant="ghost"
            size="icon-sm"
            onClick={control.action}
            className=" rounded-full"
          >
            <control.icon />
          </Button>
        ))}
      </div>
    </div>
  );
}
