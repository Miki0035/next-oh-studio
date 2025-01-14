import { Footer, Greeting, GreyBackgroundSpan, CardNoAnimation, WorkExpGridLayout } from "@/components";
import ClientGridLayout from "@/components/ClientGridLayout";
import { clientGridItems, profileGridImages, workExpGridItems } from "@/constants";
import React from "react";

const Profile = () => {
  return (
    <main className="w-full h-full mt-24">
      <div className="w-full flex justify-center items-center md:flex-col py-12 px-4">
        <Greeting text="Hey 👋🏼 I'm Miki " />
      </div>
      <div className="w-full h-full grid grid-cols-1 text-animation place-items-center gap-4 mt-10 md:grid-cols-2 md:gap-x-1">
        {profileGridImages.map(({ id, src, alt }) => (
          <CardNoAnimation key={id} src={src} alt={alt} />
        ))}
      </div>
      <section className="w-full mt-14 flex flex-col items-center py-24 gap-8">
        <div className="w-80 sm:w-96 md:w-full md:px-24 lg:px-64  flex flex-col items-center">
          <GreyBackgroundSpan text="About" />
          <p className="w-full mt-8 leading-relaxed  font-semibold text-center text-xl  px-4 sm:px-0 sm:text-2xl md:text-3xl lg:text-4xl">
            A freelance designer based in the UK. I combine my experience in
            product and brand to solve problems, tell stories, and create
            compelling experiences.
          </p>
        </div>
      </section>
      <section className="w-full mt-14 flex flex-col items-center py-24 gap-8">
        <div className="w-80 sm:w-96 md:w-full md:px-24 lg:px-64  flex flex-col items-center">
          <GreyBackgroundSpan text="Experience" />
          <p className="w-full mt-8 leading-relaxed  font-semibold text-center text-xl  px-4 sm:px-0 sm:text-2xl md:text-3xl lg:text-4xl">
            Where I&apos;ve worked
          </p>
        </div>
        {/* Work Experience Grid */}
        <WorkExpGridLayout  items={workExpGridItems}/>
      </section>
      <section className="w-full mt-14 flex flex-col items-center py-24 gap-8">
        <div className="w-80 sm:w-96 md:w-full md:px-24 lg:px-64  flex flex-col items-center">
          <GreyBackgroundSpan text="Clients" />
          <p className="w-full mt-8 leading-relaxed  font-semibold text-center text-xl  px-4 sm:px-0 sm:text-2xl md:text-3xl lg:text-4xl">
            Who I&apos;ve worked with 
          </p>
        </div>
        {/* Clients Grid */}
        <ClientGridLayout  items={clientGridItems}/>
      </section>

      <Footer />
    </main>
  );
};

export default Profile;
