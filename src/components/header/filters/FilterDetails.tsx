import SmallFilter from "./SmallFilter";
import "./styles/FilterDetails.css";
type FilterDetailsProps = {};

export default function FilterDetails({}: FilterDetailsProps) {
  return (
    <div className="filterDetails">
      <div className="filterDetailsContent">
        <SmallFilter onClick={() => {}} showLabels={true} />
      </div>
    </div>
  );
}
