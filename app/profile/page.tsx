import { Footer, Greeting } from "@/components";
import CardNoAnimation from "@/components/CardNoAnimation";
import { profileGridImages } from "@/constants";
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
      <Footer />
    </main>
  );
};

export default Profile;
