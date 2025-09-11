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
    <div className="hidden sm:flex justify-center gap-2 sm:gap-4 p-4 bg-gray-100 dark:bg-accent border-t border-b border-black dark:border-white overflow-x-auto">
      <div className="flex flex-row flex-nowrap gap-2 xl:gap-20 2xl:gap-50">
        {works.map((artwork) => (
          <Card
            key={artwork.text}
            className="flex flex-row items-center w-28 md:w-70 h-17 sm:h-28 md:h-32 flex-shrink-0"
          >
            <CardContent className="flex items-center justify-center gap-2 w-full p-2">
              <div className="w-12 h-12 md:w-24 md:h-24 rounded-full overflow-hidden flex-shrink-0">
                <Image
                  src={artwork.art}
                  alt={`Photo by ${artwork.text}`}
                  width={96}
                  height={96}
                  className="object-cover aspect-square"
                />
              </div>
              <div className="flex-1 flex items-center justify-center">
                <p className="text-[7px] md:text-base font-semibold text-center">
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
