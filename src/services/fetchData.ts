import stays from "../assets/stays.json";
import { StayProps } from "../components/types/Stays.types";

export const loadStays = (): StayProps[] => {
  return stays;
};
