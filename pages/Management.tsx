import { useState, useCallback, memo, useRef, useEffect } from "react";
import Map, { MapHandle } from "../lib/Map";
import Nav from "../components/Nav";
import ModalBox, { ModalHandle } from "../components/ModalBox";
import SearchBar, { SearchHandle } from "../components/SearchBar";
import DropDownMenu, { dropDownMenuHandle } from "../components/DropDownMenu";
import LocationList from "../components/LocationList";
import { HaNoiDistrict } from "../lib/HaNoiDistrict";
import { HoChiMinhDistrict } from "../lib/HoChiMinhDistrict";
import { VietNamLocationList } from "../lib/VietNamLocationList";
export default function Management() {
  const modalRef = useRef<ModalHandle>();
  const searchRef = useRef<SearchHandle>();
  const mapRef = useRef<MapHandle>();
  const dropDownMenuRef = useRef<dropDownMenuHandle>();
  const [inputState, setInputState] = useState("");
  const [nameLocationState, setNameLocationState] = useState(["", ""]);
  const [LoadingOrNot, setLoadingOrNot] = useState(null);
  const [dataTable, setDataTable] = useState(null);
  const [cityMode, setCityMode] = useState("Hourly");
  let isLoading = null;
  useEffect(() => {
    if (inputState != "") {
      searchRef.current.modifyInputValue(inputState);
      mapRef.current.setMapCenter(
        JSON.parse("[" + searchRef.current.returnInputValue() + "]")
      );
      console.log(searchRef.current.returnInputValue());
    }
  }, [inputState]);
  useEffect(() => {
    console.log(nameLocationState);
    setLoadingOrNot(true);
    const getAPI = async () => {
      const res = await fetch("http://202.191.58.206/pamair/info", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          district: nameLocationState[0],
          city: nameLocationState[1],
        }),
      });
      const data = await res.json();
      setDataTable(data);
      setLoadingOrNot(false);
    };
    if (nameLocationState[0] != "") {
      getAPI();
    }
  }, [nameLocationState]);
  useEffect(() => {
    isLoading = LoadingOrNot;
    console.log(isLoading);
  }, [LoadingOrNot]);
  return (
    <div>
      <SearchBar
        ref={searchRef}
        onClick={() => {
          let inputVal = searchRef.current.returnInputValue();
          console.log(1);

          if (HaNoiDistrict.includes(inputVal)) {
            console.log(2);
            setNameLocationState([inputVal, "Ha Noi"]);
          } else if (HoChiMinhDistrict.includes(inputVal)) {
            console.log(3);
            setNameLocationState([inputVal, "Ho Chi Minh"]);
          } else if (VietNamLocationList.includes(inputVal)) {
            console.log(4);
            setNameLocationState([inputVal, inputVal]);
          } else {
            alert("Enter a valid value lat,lng or district city");
          }
          modalRef.current.displayOnClick();
        }}
      />
      <DropDownMenu
        onClick={(e) => {
          setCityMode(e);
          console.log(cityMode);
        }}
        ref={dropDownMenuRef}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          width: "100%",
          padding: "30px",
        }}
      >
        <LocationList
          onClick={async (e) => {
            await setInputState(e.currentTarget.className);
          }}
        />
        <Map
          onClick={async (e) => {
            await setNameLocationState(e);

            modalRef.current.displayOnClick();
          }}
          cityMode={cityMode}
          ref={mapRef}
        />
      </div>
      <ModalBox
        data={dataTable}
        Location={nameLocationState[0]}
        loadingOrNot={LoadingOrNot}
        ref={modalRef}
      />
    </div>
  );
}
