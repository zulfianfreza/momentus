"use client";
import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { TESTIMONIAL_FAKER } from "@/constant/faker.constant";

const TestimonialsSection = () => {
  return (
    <div>
      <InfiniteMovingCards
        items={TESTIMONIAL_FAKER}
        direction="right"
        speed="slow"
      />
    </div>
  );
};

export default TestimonialsSection;
