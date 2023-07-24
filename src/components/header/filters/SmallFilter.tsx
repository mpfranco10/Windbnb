import "./styles/SmallFilter.css";
import SearchIcon from "@mui/icons-material/Search";

type SmallFilterProps = {
  onClick?: () => void;
  onLocationClick?: () => void;
  onGuestsClick?: () => void;
  onSearchClick?: () => void;
  showLabels?: boolean;
};

export default function SmallFilter({
  onClick,
  onLocationClick,
  onGuestsClick,
  onSearchClick,
  showLabels = false,
}: SmallFilterProps) {
  const noClick = () => {};
  return (
    <div className="smallFilter" onClick={onClick ?? noClick}>
      <div className="filterItem" onClick={onLocationClick ?? noClick}>
        {showLabels && <p className="filterLabel">LOCATION</p>}
        Helsinki, Finland
      </div>
      <div
        className="filterItem grayFilterText"
        onClick={onGuestsClick ?? noClick}
      >
        {showLabels && <p className="filterLabel">GUESTS</p>}
        Add guests
      </div>
      <div className="filterItem" onClick={onSearchClick ?? noClick}>
        <SearchIcon style={{ fill: "#f05454" }} />
      </div>
    </div>
  );
}
