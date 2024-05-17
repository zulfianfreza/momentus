"use client";

import React from "react";

type TProps = {
  title: string;
  subtitle?: string;
};

export default function HeadingConfigurationSection({
  title,
  subtitle,
}: TProps) {
  return (
    <div className=" space-y-1">
      <h1 className=" text-neutral-900 text-xl font-medium">{title}</h1>
      <p className=" text-sm text-neutral-500">{subtitle}</p>
    </div>
  );
}