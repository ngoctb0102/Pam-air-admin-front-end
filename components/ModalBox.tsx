import styleModal from "../public/style/modal.module.css";
import React, { useRef, useImperativeHandle } from "react";
type ModalProps = {
  Location: string;
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

const table = () => {
  return (
    <table className={styleModal.table}>
      <tr>
        <th></th>
        <th>Pm2.5</th>
        <th>Hum</th>
        <th>Temp</th>
      </tr>
      <tr>
        <td>Mean</td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>Max</td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>Min</td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    </table>
  );
};
const table2 = () => {
  return (
    <table className={styleModal.table}>
      <tr>
        <th></th>
        <th>R2</th>
        <th>Mdape</th>
        <th>Slope</th>
        <th>Offset</th>
      </tr>
      <tr>
        <td>1h</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>2h</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    </table>
  );
};
const ModalBox: React.ForwardRefRenderFunction<ModalHandle, ModalProps> = (
  props: ModalProps,
  forwardedRef
) => {
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
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div>
              <p className={styleModal.formCell}>{props.Location}</p>
              <div className={styleModal.formCell}>
                <p>Data</p>
                <p>Missing Value</p>
                {table()}
              </div>
              <div>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <p>Model</p>
                  {selectModelMenu()}
                </div>
                {table2()}
              </div>
              <p>Last updated:</p>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <button
                  onClick={closeOnClick}
                  className={styleModal.formButton}
                  style={{ color: "black", backgroundColor: "white" }}
                >
                  Cancel
                </button>
                <button
                  className={styleModal.formButton}
                  style={{ color: "white", backgroundColor: "black" }}
                >
                  Train Model
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.forwardRef(ModalBox);
