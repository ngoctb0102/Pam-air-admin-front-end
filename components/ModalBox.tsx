import styleModal from "../public/style/modal.module.css";
import React, { useRef, useImperativeHandle } from "react";
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
        <th>Company</th>
        <th>Contact</th>
        <th>Country</th>
        <th>Country</th>
      </tr>
      <tr>
        <td>Alfreds Futterkiste</td>
        <td>Maria Anders</td>
        <td>Germany</td>
        <td>Germany</td>
      </tr>
      <tr>
        <td>Centro comercial Moctezuma</td>
        <td>Francisco Chang</td>
        <td>Mexico</td>
        <td>Germany</td>
      </tr>
    </table>
  );
};
function ModalBox(props, ref) {
  const modal = useRef();
  const closeOnClick = (e) => {
    modal.current.style.display = "none";
  };
  useImperativeHandle(ref, () => {
    return { displayOnClick: () => (modal.current.style.display = "block") };
  });
  return (
    <div className={styleModal.modal} ref={modal}>
      <div className={styleModal.modalContentContainer}>
        <div className={styleModal.modalContent}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div>
              <p className={styleModal.formCell}>Data To be fetch</p>
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
                {table()}
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
}

export default React.forwardRef(ModalBox);
