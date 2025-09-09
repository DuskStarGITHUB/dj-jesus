import Image from "next/image";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";

const Sections = () => {
  return (
    <>
      <section className="relative">
        <AspectRatio
          ratio={16 / 9}
          className="min-h-[80vh] w-full relative bg-muted"
        >
          <Image
            src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
            alt="Background"
            fill
            className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale z-0"
          />
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <h1 className="font-mono text-4xl">Texto de Inicio</h1>
          </div>
        </AspectRatio>
      </section>
      <section className="min-h-[60vh] flex items-center justify-center">
        <h2>Carrusel</h2>
      </section>
      <section className="min-h-[60vh] flex items-center justify-center">
        <h2>Presentación</h2>
      </section>
      <section className="min-h-[60vh] flex items-center justify-center">
        <h2>Formulario de Contacto</h2>
      </section>
    </>
  );
};

export default Sections;
