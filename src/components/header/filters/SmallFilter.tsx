import "./styles/SmallFilter.css";
import SearchIcon from "@mui/icons-material/Search";

type SmallFilterProps = {
  onClick: () => void;
};

export default function SmallFilter({ onClick }: SmallFilterProps) {
  return (
    <div className="smallFilter" onClick={onClick}>
      <div className="filterItem">Helsinki, Finland</div>
      <div className="filterItem grayFilterText">Add guests</div>
      <div className="filterItem">
        <SearchIcon style={{ fill: "#f05454" }} />
      </div>
    </div>
  );
}
