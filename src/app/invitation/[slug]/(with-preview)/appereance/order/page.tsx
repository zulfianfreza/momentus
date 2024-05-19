"use client";

import { useState } from "react";
import { RiDraggable } from "react-icons/ri";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { SortableItem } from "@/components/common/sortable-item";

export default function OrderPage() {
  const [items, setItems] = useState([
    {
      name: "Quotes",
      id: 1,
      order: 1,
    },
    {
      name: "Couple",
      id: 2,
      order: 2,
    },
    {
      name: "Story",
      id: 3,
      order: 3,
    },
    {
      name: "Gallery",
      id: 4,
      order: 4,
    },
    {
      name: "Date",
      id: 5,
      order: 5,
    },
    {
      name: "Location",
      id: 6,
      order: 6,
    },
  ]);
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );
  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;

    if (over) {
      if (active.id !== over.id) {
        setItems((items) => {
          const oldIndex = items.findIndex((item) => item.order === active.id);
          const newIndex = items.findIndex((item) => item.order === over.id);

          console.log(oldIndex);
          console.log(newIndex);

          const newItems = items.map((item) => ({
            ...item,
            order:
              item.order === active.id
                ? newIndex + 1
                : item.order === over.id
                ? oldIndex + 1
                : item.order,
          }));

          return arrayMove(newItems, oldIndex, newIndex);
        });
      }
    }
  }
  return (
    <div className=" p-5 w-full">
      <h1 className=" text-neutral-900 text-xl font-medium">Urutan</h1>

      {JSON.stringify(items)}

      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext items={items} strategy={verticalListSortingStrategy}>
          {items.map((item) => (
            <SortableItem key={item.id} item={item} />
          ))}
        </SortableContext>
      </DndContext>
    </div>
  );
}
