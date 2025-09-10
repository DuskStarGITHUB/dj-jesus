import Image from "next/image";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import MainImage from "./mainImage";

const Section1 = () => {
  return (
    <section className="relative max-h-screen w-full">
      <div className="absolute inset-0 -z-0 flex justify-center items-start overflow-hidden">
        <div className="w-full">
          <AspectRatio ratio={16 / 9} className="w-full min-h-screen">
            <Image
              src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=1600&dpr=2&q=80"
              alt="Background"
              fill
              className="object-cover dark:brightness-[0.2] dark:grayscale"
            />
          </AspectRatio>
        </div>
      </div>
      <div className="relative z-10 flex min-h-screen">
        <div className="w-1/2 flex items-center justify-center p-4 relative">
          <MainImage />
        </div>
        <div className="w-1/2 flex flex-col items-center justify-center p-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold sm:pb-10 text-center">
            DJ Jesus Pulido
          </h1>
          <p className="max-w-md text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-justify">
            <span className="font-bold">
              Vive La Gran Experiencia De La Fiesta
            </span>
            , Encuentre las mejores Opciones para sus Eventos, Fiestas y
            Reuniones...
          </p>
        </div>
      </div>
    </section>
  );
};

export default Section1;
