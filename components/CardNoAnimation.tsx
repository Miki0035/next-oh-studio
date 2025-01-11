import React from "react";
import Image from "next/image";
import { CardNoAnimationProps } from "@/types";
const CardNoAnimation: React.FC<CardNoAnimationProps> = ({ src, alt }) => {
  return (
    <div className="w-5/6 px-2 relative z-10 flex flex-col items-center transition-all">
      <Image
        src={src}
        width={350}
        height={400}
        alt={alt}
        className="rounded-lg w-full md:group-hover:blur transition-all"
      />
    </div>
  );
};

export default CardNoAnimation;
