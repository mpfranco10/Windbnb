import { StayProps } from "../types/Stays.types";
import "./Stay.css";
import star from "../../assets/star.svg";

export default function Stay(props: StayProps) {
  const { title, rating, photo, superHost, type, beds } = props;
  return (
    <div className="stay">
      <img src={photo} alt={title} className="stayPhoto" />
      <div className="stayInfo">
        {superHost && <p className="staySuperHost">SUPER HOST</p>}
        <p className="stayType">
          {type}{" "}
          {beds && beds > 0 ? " - ".concat(beds.toString(), " beds") : ""}
        </p>
        <p className="stayRating">
          {" "}
          <img src={star} alt="Star" className="star" />
          {rating}
        </p>
      </div>
      <p className="stayTitle">{title}</p>
    </div>
  );
}
