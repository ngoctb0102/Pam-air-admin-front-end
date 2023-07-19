import styleModal from "../public/style/modal.module.css";
import React, { useRef, useImperativeHandle, useState, useEffect } from "react";
import ReactLoading from "react-loading";
import { table, table2, table3 } from "../lib/Table";
import { NormalModalBox } from "./NormalModalBox";
type ModalProps = {
  Location: string;
  loadingOrNot: boolean;
  data: any;
  cityMode: string;
};

export type ModalHandle = {
  displayOnClick: () => void;
};
const selectModelMenu: any = () => {
  return (
    <div className={styleModal.dropdownModelMenu}>
      <div className={styleModal.dropBoxModelMenu}>
        <input style={{ width: "93px" }} placeholder={"select model"} />
      </div>
      <div className={styleModal.dropdownContentModelMenu}>
        <a style={{ color: "white" }}>Hourly</a>
        <a style={{ color: "white" }}>Daily</a>
      </div>
    </div>
  );
};

const ModalBox: React.ForwardRefRenderFunction<ModalHandle, ModalProps> = (
  props: ModalProps,
  forwardedRef
) => {
  const LastUpdate = new Date();
  let LastUpdateMonth;
  switch (LastUpdate.getMonth()) {
    case 0:
      LastUpdateMonth = "Jan";
      break;
    case 1:
      LastUpdateMonth = "Feb";
      break;
    case 2:
      LastUpdateMonth = "Mar";
      break;
    case 3:
      LastUpdateMonth = "Apr";
      break;
    case 4:
      LastUpdateMonth = "May";
      break;
    case 5:
      LastUpdateMonth = "Jun";
      break;
    case 6:
      LastUpdateMonth = "Jul";
      break;
    case 7:
      LastUpdateMonth = "Aug";
      break;
    case 8:
      LastUpdateMonth = "Sep";
      break;
    case 9:
      LastUpdateMonth = "Oct";
      break;
    case 10:
      LastUpdateMonth = "Nov";
      break;
    case 11:
      LastUpdateMonth = "Dec";
      break;
  }

  const modal = useRef<HTMLInputElement>();
  const closeOnClick = (e) => {
    modal.current.style.display = "none";
  };
  useImperativeHandle(forwardedRef, () => {
    return { displayOnClick: () => (modal.current.style.display = "block") };
  });
  return (
    <div className={styleModal.modal} ref={modal}>
      <div className={styleModal.modalContentContainer}>
        <div className={styleModal.modalContent}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {props.loadingOrNot === false ? (
              <div>
                {NormalModalBox(
                  styleModal,
                  props,
                  table,
                  table2,
                  table3,
                  selectModelMenu,
                  LastUpdateMonth,
                  closeOnClick
                )}
              </div>
            ) : (
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  height: "100%",

                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div>
                  <div
                    style={{
                      width: "100%",

                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <ReactLoading type="balls" color="#000" />
                  </div>
                  <h3>waiting to fetch goods</h3>
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <button
                      className={styleModal.formButton}
                      style={{ color: "black", backgroundColor: "white" }}
                      onClick={closeOnClick}
                    >
                      Stop
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.forwardRef(ModalBox);
