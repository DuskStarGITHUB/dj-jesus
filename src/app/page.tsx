// page.tsx
"use client";
import { useState, useEffect } from "react";
import Section1 from "./modules/section1";
import Section2 from "./modules/section2";
import { ArtworkCards } from "./modules/cards";
import Presentation from "./modules/presentation";

export default function Home() {
  const [presentationGone, setPresentationGone] = useState(false);

  useEffect(() => {
    if (presentationGone) {
      // Cuando Presentation desaparece, ajustamos el scroll suavemente al top
      requestAnimationFrame(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }
  }, [presentationGone]);

  return (
    <div className="min-h-screen flex flex-col">
      <Presentation onDisappear={() => setPresentationGone(true)} />
      <div
        className={`transition-opacity duration-[1500ms] ${
          presentationGone
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <Section1 />
      </div>
      <ArtworkCards />
      <Section2 />
    </div>
  );
}
