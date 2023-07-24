import { useState } from "react";
import SmallFilter from "./SmallFilter";
import "./styles/FilterDetails.css";
type FilterDetailsProps = {};

export default function FilterDetails({}: FilterDetailsProps) {
  const [filterShown, setFilterShown] = useState<"location" | "guests">(
    "location",
  );

  return (
    <div className="filterDetails">
      <div className="filterDetailsContent">
        <SmallFilter onClick={() => {}} showLabels={true} />
      </div>
    </div>
  );
}
