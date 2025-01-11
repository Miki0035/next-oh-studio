import { Footer, Greeting, GridLayout, GreyBackgroundSpan } from "@/components";
import { gridHomeImages, skillCards } from "@/constants";

export default function Home() {
  return (
    <main className="w-full h-full mt-24">
      <div className="w-full flex justify-center items-center md:flex-col py-12 px-4">
        <Greeting text=" A Brand and product designer working with clients globally" />
        <p className="hidden md:flex mt-5 justify-center gap-5 w-full items-center py-5 px-2">
          {skillCards.map((skill) => (
           <GreyBackgroundSpan key={skill} text={skill} />
          ))}
        </p>
      </div>
      <GridLayout items={gridHomeImages} />

      <Footer />
    </main>
  );
}
