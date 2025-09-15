// app/components/footer.tsx
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Github, Twitter, Mail, Music } from "lucide-react";
import { Bebas_Neue, Roboto } from "next/font/google";

const bebas = Bebas_Neue({ weight: "400", subsets: ["latin"] });
const roboto = Roboto({ weight: ["400", "500"], subsets: ["latin"] });

const Footer = () => {
  return (
    <footer className="relative w-full border-t bg-background/80 backdrop-blur-md overflow-hidden">
      {/* Bordes animados arriba y abajo */}
      <span className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-black/100 to-transparent dark:via-white/60 border-animated" />
      <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-black/100 to-transparent dark:via-white/60 border-animated" />

      <div className="relative mx-auto max-w-7xl px-6 py-12 flex flex-col items-center gap-8 md:flex-row md:items-center md:justify-between md:gap-0 text-center md:text-left">
        <div
          className={`${bebas.className} flex items-center gap-2 text-3xl tracking-widest`}
        >
          <Music className="h-8 w-8" />
          DJ JESÚS
        </div>
        <nav
          className={`${roboto.className} flex flex-col gap-3 text-sm md:flex-row md:gap-8 tracking-wide`}
        >
          <Link href="/privacy-policy" className="transition hover:underline">
            Política de Privacidad
          </Link>
          <Link href="/terms-of-service" className="transition hover:underline">
            Términos de Uso
          </Link>
          <Link href="/cookies" className="transition hover:underline">
            Política de Cookies
          </Link>
          <Link href="/copyright" className="transition hover:underline">
            Derechos de Autor
          </Link>
        </nav>
        <div className="flex gap-4">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full hover:scale-110 transition"
            asChild
          >
            <a href="https://github.com">
              <Github className="h-5 w-5" />
            </a>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full hover:scale-110 transition"
            asChild
          >
            <a href="https://twitter.com">
              <Twitter className="h-5 w-5" />
            </a>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full hover:scale-110 transition"
            asChild
          >
            <a href="mailto:correo@ejemplo.com">
              <Mail className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
      <Separator />
      <div
        className={`${roboto.className} relative mx-auto max-w-7xl px-6 py-6 text-xs text-center tracking-widest`}
      >
        © {new Date().getFullYear()} DJ Jesús — Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
