import { NavBar } from "@/components/web/NavBar";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center">
      <header className="w-full flex justify-center mt-0">
        <NavBar className="text-lg px-6 py-4 border-1 rounded-b-full" />
      </header>
      <main className="flex-1 flex flex-col items-center justify-start mt-10">
        <h1 className="text-5xl font-bold">Forever Young</h1>
      </main>
    </div>
  );
}
