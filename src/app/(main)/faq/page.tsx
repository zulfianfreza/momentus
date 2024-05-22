import Container from "@/components/common/container";
import Image from "next/image";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQ_FAKER } from "@/constant/faker.constant";

export default function FaqPage() {
  return (
    <>
      <div className=" flex w-full items-center justify-center bg-pink-50 py-10">
        <Container>
          <div className=" flex w-full items-center justify-between">
            <div className=" flex flex-col w-full gap-2">
              <h1 className=" text-5xl font-semibold leading-relaxed text-pink-600">
                FAQ
              </h1>
              <p className=" text-neutral-500">
                Punya pertanyaan tentang layanan kami? Ini adalah beberapa hal
                yang mungkin dapat membantu.
              </p>
            </div>
            <div className=" w-full flex items-center justify-center relative">
              <Image
                src="/images/state/faq-state.png"
                alt=""
                width={1080}
                height={1080}
                className=" w-full h-full"
              />
            </div>
          </div>
        </Container>
      </div>
      <Container>
        <div className=" flex-1 w-full my-20">
          <Accordion type="single" collapsible>
            {FAQ_FAKER.map((faq, i) => (
              <>
                <AccordionItem value={"item-" + faq.item} key={i}>
                  <AccordionTrigger>{faq.trigger}</AccordionTrigger>
                  <AccordionContent>{faq.content}</AccordionContent>
                </AccordionItem>
              </>
            ))}
          </Accordion>
        </div>
      </Container>
    </>
  );
}
