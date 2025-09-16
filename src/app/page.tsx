"use client";
import { useState, useEffect } from "react";
import Section1 from "./modules/section1";
import Section2 from "./modules/section2";
import { ArtworkCards } from "./modules/cards";
import Presentation from "./modules/presentation";

export default function Home() {
  const [presentationGone, setPresentationGone] = useState(false);
  const [transitioning, setTransitioning] = useState(false);
  useEffect(() => {
    if (transitioning) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [transitioning]);
  const handleDisappear = () => {
    setTransitioning(true);
    setPresentationGone(true);
    setTimeout(() => {
      setTransitioning(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 1000);
  };
  return (
    <div className="min-h-screen flex flex-col">
      <Presentation onDisappear={handleDisappear} />
      <div
        className={`transition-opacity duration-[6000ms] ${
          presentationGone
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <Section1 />
        <ArtworkCards />
        <Section2 />
      </div>
    </div>
  );
}
