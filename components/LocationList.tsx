import {
  useState,
  useCallback,
  memo,
  useRef,
  useImperativeHandle,
  forwardRef,
} from "react";
import LocationListStyle from "../public/style/LocationList.module.css";
import { HaNoiLocationList } from "../lib/HaNoiLocationList";
import { HoChiMinhLocationList } from "../lib/HoChiMinhLocationList";
import APIHoChiMinhLocationList from "../lib/APIHoChiMinhLocationList";
import APIHaNoiLocationList from "../lib/APIHanoiLocationList";
import { LocationCard } from "../lib/LocationCard";
const backEndLocationListHAN = [];
const backEndLocationListHCM = [];
//promise any on the backend can not be extract by any other method than maps
APIHaNoiLocationList().then((res) =>
  res.map((items) => {
    backEndLocationListHAN.push(items);
  })
);
APIHoChiMinhLocationList().then((res) =>
  res.map((items) => {
    backEndLocationListHCM.push(items);
  })
);
function LocationList(props: { onClick: (e) => void }, ref) {
  const addingCardRef = useRef<HTMLInputElement>();
  const [ListState, setListState] = useState("Ha Noi");
  const [cardListState, setCardListState] = useState(HaNoiLocationList);
  const numberRef = useRef<HTMLInputElement>();
  const nameRef = useRef<HTMLInputElement>();
  const districtRef = useRef<HTMLInputElement>();
  const latRef = useRef<HTMLInputElement>();
  const lngRef = useRef<HTMLInputElement>();

  const checkListState = () => {
    if (ListState === "Ha Noi") {
      setListState("Ho Chi Minh");
    } else {
      setListState("Ha Noi");
    }
  };

  const ListLocationCard = (array: Array<any>) => {
    return array.map((items: any, index: any) => {
      let nextVal =
        array[index + 1] === undefined ? "" : array[index + 1]["location"];
      let valueChange = items["location"] === nextVal;
      console.log(Object.keys(items));
      return LocationCard(
        index,
        items["Ma tram"],
        items["Ten tram"],
        items["location"],
        items["lon"],
        items["lat"],
        valueChange
      );
    });
  };
  return (
    <div className={LocationListStyle.LocationList}>
      <div
        style={{
          border: "2px solid black",
          borderRadius: "5px",
          padding: "0px",
          position: "sticky",
          top: "0",
          backgroundColor: "black",
          color: "beige",
        }}
      >
        <div
          onClick={() => checkListState()}
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <div
            style={{
              position: "absolute",
              width: "100%",
              display: "flex",
              justifyContent: "flex-start",
            }}
          >
            <div>
              <h4 style={{ margin: "0px" }}>abc:xyz</h4>
              <h4 style={{ margin: "0px" }}>123:456</h4>
            </div>
          </div>
          <h2>{ListState}</h2>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            border: "2px solid black",
            borderRadius: "5px",
            padding: "0px",
            width: "100%",
          }}
        >
          <h4
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "75px",
              width: "120px",
              border: "2px solid beige",
              margin: "0px",
              cursor: "pointer",
            }}
          >
            Ma Tram
          </h4>
          <h4
            style={{
              display: "flex",
              alignItems: "center",
              height: "75px",
              width: "200px",
              border: "2px solid beige",
              margin: "0px",
              cursor: "pointer",
            }}
          >
            Ten Tram
          </h4>
          <h4
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "75px",
              width: "150px",
              border: "2px solid beige",
              margin: "0px",
              cursor: "pointer",
            }}
          >
            Ten Quan
          </h4>
          <h4
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",

              height: "75px",
              width: "150px",
              border: "2px solid beige",
              margin: "0px",
              cursor: "pointer",
            }}
          >
            Lat
          </h4>
          <h4
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "75px",
              width: "150px",
              border: "2px solid beige",
              margin: "0px",
              cursor: "pointer",
            }}
          >
            Lng
          </h4>
          <h4
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "75px",
              width: "150px",
              border: "2px solid beige",
              margin: "0px",
              cursor: "pointer",
            }}
          ></h4>
        </div>
      </div>

      {ListState === "Ha Noi"
        ? ListLocationCard(backEndLocationListHAN)
        : ListLocationCard(backEndLocationListHCM)}

      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <h1
          className={LocationListStyle.addButtonLocationList}
          style={{
            border: "2px solid black",
            borderRadius: "100%",
            width: "20px",
            height: "20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          +
        </h1>
      </div>
    </div>
  );
}

export default LocationList;
