'use client';

import React from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '../ui/breadcrumb';
import Link from 'next/link';

type TItem = {
  label: string;
  link?: string;
};

type TProps = {
  items: Array<TItem>;
};

export default function CustomBreadcrumb({ items }: TProps) {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {items.map((item, i) => (
          <React.Fragment key={i}>
            <BreadcrumbItem>
              {i === items.length - 1 ? (
                <BreadcrumbPage>{item.label}</BreadcrumbPage>
              ) : (
                <BreadcrumbLink asChild>
                  <Link href={item.link ?? './'}>{item.label}</Link>
                </BreadcrumbLink>
              )}
            </BreadcrumbItem>
            {!(i === items.length - 1) && <BreadcrumbSeparator />}
          </React.Fragment>
        ))}
        <BreadcrumbItem></BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
