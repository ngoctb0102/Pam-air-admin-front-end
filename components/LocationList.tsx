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
import { type } from "@testing-library/user-event/dist/type";
function LocationList(props: { onClick: (e) => void }, ref) {
  const addingCardRef = useRef();
  const [ListState, setListState] = useState("Ha Noi");
  const [cardListState, setCardListState] = useState(HaNoiLocationList);
  const numberRef = useRef();
  const nameRef = useRef();
  const districtRef = useRef();
  const latRef = useRef();
  const lngRef = useRef();

  const checkListState = () => {
    if (ListState === "Ha Noi") {
      setListState("Ho Chi Minh");
    } else {
      setListState("Ha Noi");
    }
  };
  const LocationCard = (index, item0, item1, item2, item3, item4) => {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          border: "2px solid black",
          borderRadius: "5px",
          padding: "0px",
        }}
        key={item3}
        className={item3 + "," + item4}
        onClick={props.onClick}
      >
        <h4
          style={{
            height: "72px",
            width: "70px",
            border: "2px solid black",
            margin: "0px",
            cursor: "pointer",
          }}
        >
          {item0}
        </h4>
        <h4
          style={{
            height: "72px",
            width: "150px",
            border: "2px solid black",
            margin: "0px",
            cursor: "pointer",
          }}
        >
          {item1}
        </h4>
        <h4
          style={{
            height: "72px",
            width: "150px",
            border: "2px solid black",
            margin: "0px",
            cursor: "pointer",
          }}
        >
          {item2}
        </h4>
        <h4
          style={{
            height: "72px",
            width: "150px",
            border: "2px solid black",
            margin: "0px",
            cursor: "pointer",
          }}
        >
          {typeof item3 === "number" && typeof item4 === "number" ? (
            item3.toFixed(2) + "," + item4.toFixed(2)
          ) : (
            <div>
              <div>{item3}</div>
              <div>{item4}</div>
            </div>
          )}
        </h4>
      </div>
    );
  };
  const ListLocationCard = (array) => {
    return array.map((items, index) => {
      return LocationCard(
        index,
        items[0],
        items[1],
        items[2],
        items[3],
        items[4]
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
      {ListState === "Ha Noi" ? (
        ListLocationCard(HaNoiLocationList)
      ) : (
        <div></div>
      )}
      <div style={{ display: "none" }} ref={addingCardRef}>
        {LocationCard(
          1,
          <input
            ref={numberRef}
            placeholder="number"
            style={{ width: "60px", backgroundColor: "transparent" }}
          ></input>,
          <input
            ref={nameRef}
            placeholder="name"
            style={{ width: "132px", backgroundColor: "transparent" }}
          ></input>,
          <input
            ref={districtRef}
            placeholder="district"
            style={{ width: "132px", backgroundColor: "transparent" }}
          ></input>,
          <input
            ref={latRef}
            placeholder="lattitude"
            style={{ width: "132px", backgroundColor: "transparent" }}
          ></input>,
          <input
            ref={lngRef}
            placeholder="longtitude"
            style={{ width: "132px", backgroundColor: "transparent" }}
          ></input>
        )}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            marginTop: "10px",
          }}
        >
          <button
            style={{
              backgroundColor: "transparent",
              width: "50px",
              height: "30px",
              display: "flex",
              justifyContent: "center",
              cursor: "pointer",
            }}
            onClick={() => {
              if (
                numberRef.current.value &&
                nameRef.current.value &&
                districtRef.current.value &&
                latRef.current.value &&
                lngRef.current.value
              ) {
                addingCardRef.current.style.display = "none";
                setCardListState(
                  HaNoiLocationList.push([
                    Number(numberRef.current.value),
                    nameRef.current.value,
                    districtRef.current.value,
                    Number(latRef.current.value),
                    Number(lngRef.current.value),
                  ])
                );
              } else {
                alert("please prompt all the field");
              }
              // setLocationListState(HaNoiLocationList.push([numberLocationState,nameLocationState,districtLocationState,latLocationState,lngLocationState]))
            }}
          >
            Submit
          </button>
        </div>
      </div>
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
          onClick={() => {
            addingCardRef.current.style.display = "block";
          }}
        >
          +
        </h1>
      </div>
    </div>
  );
}

export default LocationList;
