const MainImage = () => {
  const masks = [
    { src: "/photos/1.png", translate: 0, opacity: 0.2 },
    { src: "/photos/1.png", translate: 1, opacity: 0.5 },
    { src: "/photos/3.png", translate: 0, opacity: 0.2 },
    { src: "/photos/3.png", translate: 1, opacity: 0.5 },
    { src: "/photos/1.png", translate: 3, opacity: 0.5 },
    { src: "/photos/3.png", translate: 3, opacity: 0.5 },
  ];

  const blurLayers = 7;

  return (
    <div className="relative w-full h-full">
      {masks.map((mask, index) => (
        <div
          key={index}
          className="absolute inset-0 bg-black/90 dark:bg-white/90 mask-center mask-cover"
          style={{
            maskImage: `url(${mask.src})`,
            WebkitMaskImage: `url(${mask.src})`,
            transform: `translateX(${mask.translate}px)`,
            opacity: mask.opacity,
          }}
        />
      ))}

      {Array.from({ length: blurLayers }).map((_, index) => (
        <div
          key={`blur-${index}`}
          className="absolute inset-0 bg-center bg-cover"
          style={{
            backgroundImage: `url('/photos/3.png')`,
            filter: "blur(12px)",
            opacity: 0.7,
          }}
        />
      ))}
    </div>
  );
};

export default MainImage;
