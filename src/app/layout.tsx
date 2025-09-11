import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./css/globals.css";
import { ThemeProvider } from "@/components/extra/theme-provider";
import { NavBar } from "@/components/web/NavBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Forever Young",
  description:
    "Vive la gran experiencia de la fiesta, Encuentre las mejores Opciones para su Eventos,Fiestas y Reuniones.",
  icons: {
    icon: "/web-icon.svg",
    shortcut: "/web-icon.svg",
    apple: "/web-icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <header className="min-w-screen flex justify-center fixed top-0 z-50 rounded-b-full shadow-md">
            <div className="absolute inset-0 backdrop-blur-md backdrop-invert -z-10 rounded-b-full" />
            <div className="absolute inset-0 bg-accent-foreground opacity-50 -z-10 rounded-b-full dark:bg-black dark:opacity-0.1" />
            <NavBar
              className="min-w-screen text-lg px-1 py-4 border-2 rounded-b-full relative z-10"
              textColor="text-white"
            />
          </header>
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
