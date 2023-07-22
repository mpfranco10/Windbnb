import { useState } from "react";
import "./Filter.css";
import SearchIcon from "@mui/icons-material/Search";

export default function Filter() {
  const [showFilterDetails, setShowFilterDetails] = useState<boolean>(false);

  return (
    <>
      {!showFilterDetails && (
        <div className="smallFilter">
          <div className="filterItem">Helsinki, Finland</div>
          <div className="filterItem grayFilterText">Add guests</div>
          <div className="filterItem">
            <SearchIcon style={{ fill: "#f05454" }} />
          </div>
        </div>
      )}
      {showFilterDetails && <div></div>}
    </>
  );
}
