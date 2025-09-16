"use client";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { Video, Facebook, Instagram } from "lucide-react";
import "../css/contact.css";

export default function PageContacto() {
  const [message, setMessage] = useState("");
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
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
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (!selectedDate) {
      e.preventDefault();
      alert("Por favor selecciona una fecha antes de enviar.");
      return;
    }
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const minDate = new Date();
    minDate.setDate(today.getDate() + 14);
    if (selectedDate <= today) {
      e.preventDefault();
      alert("La fecha no puede ser hoy ni un día anterior.");
      return;
    }
    if (selectedDate < minDate) {
      e.preventDefault();
      alert(
        "Debes seleccionar una fecha con al menos 2 semanas de anticipación."
      );
      return;
    }
    const dateString = selectedDate.toISOString().split("T")[0];
    const textarea =
      e.currentTarget.querySelector<HTMLTextAreaElement>("#body");
    if (textarea)
      textarea.value = `Fecha solicitada: ${dateString}\n\nMensaje:\n${textarea.value}`;
  };
  return (
    <div className="px-4 md:px-16 pt-12 md:pt-20">
      <section className="scroll-animate opacity-0 py-12 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">Contacto</h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
          Rellena este formulario para enviar un correo directo al DJ Jesús. Por
          favor asegúrate de que los datos sean correctos, especialmente tu
          correo y la fecha que deseas consultar. Esta fecha no garantiza
          reserva, solo sirve para preguntar disponibilidad. El DJ te responderá
          directamente al correo proporcionado.
        </p>
      </section>
      <section className="scroll-animate opacity-0 py-0 max-w-3xl mx-auto">
        <form
          id="myForm"
          action="https://formsubmit.co/contactspeencer@gmail.com"
          method="POST"
          className="flex flex-col gap-6"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 flex flex-col gap-2">
              <Label htmlFor="name">Nombre</Label>
              <Input
                id="name"
                type="text"
                name="name"
                placeholder="Nombre"
                required
              />
            </div>
            <div className="flex-1 flex flex-col gap-2">
              <Label htmlFor="email">Correo</Label>
              <Input
                id="email"
                type="email"
                name="email"
                placeholder="Correo"
                required
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="subject">Tema</Label>
            <Input id="subject" type="text" name="subject" placeholder="Tema" />
          </div>
          <div className="flex flex-col gap-2">
            <Label>Mensaje</Label>
            <Textarea
              id="body"
              name="comments"
              placeholder="Escribe tu mensaje aquí..."
              className="min-h-[150px] p-4 text-center"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <Label className="mt-2">Fecha solicitada</Label>
            {mounted && (
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                className="mt-2 w-full"
              />
            )}
          </div>
          <Button type="submit" className="mt-4 md:w-40 self-center">
            Enviar
          </Button>
          <input type="hidden" name="_captcha" value="false" />
          <input
            type="hidden"
            name="_autoresponse"
            value="Formulario enviado correctamente. Pronto recibirás respuesta."
          />
          <input
            type="hidden"
            name="_subject"
            value="Nuevo Formulario recibido!"
          />
          <input type="hidden" name="_replyto" />
          <input type="hidden" name="_template" value="table" />
          <input
            type="hidden"
            name="_next"
            value="https://duskstargithub.github.io/"
          />
        </form>
      </section>
      <section className="scroll-animate opacity-0 py-6 text-center animate-fadeInUp">
        <p className="max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
          También puedes contactarnos a través de nuestras redes sociales,
          estaremos encantados de responder tus dudas.
        </p>
        <div className="flex justify-center gap-3 mt-4 animate-fadeInUp">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full hover:scale-110 transition h-9 w-9"
            asChild
          >
            <a
              href="https://www.tiktok.com/@jesuspulido875?is_from_webapp=1&sender_device=pc"
              target="_blank"
            >
              <Video className="h-4 w-4" />
            </a>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full hover:scale-110 transition h-9 w-9"
            asChild
          >
            <a href="https://www.facebook.com/dmx.jesus.pulido" target="_blank">
              <Facebook className="h-4 w-4" />
            </a>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full hover:scale-110 transition h-9 w-9"
            asChild
          >
            <a
              href="https://www.instagram.com/djjesuspulidodmx/"
              target="_blank"
            >
              <Instagram className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </section>

      <p className="max-w-3xl mx-auto text-lg md:text-xl leading-relaxed text-center mt-8 h-20">
        Para cualquier información o consulta, por favor lea nuestros{" "}
        <strong>
          <a href="/terms-of-service" className="underline">
            términos de uso
          </a>
        </strong>
        .
      </p>
    </div>
  );
}
