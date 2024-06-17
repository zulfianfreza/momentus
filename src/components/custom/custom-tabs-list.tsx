'use client';

import React from 'react';
import { TabsList, TabsTrigger } from '../ui/tabs';
import { TTabMenu } from '@/types/common.type';

type TProps = {
  tabs: Array<TTabMenu>;
};

export default function CustomTabsList({ tabs }: TProps) {
  return (
    <TabsList className=" my-0 w-full justify-start rounded-none border-b bg-transparent px-0">
      {tabs.map((menu) => (
        <TabsTrigger
          key={menu.value}
          value={menu.value}
          className=" h-10 rounded-none border-b-2 border-transparent px-2.5 data-[state=active]:border-pink-600"
        >
          {menu.label}
        </TabsTrigger>
      ))}
    </TabsList>
  );
}
