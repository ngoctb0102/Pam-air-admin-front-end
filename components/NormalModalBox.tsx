type NormalModalProps = {
  styleModal: any;
  props: any;
  table: any;
  table2: any;
  table3: any;
  selectModelMenu: any;
  LastUpdateMonth: any;
  closeOnClick: any;
  onClick: () => void;
};
const NormalModalBox = (props: NormalModalProps) => {
  return (
    <div>
      <p className={props.styleModal.formCell}>{props.props.Location}</p>
      <div className={props.styleModal.formCell}>
        <p>Data</p>
        <p>Missing Value</p>
        <div className={props.styleModal.tableContainer}>
          {props.table(props.props.data, props.styleModal)}
        </div>
      </div>
      <div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p>Model</p>
          {props.selectModelMenu()}
        </div>
        <div className={props.styleModal.tableContainer}>
          {props.props.cityMode === "Hourly"
            ? props.table2(props.props.data, props.styleModal)
            : props.table3(props.props.data, props.styleModal)}
        </div>
      </div>
      <p>Last updated: {props.LastUpdateMonth} 1</p>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button
          onClick={props.closeOnClick}
          className={props.styleModal.formButton}
          style={{ color: "black", backgroundColor: "white" }}
        >
          Cancel
        </button>
        <button
          onClick={props.onClick}
          className={props.styleModal.formButton}
          style={{ color: "white", backgroundColor: "black" }}
        >
          Train Model
        </button>
      </div>
    </div>
  );
};
export default NormalModalBox;
