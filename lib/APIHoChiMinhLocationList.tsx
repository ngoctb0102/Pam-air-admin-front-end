const APIHoChiMinhLocationList = async () => {
  const res = await fetch("http://202.191.58.206/pamair/locatlist", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      city: "Ho Chi Minh",
    }),
  }).then((response) => {
    if (!response.ok) throw new Error(`${response.status}`);
    else return response;
  });
  return res.json();
};
export default APIHoChiMinhLocationList;
