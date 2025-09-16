import React, { useEffect, useState } from "react";

interface VisualizerBar {
  id: number;
  height: number;
  delay: number;
}
interface VisualizerProps {
  barCount?: number;
  activeVisualization?: number;
  className?: string;
}

export const Visualizer: React.FC<VisualizerProps> = ({
  barCount = 12,
  activeVisualization = 0,
  className = "",
}) => {
  const [bars, setBars] = useState<VisualizerBar[]>([]);
  useEffect(() => {
    const initialBars = Array.from({ length: barCount }, (_, i) => ({
      id: i,
      height: Math.random() * 100 + 20,
      delay: i * 0.1,
    }));
    setBars(initialBars);
  }, [barCount]);
  return (
    <div
      className={`flex items-end justify-center space-x-1 h-16 mt-25 ${className}`}
    >
      {bars.map((bar) => (
        <div
          key={bar.id}
          className="w-3 rounded-t bg-gradient-to-t from-primary to-accent animate-visualizer"
          style={{
            height:
              activeVisualization === 0
                ? `${bar.height}%`
                : `${Math.random() * 80 + 20}%`,
            animationDelay: `${bar.delay}s`,
          }}
        />
      ))}
      <style jsx>{`
        @keyframes visualizer {
          0%,
          100% {
            transform: scaleY(0.3);
          }
          50% {
            transform: scaleY(1);
          }
        }
        .animate-visualizer {
          transform-origin: bottom;
          animation: visualizer 5s infinite alternate;
        }
      `}</style>
    </div>
  );
};
