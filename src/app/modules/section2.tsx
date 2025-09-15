"use client";
import { useState } from "react";
import { Accord } from "./accordion";

const Section2 = () => {
  const [activeImage, setActiveImage] = useState("/photos/2.jpeg");
  return (
    <section className="relative min-h-screen flex text-white">
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: "url('/img/wallpaper1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-black/70 -z-10" />
      <div className="w-1/2 relative flex items-center justify-center p-6 bg-black/50 border">
        <img
          src={activeImage}
          alt="Imagen acordeón"
          className="
            grayscale 
            rounded-3xl 
            shadow-2xl 
            object-cover 
            w-[400px] 
            h-[400px] 
            border
          "
        />
      </div>
      <div className="max-w-1/2 min-w-1/2 flex flex-col items-center justify-center p-12 border-t border-r border-b">
        <h2 className="text-4xl font-bold mb-8">Conoceme</h2>
        <Accord setActiveImage={setActiveImage} />
      </div>
    </section>
  );
};

export default Section2;
