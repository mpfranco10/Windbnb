import stays from "../assets/stays.json";
import { StayProps } from "../types/Stays.types";

export const loadStays = (): Promise<StayProps[]> | undefined => {
  return new Promise<StayProps[]>((resolve) => {
    setTimeout(() => resolve(stays), 2000);
  });
};
