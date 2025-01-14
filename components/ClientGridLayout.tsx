import { ClientCardProps } from "@/types";
import Image from "next/image";
import React from "react";

const ClientGridLayout = ({ items }: { items: ClientCardProps[] }) => {
  return (
    <div className="w-full h-full grid grid-cols-1  place-items-center gap-4 mt-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-x-1">
      {items.map(({ id, src }) => (
        <div key={id} className="flex justify-center text-animation items-center md:w-54 h-48">
          <Image src={src} alt={src} width={200} height={200}  />
        </div>
      ))}
    </div>
  );
};

export default ClientGridLayout;
