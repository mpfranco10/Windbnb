import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import "./styles/FilterDetails.css";
type FilterDetailsProps = { onClick?: () => void };

export default function FilterDetails({
  onClick: onToggleClick,
}: FilterDetailsProps) {
  const [filterShown, setFilterShown] = useState<"location" | "guests">(
    "location",
  );

  return (
    <div className="filterDetails">
      <div className="filterDetailsContent">
        <div className="bigFilter">
          <div className="bigFilterItem">
            <p className="filterLabel">LOCATION</p>
            Helsinki, Finland
          </div>
          <div className="bigFilterItem grayFilterText">
            <p className="filterLabel">GUESTS</p>
            Add guests
          </div>
          <div className="filterItemButton fullHeight">
            <button className="bigSearchButton">
              <SearchIcon style={{ fill: "white" }} />
              Search
            </button>
            <div className="closeButton">
              <CloseIcon onClick={onToggleClick} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
