import TrainModalStyle from "../public/style/TrainModalBox.module.css";
type TrainModalProps = {
  onClick: () => void;
  closeOnClick: any;
};
const TrainModalBox = (props: TrainModalProps) => {
  return (
    <div>
      <div className={TrainModalStyle.TrainContainer}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "25px",
          }}
        >
          <div>
            <h2> Training Model</h2>
            <h5>Learning rate</h5>
            <input
              className={TrainModalStyle.inputTrain}
              placeholder="0"
            ></input>

            <h5>Epochs</h5>
            <input
              className={TrainModalStyle.inputTrain}
              placeholder="0"
            ></input>

            <h5>Train data</h5>
            <input
              className={TrainModalStyle.inputTrain}
              placeholder="Train Data"
            ></input>

            <h5>Model</h5>
            <input
              className={TrainModalStyle.inputTrain}
              placeholder="0"
            ></input>
          </div>
        </div>
        <div style={{ marginBottom: "25px" }}>
          <h5>Training time: 20'</h5>
          <input className={TrainModalStyle.trainTime}></input>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button
            onClick={props.onClick}
            className={TrainModalStyle.TrainButton}
          >
            Return
          </button>
          <button
            style={{ color: "white", backgroundColor: "black" }}
            className={TrainModalStyle.TrainButton}
          >
            Train
          </button>
        </div>
      </div>
    </div>
  );
};
export default TrainModalBox;
