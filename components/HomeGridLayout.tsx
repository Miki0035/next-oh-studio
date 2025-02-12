import React from "react";
import Card from "./Card";
import { HomeGridItemProps } from "@/types";
const HomeGridLayout = ({ items }: { items: HomeGridItemProps[] }) => {
  return (
    <div className="w-full h-full grid grid-cols-1 text-animation place-items-center gap-4 mt-10 md:grid-cols-2 md:gap-x-1">
      {items.map(({ id, src, alt, text, isVideo }) => (
        <Card key={id} src={src} alt={alt} text={text} isVideo={isVideo} />
      ))}
    </div>
  );
};

export default HomeGridLayout;
