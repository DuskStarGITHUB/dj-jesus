"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Presentation = ({ onDisappear }: { onDisappear?: () => void }) => {
  const [currentMetric, setCurrentMetric] = useState(0);
  const [animatedCounts, setAnimatedCounts] = useState({
    events: 0,
    years: 0,
    satisfaction: 0,
  });
  const [visible, setVisible] = useState(true);
  const metrics = [
    { label: "Eventos", value: 127, suffix: "+" },
    { label: "Años de Experiencia", value: 25, suffix: "+" },
    { label: "Client Satisfaction", value: 100, suffix: "%" },
  ];
  useEffect(() => {
    const interval = setInterval(
      () => setCurrentMetric((prev) => (prev + 1) % metrics.length),
      3000
    );
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      setAnimatedCounts({
        events: Math.floor(127 * progress),
        years: Math.floor(25 * progress),
        satisfaction: Math.floor(98 * progress),
      });
      if (step >= steps) clearInterval(timer);
    }, duration / steps);
    return () => clearInterval(timer);
  }, []);
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      if (!visible) return;
      const twoVh = window.innerHeight * 0.02;
      if (window.scrollY > twoVh) {
        const currentScroll = window.scrollY;
        setVisible(false);
        requestAnimationFrame(() => {
          window.scrollTo({ top: currentScroll - twoVh, behavior: "smooth" });
          if (onDisappear) onDisappear();
        });
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [visible, onDisappear]);
  return (
    <AnimatePresence>
      {visible && (
        <motion.section
          key="presentation"
          id="home"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
          <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mb-6"
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-montserrat font-bold mb-2">
                Forever Young
              </h1>
              <p className="text-lg md:text-xl font-orbitron tracking-wider">
                DJ JESUS PULIDO
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mb-8"
            >
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-montserrat font-bold mb-4 leading-tight">
                Vive La Gran Experiencia{" "}
                <span className="block text-primary">de la Fiesta</span>
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Servicios profesionales de DJ que unen a todas las edades en la
                pista de baile, con la mezcla perfecta de clásicos, éxitos
                actuales y todo lo que hay entre medio..
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
            >
              {metrics.map((metric, index) => (
                <div
                  key={index}
                  className={`bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-white/10 transition-all duration-500 ${
                    currentMetric === index
                      ? "ring-2 ring-primary shadow-neon"
                      : ""
                  }`}
                >
                  <div className="text-3xl md:text-4xl font-montserrat font-bold text-primary mb-2">
                    {index === 0 && animatedCounts.events}
                    {index === 1 && animatedCounts.years}
                    {index === 2 && animatedCounts.satisfaction}
                    {metric.suffix}
                  </div>
                  <div className="text-sm md:text-base text-muted-foreground font-medium">
                    {metric.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default Presentation;
