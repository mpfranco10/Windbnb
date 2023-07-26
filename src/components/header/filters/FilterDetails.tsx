import { useState } from "react";
import SmallFilter from "./SmallFilter";
import "./styles/FilterDetails.css";
type FilterDetailsProps = { onClick?: () => void };

export default function FilterDetails({ onClick }: FilterDetailsProps) {
  const [filterShown, setFilterShown] = useState<"location" | "guests">(
    "location",
  );

  return (
    <div className="filterDetails">
      <div className="filterDetailsContent">
        <SmallFilter
          showLabels={true}
          searchButtonType="big"
          onCloseClick={onClick}
        />
      </div>
    </div>
  );
}
