import React from "react";
import Image from "next/image";
import { CardProps } from "@/types";
import Link from "next/link";

const Card: React.FC<CardProps> = ({ src, alt, text, isVideo }) => {
  return (
    <div className="w-5/6 px-2 h-68 relative z-10 flex flex-col items-center transition-all md:hover:cursor-pointer group">
      {/* overlay Container */}
      <div className="w-full h-full hidden absolute z-20 top-0 left-0 group-hover:block md:group-hover:opacity-100"></div>
      {/* Container with button and text */}
      <div className="w-full h-full hidden absolute z-30 top-0 left-0 md:group-hover:block  py-2 px-7">
        <div className="w-full flex justify-between">
          <p className="font-semibold text-sm md:text-md py-2 hidden md:block text-white">
            {text}
          </p>
          <Link
            href={""}
            className="bg-white flex justify-center items-center rounded-full w-12 h-12 absolute right-0 button-animation"
          >
            <Image
              src={"/diagonal-arrow.svg"}
              alt="diagonal arrow"
              width={20}
              height={20}
            />
          </Link>
        </div>
      </div>
      {!isVideo ? (
        <Image
          src={src}
          width={350}
          height={400}
          alt={alt}
          className="rounded-lg w-full md:group-hover:blur transition-all"
        />
      ) : (
        <video
          src={src}
          loop
          autoPlay
          className="rounded-lg w-full h-full md:group-hover:blur transition-all"
        ></video>
      )}
      <p className="font-semibold text-sm py-2 md:hidden self-start">{text}</p>
    </div>
  );
};

export default Card;
