import { NavBar } from "@/components/web/NavBar";
import Sections from "./sections";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="min-w-screenflex justify-center fixed top-0 z-50 backdrop-blur-md shadow-md rounded-b-full">
        <NavBar className="min-w-screen text-lg px-6 py-4 border-2 rounded-b-full" />
      </header>
      <main>
        <Sections />
      </main>
    </div>
  );
}
