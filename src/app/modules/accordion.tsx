// accord.tsx
"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const images: Record<string, string> = {
  "item-1": "/photos/2.jpeg",
  "item-2": "/photos/4.jpeg",
  "item-3": "/photos/5.jpeg",
};

export function Accord({
  setActiveImage,
}: {
  setActiveImage: (src: string) => void;
}) {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full"
      defaultValue="item-1"
      onValueChange={(value) => {
        if (value && images[value]) {
          setActiveImage(images[value]);
        }
      }}
    >
      <AccordionItem value="item-1">
        <AccordionTrigger>Sobre Mi</AccordionTrigger>
        <AccordionContent>
          <p>Descp.</p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Colaboraciones</AccordionTrigger>
        <AccordionContent>
          <p>Descp.</p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Experiencia</AccordionTrigger>
        <AccordionContent>
          <p>Descp.</p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
