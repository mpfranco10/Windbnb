import React from "react";
import { loadStays } from "../../services/fetchData";
import { StayProps } from "./../types/Stays.types";
import Stay from "./Stay";
import "./Stays.css";

export default function Stays() {
  const [stays, setStays] = React.useState<StayProps[]>([]);

  React.useEffect(() => {
    setStays(loadStays());
  }, []);

  return (
    <div className="stays">
      <div id="stayHeader">
        <h2 className="staysTitle">Stays in Finland</h2>
        <p>{stays.length} stays</p>
      </div>

      <h2 className="staysAmount"></h2>
      <div className="staysGrid">
        {stays.map((stay) => (
          <Stay key={stay.title} {...stay}></Stay>
        ))}
      </div>
    </div>
  );
}
