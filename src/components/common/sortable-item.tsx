"use client";

import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { RiDraggable } from "react-icons/ri";

type TSortableItemProps = {
  item: {
    name: string;
    id: number;
    order: number;
  };
};

export function SortableItem(props: TSortableItemProps) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: props.item.order });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style} className="flex items-center gap-2">
      <div className=" h-14 w-full px-4 rounded-lg border shadow-sm flex justify-between items-center">
        <p className=" text-sm text-neutral-900">{props.item.name}</p>
        <button className=" cursor-grab" {...attributes} {...listeners}>
          <RiDraggable />
        </button>
      </div>
    </div>
  );
}
