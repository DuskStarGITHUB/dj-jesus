"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Paquete {
  nombre: string;
  descripcion: string;
  img?: string;
}
interface CarouselProps {
  paquetes: Paquete[];
}

export default function CarouselPaquetes({ paquetes }: CarouselProps) {
  return (
    <div className="relative">
      <Carousel opts={{ align: "start" }} className="w-full max-w-5xl mx-auto">
        <CarouselContent>
          {paquetes.map((p, idx) => (
            <CarouselItem key={idx} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-2 scroll-animate opacity-0">
                <Card className="h-full flex flex-col">
                  {p.img && (
                    <img
                      src={p.img}
                      alt={p.nombre}
                      className="w-full h-48 object-cover rounded-t-md"
                    />
                  )}
                  <CardHeader className="mt-3">
                    <CardTitle>{p.nombre}</CardTitle>
                  </CardHeader>
                  <CardContent>{p.descripcion}</CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10" />
        <CarouselNext className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10" />
      </Carousel>
      <div className="flex justify-center mt-4 md:hidden gap-2">
        {paquetes.map((_, idx) => (
          <span key={idx} className="w-2 h-2 rounded-full bg-gray-400" />
        ))}
      </div>
    </div>
  );
}
