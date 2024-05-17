"use client";

import { cn } from "@/lib/utils";
import React, { HTMLAttributes } from "react";

type TContainerProps = HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
  className?: string;
};

export default function Container({
  children,
  className,
  ...props
}: TContainerProps) {
  return (
    <div className={cn("w-full container mx-auto", className)} {...props}>
      {children}
    </div>
  );
}
