"use client";

import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { TESTIMONIAL_FAKER } from "@/constant/faker.constant";

const TestimonialsSection = () => {
  return (
    <div className=" mt-16 rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={TESTIMONIAL_FAKER}
        direction="right"
        speed="slow"
      />
    </div>
  );
};

export default TestimonialsSection;
