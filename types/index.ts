import { Dispatch, SetStateAction } from "react";

export type CardProps = {
  src: string;
  alt: string;
  text: string;
  isVideo: boolean;
};

export type WorkExpCardProps = {
  startDate: string;
  endDate?: string;
  location: string;
  position: string;
  otherPosition: string;
};

export type ClientCardProps = {
  id: number;
  src: string;
};

export type CardNoAnimationProps = {
  src: string;
  alt: string;
};

export type HomeGridItemProps = {
  id: number;
  src: string;
  alt: string;
  text: string;
  isVideo: boolean;
};

export type WorkExpGridItemProps = {
  id: number;
  startDate: string;
  endDate?: string;
  location: string;
  position: string;
  otherPosition: string;
};

export type ContextProps = {
  navIndex: number;
  setNavIndex: Dispatch<SetStateAction<number>>
}