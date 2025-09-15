"use client";
import { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import CarouselPaquetes from "./components/CarouselPaquetes";
import "../css/animations.css";

const paquetes = [
  {
    nombre: "Básico",
    descripcion: "Espacio para describir el paquete básico",
    img: "/images/basico.jpg",
  },
  {
    nombre: "Intermedio",
    descripcion: "Espacio para describir el paquete expandido",
    img: "/images/expandido.jpg",
  },
  {
    nombre: "Profesional",
    descripcion: "Espacio para describir el paquete profesional",
    img: "/images/profesional.jpg",
  },
  {
    nombre: "Completo",
    descripcion: "Espacio para describir el paquete completo",
    img: "/images/completo.jpg",
  },
];

export default function PageServicio() {
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
    <div className="px-4 pt-12 md:px-16">
      <section className="pt-[70px] pb-20 text-center scroll-animate opacity-0">
        <h1 className="text-3xl md:text-5xl font-bold mb-6">DJ Jesús</h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
          DJ Jesús se encarga de mezclar vinilos y música digital con equipo
          especializado. Su experiencia incluye improvisación, preparación
          precisa y coherencia en la música para que cada evento sea
          inolvidable.
        </p>
      </section>
      <section className="py-20 scroll-animate opacity-0">
        <h2 className="text-2xl md:text-4xl font-semibold mb-10 text-center">
          Habilidades
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="p-6 scroll-animate opacity-0">
            <CardHeader>
              <CardTitle>Mezcla de Vinilos</CardTitle>
            </CardHeader>
            <CardContent>
              Puedes mezclar vinilos clásicos con música digital, creando
              transiciones únicas.
            </CardContent>
          </Card>
          <Card className="p-6 scroll-animate opacity-0">
            <CardHeader>
              <CardTitle>Equipo Especializado</CardTitle>
            </CardHeader>
            <CardContent>
              Cuenta con tecnología avanzada para un sonido impecable y
              adaptable a cualquier evento.
            </CardContent>
          </Card>
          <Card className="p-6 scroll-animate opacity-0">
            <CardHeader>
              <CardTitle>Improvisación y Preparación</CardTitle>
            </CardHeader>
            <CardContent>
              Combina improvisación con preparación precisa, garantizando
              coherencia y energía en la música.
            </CardContent>
          </Card>
        </div>
      </section>
      <section className="py-20 scroll-animate opacity-0">
        <h2 className="text-2xl md:text-4xl font-semibold mb-10 text-center">
          Paquetes
        </h2>
        <CarouselPaquetes paquetes={paquetes} />
      </section>
    </div>
  );
}
