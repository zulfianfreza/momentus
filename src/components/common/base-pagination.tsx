'use client';

import { cn } from '@/lib/utils';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { useCallback, useMemo } from 'react';
import {
  LuCheck,
  LuChevronDown,
  LuChevronLeft,
  LuChevronRight,
} from 'react-icons/lu';
import { Button } from '../ui/button';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
} from '../ui/pagination';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { DOTS, usePagination } from '@/hooks/use-pagination';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { PopoverClose } from '@radix-ui/react-popover';

type TBasePaginationProps = {
  totalCount: number;
  withSizeOptions?: boolean;
  customSizeOptions?: number[] | null;
};

export default function BasePagination({
  totalCount,
  withSizeOptions = true,
  customSizeOptions,
}: TBasePaginationProps) {
  // search params
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;
  const size = Number(searchParams.get('size')) || 10;

  // count total page
  const TOTAL_PAGE = Math.ceil(totalCount / size);

  // hooks
  const qs = useMemo(() => new URLSearchParams(searchParams), [searchParams]);
  const router = useRouter();
  const pathname = usePathname();
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount: 1,
    pageSize: size,
  });

  /**
   * Handle change size
   * @param value
   */
  const handleSizeChange = useCallback(
    (value: string) => {
      qs.set('size', value);
      qs.set('page', '1');
      router.push(`${pathname}?${qs}`);
    },
    [router, pathname, qs],
  );

  /**
   * Handle prev
   */
  const handlePrev = useCallback(() => {
    qs.set('page', (currentPage - 1).toString());

    router.push(`${pathname}?${qs}`);
  }, [qs, currentPage, pathname, router]);

  /**
   * Handle next
   */
  const handleNext = useCallback(() => {
    qs.set('page', (currentPage + 1).toString());
    router.push(`${pathname}?${qs}`);
  }, [qs, currentPage, pathname, router]);

  /**
   * Handle page change
   * @param value
   */
  const handlePageChange = useCallback(
    (value: number) => {
      qs.set('page', value.toString());
      router.push(`${pathname}?${qs}`);
    },
    [qs, pathname, router],
  );

  const sizeOptions = React.useMemo(() => {
    if (customSizeOptions?.length) {
      return customSizeOptions;
    }

    return [5, 10];
  }, [customSizeOptions]);

  return (
    <div className="flex items-center justify-between">
      {/* begin: page size */}
      {withSizeOptions && (
        <div className="flex items-center gap-4">
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                size="sm"
              >
                {size} <LuChevronDown />
              </Button>
            </PopoverTrigger>
            <PopoverContent
              className=" flex w-fit flex-col p-1"
              align="start"
            >
              {sizeOptions.map((item) => (
                <PopoverClose
                  key={item}
                  asChild
                >
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => handleSizeChange(item.toString())}
                  >
                    <LuCheck
                      className={cn('invisible', { visible: size === item })}
                    />
                    {item}
                  </Button>
                </PopoverClose>
              ))}
            </PopoverContent>
          </Popover>
        </div>
      )}
      {/* end: page size */}

      {/* begin: pagination */}
      <Pagination className={withSizeOptions ? ' justify-end' : ''}>
        <PaginationContent className="flex flex-wrap">
          <PaginationItem>
            <Button
              size="icon-sm"
              variant="ghost"
              onClick={handlePrev}
              disabled={currentPage <= 1}
            >
              <LuChevronLeft size={16} />
            </Button>
          </PaginationItem>
          {paginationRange.map((pageNumber, i) => {
            if (pageNumber === DOTS) {
              return (
                <PaginationItem key={i}>
                  <PaginationEllipsis />
                </PaginationItem>
              );
            }

            return (
              <PaginationItem key={i}>
                <Button
                  size="icon-sm"
                  variant={
                    Number(pageNumber) === currentPage ? 'default' : 'ghost'
                  }
                  className=" font-normal"
                  onClick={() => handlePageChange(Number(pageNumber))}
                >
                  {pageNumber}
                </Button>
              </PaginationItem>
            );
          })}
          <PaginationItem>
            <Button
              size="icon-sm"
              variant="ghost"
              onClick={handleNext}
              disabled={currentPage === TOTAL_PAGE}
            >
              <LuChevronRight size={16} />
            </Button>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
      {/* end: pagination */}
    </div>
  );
}
