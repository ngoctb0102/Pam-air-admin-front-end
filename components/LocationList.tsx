import { useState, useCallback, memo } from "react";
import LocationListStyle from "../public/style/LocationList.module.css";
import { HaNoiLocationList } from "../lib/HaNoiLocationList";
function LocationList() {
  const [ListState, setListState] = useState("Ha Noi");
  const checkListState = () => {
    if (ListState === "Ha Noi") {
      setListState("Ho Chi Minh");
    } else {
      setListState("Ha Noi");
    }
  };
  const LocationCard = (array) => {
    return array.map((items, index) => {
      return (
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            border: "2px solid black",
            borderRadius: "5px",
            marginBottom: "5px",
          }}
          key={index}
        >
          <h4>{items[0] + " , " + items[1] + " , " + items[2]}</h4>
        </div>
      );
    });
  };
  return (
    <div className={LocationListStyle.LocationList}>
      <div
        onClick={() => checkListState()}
        style={{ display: "flex", justifyContent: "center", width: "100%" }}
      >
        <h2>{ListState}</h2>
      </div>
      {ListState === "Ha Noi" ? LocationCard(HaNoiLocationList) : <div></div>}
    </div>
  );
}

export default LocationList;
