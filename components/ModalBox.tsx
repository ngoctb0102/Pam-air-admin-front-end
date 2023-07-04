import styleModal from "../public/style/modal.module.css";
import React, { useRef, useImperativeHandle } from "react";
import ReactLoading from "react-loading";
type ModalProps = {
  Location: string;
  loadingOrNot: boolean;
  data: any;
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

const table = (data) => {
  return (
    <table className={styleModal.table}>
      <tr
        style={{
          position: "sticky",
          top: "0",
          backgroundColor: "black",
          color: "white",
          zIndex: "1",
        }}
      >
        <th></th>
        <th>Pm2.5</th>
        <th>Hum</th>
        <th>Temp</th>
      </tr>
      <tr>
        <td>Max</td>
        <td>{data.max["1"].toFixed(2)}</td>
        <td>{data.max["2"].toFixed(2)}</td>
        <td>{data.max["3"].toFixed(2)}</td>
      </tr>
      <tr>
        <td>Min</td>
        <td>{data.min["1"].toFixed(2)}</td>
        <td>{data.min["2"].toFixed(2)}</td>
        <td>{data.min["3"].toFixed(2)}</td>
      </tr>
      <tr>
        <td>Mean</td>
        <td>{data.mean["1"].toFixed(2)}</td>
        <td>{data.mean["2"].toFixed(2)}</td>
        <td>{data.mean["3"].toFixed(2)}</td>
      </tr>
      <tr>
        <td>Median</td>
        <td>{data.median["1"].toFixed(2)}</td>
        <td>{data.median["2"].toFixed(2)}</td>
        <td>{data.median["3"].toFixed(2)}</td>
      </tr>
    </table>
  );
};
const table2 = (data) => {
  return (
    <table className={styleModal.table}>
      <tr
        style={{
          position: "sticky",
          top: "0",
          backgroundColor: "black",
          color: "white",
          zIndex: "1",
        }}
      >
        <th></th>
        <th>R2</th>
        <th>Mdape</th>
        <th>Slope</th>
        <th>Offset</th>
      </tr>
      <tr>
        <td>1h</td>
        <td>{data.r2[0].toFixed(2)}</td>
        <td>{data.mdape[0].toFixed(2)}</td>
        <td>{data.slope[0].toFixed(2)}</td>
        <td>{data.ofset[0].toFixed(2)}</td>
      </tr>
      <tr>
        <td>2h</td>
        <td>{data.r2[1].toFixed(2)}</td>
        <td>{data.mdape[1].toFixed(2)}</td>
        <td>{data.slope[1].toFixed(2)}</td>
        <td>{data.ofset[1].toFixed(2)}</td>
      </tr>
      <tr>
        <td>3h</td>
        <td>{data.r2[2].toFixed(2)}</td>
        <td>{data.mdape[2].toFixed(2)}</td>
        <td>{data.slope[2].toFixed(2)}</td>
        <td>{data.ofset[2].toFixed(2)}</td>
      </tr>
      <tr>
        <td>4h</td>
        <td>{data.r2[3].toFixed(2)}</td>
        <td>{data.mdape[3].toFixed(2)}</td>
        <td>{data.slope[3].toFixed(2)}</td>
        <td>{data.ofset[3].toFixed(2)}</td>
      </tr>
      <tr>
        <td>5h</td>
        <td>{data.r2[4].toFixed(2)}</td>
        <td>{data.mdape[4].toFixed(2)}</td>
        <td>{data.slope[4].toFixed(2)}</td>
        <td>{data.ofset[4].toFixed(2)}</td>
      </tr>
      <tr>
        <td>6h</td>
        <td>{data.r2[5].toFixed(2)}</td>
        <td>{data.mdape[5].toFixed(2)}</td>
        <td>{data.slope[5].toFixed(2)}</td>
        <td>{data.ofset[5].toFixed(2)}</td>
      </tr>
      <tr>
        <td>7h</td>
        <td>{data.r2[6].toFixed(2)}</td>
        <td>{data.mdape[6].toFixed(2)}</td>
        <td>{data.slope[6].toFixed(2)}</td>
        <td>{data.ofset[6].toFixed(2)}</td>
      </tr>
      <tr>
        <td>8h</td>
        <td>{data.r2[7].toFixed(2)}</td>
        <td>{data.mdape[7].toFixed(2)}</td>
        <td>{data.slope[7].toFixed(2)}</td>
        <td>{data.ofset[7].toFixed(2)}</td>
      </tr>
      <tr>
        <td>9h</td>
        <td>{data.r2[8].toFixed(2)}</td>
        <td>{data.mdape[8].toFixed(2)}</td>
        <td>{data.slope[8].toFixed(2)}</td>
        <td>{data.ofset[8].toFixed(2)}</td>
      </tr>
      <tr>
        <td>10h</td>
        <td>{data.r2[9].toFixed(2)}</td>
        <td>{data.mdape[9].toFixed(2)}</td>
        <td>{data.slope[9].toFixed(2)}</td>
        <td>{data.ofset[9].toFixed(2)}</td>
      </tr>
      <tr>
        <td>11h</td>
        <td>{data.r2[10].toFixed(2)}</td>
        <td>{data.mdape[10].toFixed(2)}</td>
        <td>{data.slope[10].toFixed(2)}</td>
        <td>{data.ofset[10].toFixed(2)}</td>
      </tr>
      <tr>
        <td>12h</td>
        <td>{data.r2[11].toFixed(2)}</td>
        <td>{data.mdape[11].toFixed(2)}</td>
        <td>{data.slope[11].toFixed(2)}</td>
        <td>{data.ofset[11].toFixed(2)}</td>
      </tr>
    </table>
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
                <p className={styleModal.formCell}>{props.Location}</p>
                <div className={styleModal.formCell}>
                  <p>Data</p>
                  <p>Missing Value</p>
                  <div className={styleModal.tableContainer}>
                    {table(props.data)}
                  </div>
                </div>
                <div>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <p>Model</p>
                    {selectModelMenu()}
                  </div>
                  <div className={styleModal.tableContainer}>
                    {table2(props.data)}
                  </div>
                </div>
                <p>Last updated: {LastUpdateMonth} 1</p>
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
