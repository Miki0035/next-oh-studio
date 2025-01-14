import React from "react";
import { WorkExpGridItemProps } from "@/types";
import WorkExpCard from "./WorkExpCard";
const WorkExpGridLayout = ({ items }: { items: WorkExpGridItemProps[] }) => {
  return (
    <div className="w-full h-full grid grid-cols-1  place-items-center gap-12 mt-10 md:grid-cols-2 lg:grid-cols-3 md:gap-x-1">
      {items.map((item) => (
        <WorkExpCard key={item.id} {...item} />
      ))}
    </div>
  );
};

export default WorkExpGridLayout;
