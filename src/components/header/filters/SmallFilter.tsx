import "./styles/SmallFilter.css";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";

const SMALL_BUTTON_TYPE = "small";
const BIG_BUTTON_TYPE = "big";

type SmallFilterProps = {
  onClick?: () => void;
  onLocationClick?: () => void;
  onGuestsClick?: () => void;
  onSearchClick?: () => void;
  onCloseClick?: () => void;
  showLabels?: boolean;
  searchButtonType?: "big" | "small";
};

export default function SmallFilter({
  onClick,
  onLocationClick,
  onGuestsClick,
  onSearchClick,
  showLabels = false,
  searchButtonType = SMALL_BUTTON_TYPE,
  onCloseClick,
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
      <div
        className="filterItemButton fullHeight"
        onClick={onSearchClick ?? noClick}
      >
        {searchButtonType === SMALL_BUTTON_TYPE ? (
          <SearchIcon style={{ fill: "#f05454" }} />
        ) : (
          <>
            <button className="bigSearchButton">
              <SearchIcon style={{ fill: "white" }} />
              Search test
            </button>
            <CloseIcon onClick={onCloseClick} />
          </>
        )}
      </div>
    </div>
  );
}
