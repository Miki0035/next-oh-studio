import React from "react";

const Greeting = ({ text }: { text: string }) => {
  return (
    <h1 className="font-semibold text-3xl py-8 text-animation text-center md:w-3/4 md:text-5xl lg:text-7xl lg:px-24">
      {text}
    </h1>
  );
};

export default Greeting;
