import React from "react";
import GreyBackgroundSpan from "./GreyBackgroundSpan";
import { WorkExpCardProps } from "@/types";

const WorkExpCard: React.FC<WorkExpCardProps> = ({
  startDate,
  endDate,
  location,
  position,
  otherPosition,
}) => {
  return (
    <div className="flex flex-col items-center gap-1 text-animation ">
      <p className="text-darkGrey text-sm py-2">
        {startDate} {endDate ? `- ${endDate}` : ""}
      </p>
      <h4 className="font-bold text-lg">{location}</h4>
      <p className="text-darkGrey text-sm py-2">{position}</p>
      <GreyBackgroundSpan text={otherPosition} />
    </div>
  );
};

export default WorkExpCard;
