import { useState } from "react";
import "./styles/Filter.css";
import SmallFilter from "./SmallFilter";
import FilterDetails from "./FilterDetails";

export default function Filter() {
  const [showFilterDetails, setShowFilterDetails] = useState<boolean>(false);

  const handleFilterClick = () => {
    setShowFilterDetails((previousState) => !previousState);
  };

  return (
    <>
      {!showFilterDetails ? (
        <SmallFilter onClick={handleFilterClick} />
      ) : (
        <FilterDetails onClick={handleFilterClick} />
      )}
    </>
  );
}
