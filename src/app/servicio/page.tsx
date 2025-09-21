"use client";
import { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dot } from "lucide-react";
import "../css/animations.css";
import { Visualizer } from "@/components/web/Visualizer";

const paquetes = [
  {
    nombre: "Básico",
    descripcion: [
      "Audio de 2 parlantes",
      "Cabina de DJ",
      "Luces LED baño de color",
      "Micrófono",
      "DJ mezclando en vivo",
      "4hrs de servicio",
    ],
    img: "https://wallpapers.com/images/hd/black-and-white-dj-music-equipment-doceza5wiwhfzeel.jpg",
  },
  {
    nombre: "Intermedio",
    descripcion: [
      "Audio de 2 parlantes",
      "Cabina de DJ",
      "Luces LED baño de color",
      "2 torres",
      "2 luces robóticas spot",
      "Micrófono",
      "DJ mezclando en vivo",
      "5hrs de servicio",
    ],
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyQ2ghCmYgvlfycM5_gwEiFAH3-7pRxKDy1Q&s",
  },
  {
    nombre: "Completo",
    descripcion: [
      "Audio de 2 parlantes",
      "2 subwoofers",
      "Cabina de DJ",
      "Luces LED baño de color",
      "2 torres",
      "2 luces robóticas spot",
      "Micrófono",
      "Cámara de humo",
      "DJ mezclando en vivo",
      "5hrs de servicio",
    ],
    img: "https://png.pngtree.com/thumb_back/fh260/background/20220120/pngtree-dj-ibiza-ibiza-music-dj-blanco-y-negro-photo-image_2654205.jpg",
  },
  {
    nombre: "Premier",
    descripcion: [
      "Audio de 2 parlantes",
      "2 subwoofers",
      "Cabina doble",
      "Luces LED baño de color",
      "2 torres",
      "2 luces robóticas spot",
      "2 luces matrix",
      "2 luces láser",
      "Micrófono",
      "Cámara de humo",
      "DJ mezclando en vivo",
      "5hrs de servicio",
    ],
    img: "https://www.shutterstock.com/image-photo/black-white-confetti-silhouette-crowd-600nw-458794543.jpg",
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
      <section className="pt-[30vh] pb-20 text-center scroll-animate opacity-0 h-screen sm:pt-[70px] border-b-2 bg-black/5 rounded-2xl">
        <h1 className="text-3xl md:text-5xl font-bold mb-6">DJ Jesús</h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
          DJ Jesús se encarga de mezclar vinilos y música digital con equipo
          especializado. Su experiencia incluye improvisación, preparación
          precisa y coherencia en la música para que cada evento sea
          inolvidable.
        </p>
        <Visualizer />
      </section>
      <section className="py-20 scroll-animate opacity-0 border-b-2">
        <h2 className="text-2xl md:text-4xl font-semibold mb-10 text-center">
          Habilidades
        </h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto text-sm md:text-base">
          <Card className="p-4 scroll-animate opacity-0">
            <CardHeader>
              <CardTitle>Mezcla de Vinilos</CardTitle>
            </CardHeader>
            <CardContent>
              Mezclar vinilos clásicos con música digital, creando transiciones
              únicas.
            </CardContent>
          </Card>
          <Card className="p-4 scroll-animate opacity-0">
            <CardHeader>
              <CardTitle>Equipo Especializado</CardTitle>
            </CardHeader>
            <CardContent>
              Cuenta con tecnología avanzada para un sonido impecable y
              adaptable a cualquier evento.
            </CardContent>
          </Card>
          <Card className="p-4 scroll-animate opacity-0">
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
      <section className="py-16 scroll-animate opacity-0 bg-black/5 rounded-b-2xl">
        <h2 className="text-2xl md:text-4xl font-semibold mb-8 text-center">
          Paquetes
        </h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto text-sm md:text-sm">
          {paquetes.map((paquete) => (
            <Card
              key={paquete.nombre}
              className="p-2 shadow-md rounded-2xl scroll-animate opacity-0 hover:scale-105 transition-transform duration-300"
            >
              <img
                src={paquete.img}
                alt={paquete.nombre}
                className="rounded-t-2xl w-full aspect-[4/3] object-cover mb-2"
              />

              <CardHeader>
                <CardTitle className="text-lg font-semibold text-center">
                  {paquete.nombre}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-none space-y-1">
                  {paquete.descripcion.map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Dot className="w-3 h-3" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
