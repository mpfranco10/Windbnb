import "./styles/SmallFilter.css";
import SearchIcon from "@mui/icons-material/Search";

type SmallFilterProps = {
  onClick: () => void;
  showLabels?: boolean;
};

export default function SmallFilter({
  onClick,
  showLabels = false,
}: SmallFilterProps) {
  return (
    <div className="smallFilter" onClick={onClick}>
      <div className="filterItem">
        {showLabels && <p className="filterLabel">LOCATION</p>}
        Helsinki, Finland
      </div>
      <div className="filterItem grayFilterText">
        {showLabels && <p className="filterLabel">GUESTS</p>}
        Add guests
      </div>
      <div className="filterItem">
        <SearchIcon style={{ fill: "#f05454" }} />
      </div>
    </div>
  );
}
