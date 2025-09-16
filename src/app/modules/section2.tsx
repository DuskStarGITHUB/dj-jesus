"use client";
import { useState } from "react";
import { Accord } from "./accordion";

const Section2 = () => {
  const [activeImage, setActiveImage] = useState("/photos/2.jpeg");
  return (
    <section className="relative min-h-screen flex flex-col md:flex-row text-white">
      <div
        className="absolute inset-0 -z-20"
        style={{
          backgroundImage: "url('/img/wallpaper1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-black/70 -z-10" />
      <div className="w-full md:w-1/2 flex items-center justify-center p-6 bg-black/50 border">
        <img
          src={activeImage}
          alt="Imagen acordeón"
          className="
    grayscale
    rounded-3xl
    shadow-2xl
    object-cover
    w-full
    max-w-[250px] sm:max-w-[300px] md:max-w-[400px]
    aspect-square
    border
  "
        />
      </div>
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-6 md:p-12 border-t border-r border-b">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 md:mb-8 text-center md:text-left">
          Conóceme
        </h2>
        <Accord setActiveImage={setActiveImage} />
      </div>
    </section>
  );
};

export default Section2;
