const Section2 = () => {
  return (
    <section className="relative min-h-screen">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/img/wallpaper1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-black/70" />
      <div className="relative z-10 flex items-center justify-center h-full">
        <h1 className="text-white text-4xl font-bold">Tu contenido aquí</h1>
      </div>
    </section>
  );
};

export default Section2;
