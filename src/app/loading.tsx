import "./css/index.css";

const Loading = () => {
  return (
    <div
      aria-busy="true"
      aria-label="Cargando contenido"
      className="flex flex-col items-center justify-center h-screen space-y-6 text-center"
    >
      <h1 className="text-2xl font-semibold">
        Loading
        <span className="inline-flex ml-1">
          <span className="animate-ping-dot">.</span>
          <span className="animate-ping-dot animation-delay-200">.</span>
          <span className="animate-ping-dot animation-delay-400">.</span>
        </span>
      </h1>

      {/* Barra de carga linear */}
      <div className="w-2/3 h-1 bg-gray-200 rounded-full overflow-hidden">
        <div className="h-full bg-gray-800 animate-pulse w-full"></div>
      </div>
    </div>
  );
};

export default Loading;
