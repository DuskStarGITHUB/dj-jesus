import Section1 from "./modules/section1";
import Section2 from "./modules/section2";
import { ArtworkCards } from "./modules/cards";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Section1 />
      <ArtworkCards />
      <Section2 />
    </div>
  );
}
