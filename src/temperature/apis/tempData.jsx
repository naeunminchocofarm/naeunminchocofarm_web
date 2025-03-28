import axios from "axios";

/** tempData > 디비에서 지금 이렇게인가?
  id : auto;
  value : 00.0;
  measuredAt : 0000-00-00 00:00:00;
*/
export const insertTempHour = () => {
  //getTemperatures/1h
  const tempHours = axios.get("/api/temperatures?interval=1h");
  return tempHours;
};