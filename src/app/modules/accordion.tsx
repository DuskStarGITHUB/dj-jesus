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
        <AccordionTrigger className="text-sm sm:text-inherit">
          Sobre Mi
        </AccordionTrigger>
        <AccordionContent>
          <p className="text-sm sm:text-inherit leading-relaxed sm:leading-normal">
            Naciendo en la epoca de los 70/80&apos;s, Adquiri un gusto musical
            en español e ingles, Desde siempre, me llamo la atencion, Integrar e
            Combinar diferentes generos musicales, Admirando la cultura de la
            mezcla con vinilos y implementacion de equipo de DJ.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="text-sm sm:text-inherit">
          Colaboraciones
        </AccordionTrigger>
        <AccordionContent>
          <ul className="list-disc pl-5 space-y-1 text-sm sm:text-inherit leading-relaxed sm:leading-normal">
            <li>
              DJ RomixSaurio || CDMX, Alternando Cabina / Denver Colorado
              90&apos;s.
            </li>
          </ul>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className="text-sm sm:text-inherit">
          Experiencia
        </AccordionTrigger>
        <AccordionContent>
          <p className="text-sm sm:text-inherit leading-relaxed sm:leading-normal">
            En los 90&apos;s tuve mi sonido nombrado DenverMix, Actualmente
            Tengo mi propio equipo de Audio,Sonido,Iluminacion y Video en las
            CDMX para Eventos Sociales a los que e asistido e Versatiles, Me
            especializo en fiestas tematicas de los años 80/90&apos;s.
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
