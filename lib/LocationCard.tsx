export const LocationCard = (
  index,
  item0,
  item1,
  item2,
  item3,
  item4,
  valueChange
) => {
  return typeof index === "number" &&
    typeof item0 === "string" &&
    typeof item1 === "string" &&
    typeof item2 === "string" &&
    typeof item3 === "number" &&
    typeof item4 === "number" ? (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          borderRadius: "5px",
          padding: "0px",
          height: "75px",
        }}
        key={item3}
        className={item3 + "," + item4}
      >
        <h4
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "75px",
            width: "70px",
            border: "2px solid black",
            margin: "0px",
            cursor: "pointer",
          }}
        >
          {item0}
        </h4>
        <h4
          style={{
            display: "flex",
            alignItems: "center",
            height: "75px",
            width: "200px",
            border: "2px solid black",
            margin: "0px",
            cursor: "pointer",
          }}
        >
          {item1}
        </h4>
        <h4
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "75px",
            width: "150px",
            border: "2px solid black",
            margin: "0px",
            cursor: "pointer",
          }}
        >
          {item2}
        </h4>
        <h4
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "75px",
            width: "150px",
            border: "2px solid black",
            margin: "0px",
            cursor: "pointer",
          }}
        >
          {typeof item3 === "number" && typeof item4 === "number"
            ? item3.toFixed(2)
            : item3}
        </h4>
        <h4
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "75px",
            width: "150px",
            border: "2px solid black",
            margin: "0px",
            cursor: "pointer",
          }}
        >
          {typeof item3 === "number" && typeof item4 === "number"
            ? item4.toFixed(2)
            : item4}
        </h4>
        <h4
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "75px",
            width: "150px",
            border: "2px solid black",
            borderBottom: valueChange ? "0px" : "4px solid black",
            borderTop: "0px",
            margin: "0px",
            cursor: "pointer",
          }}
        ></h4>
      </div>
    </div>
  ) : (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          borderRadius: "5px",
          padding: "0px",
          height: "75px",
        }}
        key={item3}
        className={item3 + "," + item4}
      >
        <h4
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "75px",
            width: "70px",
            border: "2px solid black",
            margin: "0px",
            cursor: "pointer",
          }}
        >
          {item0}
        </h4>
        <h4
          style={{
            display: "flex",
            alignItems: "center",
            height: "75px",
            width: "200",
            border: "2px solid black",
            margin: "0px",
            cursor: "pointer",
          }}
        >
          {item1}
        </h4>
        <h4
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "75px",
            width: "150px",
            border: "2px solid black",
            margin: "0px",
            cursor: "pointer",
          }}
        >
          {item2}
        </h4>
        <h4
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",

            height: "75px",
            width: "150px",
            border: "2px solid black",
            margin: "0px",
            cursor: "pointer",
          }}
        >
          {typeof item3 === "number" && typeof item4 === "number"
            ? item3.toFixed(2)
            : item3}
        </h4>
        <h4
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",

            height: "75px",
            width: "150px",
            border: "2px solid black",
            margin: "0px",
            cursor: "pointer",
          }}
        >
          {typeof item3 === "number" && typeof item4 === "number"
            ? item4.toFixed(2)
            : item4}
        </h4>
        <h4
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "75px",
            width: "150px",
            border: "2px solid black",
            borderBottom: valueChange ? "0px" : "4px solid black",
            borderTop: "0px",
            margin: "0px",
            cursor: "pointer",
          }}
        ></h4>
      </div>
    </div>
  );
};
