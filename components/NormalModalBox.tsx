export const NormalModalBox = (
  styleModal,
  props,
  table,
  table2,
  table3,
  selectModelMenu,
  LastUpdateMonth,
  closeOnClick
) => {
  return (
    <div>
      <p className={styleModal.formCell}>{props.Location}</p>
      <div className={styleModal.formCell}>
        <p>Data</p>
        <p>Missing Value</p>
        <div className={styleModal.tableContainer}>
          {table(props.data, styleModal)}
        </div>
      </div>
      <div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p>Model</p>
          {selectModelMenu()}
        </div>
        <div className={styleModal.tableContainer}>
          {props.cityMode === "Hourly"
            ? table2(props.data, styleModal)
            : table3(props.data, styleModal)}
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
  );
};
