import { useState } from "react";
import "./styles/Filter.css";
import SmallFilter from "./SmallFilter";
import FilterDetails from "./FilterDetails";

export default function Filter() {
  const [showFilterDetails, setShowFilterDetails] = useState<boolean>(false);

  const handleSmallFilterClick = () => {
    setShowFilterDetails(true);
  };

  return (
    <>
      {!showFilterDetails ? (
        <SmallFilter onClick={handleSmallFilterClick} />
      ) : (
        <FilterDetails />
      )}
    </>
  );
}
