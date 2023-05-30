import { useState, useCallback, memo, useRef } from "react";
import Map from "../lib/Map";
import Nav from "../components/Nav";
import ModalBox from "../components/ModalBox";
import SearchBar from "../components/SearchBar";
import DropDownMenu from "../components/DropDownMenu";
import LocationList from "../components/LocationList";

export default function Management() {
  const modalRef = useRef();
  const searchRef = useRef();
  const mapRef = useRef();
  return (
    <div>
      <SearchBar
        ref={searchRef}
        onClick={() => {
          mapRef.current.setMapCenter(
            JSON.parse("[" + searchRef.current.returnInputValue() + "]")
          );
        }}
      />
      <DropDownMenu />
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          width: "100%",
          padding: "30px",
        }}
      >
        <LocationList />
        <Map
          onClick={async () => {
            const res = await fetch("http://202.191.58.206/pamair/hourly", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                city: "Ha Noi",
                district: "Quan Hoan Kiem",
              }),
            });
            const data = res.json();
            console.log(
              data.then(function (result) {
                return result.aqi_us[0];
              })
            );
            modalRef.current.displayOnClick();
          }}
          ref={mapRef}
        />
      </div>
      <ModalBox ref={modalRef} />
    </div>
  );
}
