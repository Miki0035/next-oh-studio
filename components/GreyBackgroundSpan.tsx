import React from "react";

const GreyBackgroundSpan = ({ text }: { text: string }) => {
  return (
    <span className=" text-sm bg-lightGrey rounded-full px-4 py-2">
      {" "}
      {text}
    </span>
  );
};

export default GreyBackgroundSpan;
