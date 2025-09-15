"use client";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Video, Facebook, Instagram } from "lucide-react";
import "../css/contact.css";

export default function PageRedes() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting)
            entry.target.classList.add("animate-fadeInUp");
        });
      },
      { threshold: 0.1 }
    );
    document
      .querySelectorAll(".scroll-animate")
      .forEach((el) => observer.observe(el));
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 md:px-16 pt-12 md:pt-20 text-center">
      <section className="scroll-animate opacity-0 py-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Contáctanos en Redes Sociales
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-2xl leading-relaxed">
          Si prefieres comunicarte por redes sociales, aquí puedes enviarnos tus
          consultas directamente. Nuestro DJ Jesús responderá a la brevedad.
        </p>
      </section>
      <section className="scroll-animate opacity-0 py-12 flex flex-col items-center gap-8 animate-fadeInUp">
        <div className="flex gap-6">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full hover:scale-110 transition h-16 w-16"
            asChild
          >
            <a
              href="https://www.tiktok.com/@jesuspulido875?is_from_webapp=1&sender_device=pc"
              target="_blank"
            >
              <Video className="h-8 w-8" />
            </a>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full hover:scale-110 transition h-16 w-16"
            asChild
          >
            <a href="https://www.facebook.com/dmx.jesus.pulido" target="_blank">
              <Facebook className="h-8 w-8" />
            </a>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full hover:scale-110 transition h-16 w-16"
            asChild
          >
            <a
              href="https://www.instagram.com/djjesuspulidodmx/"
              target="_blank"
            >
              <Instagram className="h-8 w-8" />
            </a>
          </Button>
        </div>
        <p className="max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
          Haz clic en cualquiera de los iconos para enviarnos un mensaje directo
          en la plataforma de tu preferencia. ¡Te responderemos pronto!
        </p>
      </section>
    </div>
  );
}
