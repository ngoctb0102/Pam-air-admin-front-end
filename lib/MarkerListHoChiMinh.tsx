import { HoChiMinhLocationList } from "./HoChiMinhLocationList";
import { HoChiMinhDistrict } from "./HoChiMinhDistrict";
const MarkerListHoChiMinh: Array<any> = [];
const filterResult = (e) => {
  return HoChiMinhLocationList.filter((value) => value.includes(e));
};
for (let item of HoChiMinhDistrict) {
  let filterValue = filterResult(item);
  let count = 0;
  let sumLat = 0;
  let sumLng = 0;
  for (let item1 of filterValue) {
    count++;
    sumLat = sumLat + item1[3];
    sumLng = sumLng + item1[4];
  }
  let meanLat = sumLat / count;
  let meanLng = sumLng / count;
  MarkerListHoChiMinh.push([item, meanLat, meanLng]);
}
export default MarkerListHoChiMinh;
