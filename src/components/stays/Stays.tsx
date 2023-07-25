import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Stay from "./Stay";
import "./Stays.css";
import {
  selectAllStays,
  loadAllStays,
  loadingStays,
} from "../../features/stays/staysSlice";
import { AppDispatch } from "../../app/store";
import { StayProps } from "../../types/Stays.types";

export default function Stays() {
  const dispatch = useDispatch<AppDispatch>();
  const stays = useSelector(selectAllStays);
  const loading = useSelector(loadingStays);

  React.useEffect(() => {
    dispatch(loadAllStays());
  }, []);

  return (
    <div className="stays">
      <div id="stayHeader">
        <h2 className="staysTitle">Stays in Finland</h2>
        <p>{stays.length} stays</p>
      </div>

      <h2 className="staysAmount"></h2>

      {stays && stays.length > 0 && (
        <div className="staysGrid">
          {stays.map((stay: StayProps) => (
            <Stay key={stay.title} {...stay}></Stay>
          ))}
        </div>
      )}
      {loading && (
         <div className="loaderContainer">
          <div className="loader"></div>
         </div>
        
      )}
    </div>
  );
}
