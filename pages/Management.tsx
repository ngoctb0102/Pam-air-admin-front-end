import { useState, useCallback, memo, useRef } from "react";
import Map from "../lib/Map";
import Nav from "../components/Nav";
import ModalBox from "../components/ModalBox";
import SearchBar from "../components/SearchBar";
import DropDownMenu from "../components/DropDownMenu";

export default function Management() {
  const modalRef = useRef();

  return (
    <div>
      <SearchBar />
      <DropDownMenu />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          padding: "30px",
        }}
      >
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
            console.log(data);
            modalRef.current.displayOnClick();
          }}
        />
      </div>
      <ModalBox ref={modalRef} />
    </div>
  );
}
