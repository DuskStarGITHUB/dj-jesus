import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Video, Facebook, Instagram, Music } from "lucide-react";
import { Bebas_Neue, Roboto } from "next/font/google";

const bebas = Bebas_Neue({ weight: "400", subsets: ["latin"] });
const roboto = Roboto({ weight: ["400", "500"], subsets: ["latin"] });

const Footer = () => {
  return (
    <footer className="relative w-full border-t bg-background/80 backdrop-blur-md overflow-hidden">
      <span className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-black/100 to-transparent dark:via-white/60 border-animated" />
      <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-black/100 to-transparent dark:via-white/60 border-animated" />
      <div className="relative mx-auto max-w-7xl px-6 py-6 flex flex-col items-center gap-4 md:flex-row md:items-center md:justify-between md:gap-2 text-center md:text-left">
        <div
          className={`${bebas.className} flex items-center gap-2 text-2xl md:text-3xl tracking-widest`}
        >
          <Music className="h-6 w-6 md:h-7 md:w-7" />
          DJ JESÚS
        </div>
        <nav
          className={`${roboto.className} flex flex-col gap-2 text-xs md:flex-row md:gap-6 md:text-sm tracking-wide`}
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
        <div className="flex gap-3">
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
            <a
              href="https://www.facebook.com/jesus.pulido.52493"
              target="_blank"
            >
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
      </div>
      <Separator />
      <div
        className={`${roboto.className} relative mx-auto max-w-7xl px-6 py-3 text-[10px] md:text-xs text-center tracking-widest`}
      >
        © {new Date().getFullYear()} DJ Jesús — Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
