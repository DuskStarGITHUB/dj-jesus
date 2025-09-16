"use client";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Video, Facebook, Instagram } from "lucide-react";
import Icon from "@/components/extra/AppIcon";
import "../css/contact.css";

export default function PageRedes() {
  const currentYear = new Date().getFullYear();
  const socialLinks = [
    {
      name: "Instagram",
      icon: "Instagram",
      url: "https://www.instagram.com/djjesuspulidodmx/",
      color: "hover:text-pink-400",
    },
    {
      name: "Facebook",
      icon: "Facebook",
      url: "https://www.facebook.com/dmx.jesus.pulido",
      color: "hover:text-blue-400",
    },
    {
      name: "TikTok",
      icon: "Music",
      url: "https://www.tiktok.com/@jesuspulido875?is_from_webapp=1&sender_device=pc",
      color: "hover:text-purple-400",
    },
    { name: "YouTube", icon: "Youtube", url: "#", color: "hover:text-red-400" },
  ];
  const contactInfo = [
    {
      icon: "Mail",
      text: "jesus@foreveryoungdj.com",
      href: "mailto:jesus@foreveryoungdj.com",
    },
  ];
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
  const handleLinkClick = (href: string) => {
    if (href?.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        const headerHeight = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerHeight;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    } else {
      window.open(href, "_blank");
    }
  };
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
          {socialLinks.slice(0, 3).map((link) => (
            <Button
              key={link.name}
              variant="outline"
              size="icon"
              className="rounded-full hover:scale-110 transition h-16 w-16"
              asChild
            >
              <a href={link.url} target="_blank">
                {link.name === "Instagram" && <Instagram className="h-8 w-8" />}
                {link.name === "Facebook" && <Facebook className="h-8 w-8" />}
                {link.name === "TikTok" && <Video className="h-8 w-8" />}
              </a>
            </Button>
          ))}
        </div>
        <p className="max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
          Haz clic en cualquiera de los iconos para enviarnos un mensaje directo
          en la plataforma de tu preferencia. ¡Te responderemos pronto!
        </p>
      </section>
      <section className="scroll-animate opacity-0 py-12 grid md:grid-cols-2 gap-12 w-full max-w-6xl animate-fadeInUp">
        <div className="space-y-6 text-left">
          <h2 className="text-3xl md:text-4xl font-bold">
            Información de Contacto
          </h2>
          {contactInfo.map((contact, idx) => (
            <button
              key={idx}
              onClick={() => handleLinkClick(contact.href)}
              className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors duration-250 text-lg md:text-base"
            >
              <Icon
                name={contact.icon}
                size={20}
                className="flex-shrink-0 text-accent"
              />
              <span>{contact.text}</span>
            </button>
          ))}
        </div>

        <div className="space-y-6 text-left">
          <h2 className="text-3xl md:text-4xl font-bold">Síguenos y reserva</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Nuestro DJ Jesús está listo para llevar la música perfecta a tu
            evento. Contáctanos por correo o redes sociales y asegura tu fecha.
          </p>
          <div className="flex flex-wrap gap-4 mt-4">
            {socialLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleLinkClick(link.url)}
                className={`px-4 py-2 rounded-full border border-white/20 hover:bg-primary/10 transition ${link.color}`}
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>
      </section>
      <section className="scroll-animate opacity-0 py-12 animate-fadeInUp">
        <p className="text-xs text-muted-foreground mt-2">
          Hecho por{" "}
          <a
            href="https://github.com/DuskStarGITHUB"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-primary transition-colors"
          >
            DuskStarGITHUB
          </a>
          <Icon name="Heart" size={12} className="inline text-red-400 mx-1" />{" "}
        </p>
      </section>
    </div>
  );
}
