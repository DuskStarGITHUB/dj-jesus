const MainImage = () => {
  return (
    <div className="relative w-full h-full">
      <div className="absolute inset-0 bg-black/90 dark:bg-white/90 mask-[url(/photos/1.png)] mask-center mask-cover opacity-20" />
      <div className="absolute inset-0 bg-black/90 dark:bg-white/90 mask-[url(/photos/1.png)] mask-center mask-cover translate-x-1 opacity-50" />
      <div className="absolute inset-0 bg-black/90 dark:bg-white/90 mask-[url(/photos/3.png)] mask-center mask-cover opacity-20" />
      <div className="absolute inset-0 bg-black/90 dark:bg-white/90 mask-[url(/photos/3.png)] mask-center mask-cover translate-x-1 opacity-50" />
      <div className="absolute inset-0 bg-black/90 dark:bg-white/90 mask-[url(/photos/1.png)] mask-center mask-cover opacity-20" />
      <div className="absolute inset-0 bg-black/90 dark:bg-white/90 mask-[url(/photos/1.png)] mask-center mask-cover translate-x-3 opacity-50" />
      <div className="absolute inset-0 bg-black/90 dark:bg-white/90 mask-[url(/photos/3.png)] mask-center mask-cover opacity-20" />
      <div className="absolute inset-0 bg-black/90 dark:bg-white/90 mask-[url(/photos/3.png)] mask-center mask-cover translate-x-3 opacity-50" />
    </div>
  );
};

export default MainImage;
