export const table = (data, styleModal) => {
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
export const table3 = (data, styleModal) => {
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
        <td>1 day</td>
        <td>{data.r2[0].toFixed(2)}</td>
        <td>{data.mdape[0].toFixed(2)}</td>
        <td>{data.slope[0].toFixed(2)}</td>
        <td>{data.ofset[0].toFixed(2)}</td>
      </tr>
      <tr>
        <td>2 day</td>
        <td>{data.r2[1].toFixed(2)}</td>
        <td>{data.mdape[1].toFixed(2)}</td>
        <td>{data.slope[1].toFixed(2)}</td>
        <td>{data.ofset[1].toFixed(2)}</td>
      </tr>
      <tr>
        <td>3 day</td>
        <td>{data.r2[2].toFixed(2)}</td>
        <td>{data.mdape[2].toFixed(2)}</td>
        <td>{data.slope[2].toFixed(2)}</td>
        <td>{data.ofset[2].toFixed(2)}</td>
      </tr>
    </table>
  );
};
export const table2 = (data, styleModal) => {
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
