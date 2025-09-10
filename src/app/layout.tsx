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
          <header className="min-w-screen flex justify-center fixed top-0 z-50 backdrop-blur-md shadow-md rounded-b-full">
            <NavBar className="min-w-screen text-lg px-6 py-4 border-2 rounded-b-full" />
          </header>
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
