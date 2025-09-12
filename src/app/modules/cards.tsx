import * as React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export interface Artwork {
  text: string;
  art: string;
}

export const works: Artwork[] = [
  {
    text: "CDMX",
    art: "https://images.unsplash.com/photo-1465869185982-5a1a7522cbcb?auto=format&fit=crop&w=300&q=80",
  },
  {
    text: "Ixtapaluca",
    art: "https://images.unsplash.com/photo-1548516173-3cabfa4607e9?auto=format&fit=crop&w=300&q=80",
  },
  {
    text: "EDO.MEX {Limitado}",
    art: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
  },
];

export function ArtworkCards() {
  return (
    <div className="relative hidden sm:flex justify-center px-6 py-8 bg-gradient-to-r from-gray-100 via-white to-gray-100 dark:from-accent dark:via-background dark:to-accent overflow-x-auto">
      <span className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-black/100 to-transparent dark:via-white/60 border-animated" />
      <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-black/100 to-transparent dark:via-white/60 border-animated" />
      <div className="flex flex-row flex-nowrap gap-6 xl:gap-16 snap-x snap-mandatory">
        {works.map((artwork) => (
          <Card
            key={artwork.text}
            className="flex flex-row items-center w-40 md:w-60 lg:w-72 h-28 md:h-36 flex-shrink-0 snap-center transition-transform transform hover:scale-105 hover:shadow-lg"
          >
            <CardContent className="flex items-center justify-center gap-3 w-full p-3">
              <div className="w-16 h-16 md:w-24 md:h-24 rounded-full overflow-hidden flex-shrink-0">
                <Image
                  src={artwork.art}
                  alt={`Photo of ${artwork.text}`}
                  width={96}
                  height={96}
                  className="object-cover aspect-square"
                />
              </div>
              <div className="flex-1 flex items-center justify-center">
                <p className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-center">
                  {artwork.text}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
