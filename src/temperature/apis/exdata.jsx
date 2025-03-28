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

export const insertNowTemp = () => {
  //getTemperatures/default
  const tempNow = axios.get("/api/temperatures");
  return tempNow;
};

// [
//   {
//     "id": 96,
//     "temperatureC": 25.7,
//     "measuredAt": "2025-03-27T18:10:01.655785Z"
//   },
//   {
//     "id": 95,
//     "temperatureC": 25.6,
//     "measuredAt": "2025-03-27T18:00:01.972963Z"
//   },
//   {
//     "id": 94,
//     "temperatureC": 25.7,
//     "measuredAt": "2025-03-27T17:50:01.578012Z"
//   },
//   {
//     "id": 93,
//     "temperatureC": 25.6,
//     "measuredAt": "2025-03-27T17:40:01.908211Z"
//   },
//   {
//     "id": 92,
//     "temperatureC": 25.6,
//     "measuredAt": "2025-03-27T17:30:02.223703Z"
//   },
//   {
//     "id": 91,
//     "temperatureC": 25.6,
//     "measuredAt": "2025-03-27T17:20:02.546469Z"
//   },
//   {
//     "id": 90,
//     "temperatureC": 25.4,
//     "measuredAt": "2025-03-27T17:10:01.832635Z"
//   },
//   {
//     "id": 89,
//     "temperatureC": 25.4,
//     "measuredAt": "2025-03-27T17:00:02.150987Z"
//   },
//   {
//     "id": 88,
//     "temperatureC": 25.3,
//     "measuredAt": "2025-03-27T16:50:02.474275Z"
//   }
// ]
