import axios from "axios";

/** tempData 
  id : auto;
  value : 00.0;
  measuredAt : 0000-00-00 00:00:00;
*/
export const insertTempHour = () => {
  //getTemperatures/1h
  const tempHours = axios.get("/api/temperatures?interval=1h&page=1&size=1000");
  //const tempHours = axios.get("/api/temperatures?interval=1h");
  return tempHours;
};

export const insertNowTemp = () => {
  //getTemperatures/default
  const tempNow = axios.get("/api/temperatures");
  return tempNow;
};