import React, { useEffect, useState } from "react";
import { insertNowTemp } from "../apis/tempData";

const RecentTemp = () => {
  const [nowTemp, setNowTemp] = useState(0);


  useEffect(() => {
    insertNowTemp()
      .then((res) => {
        setNowTemp(res.data[0].temperatureC);
        const intervalId = setInterval(insertNowTemp, 600000); // 10분마다 갱신
        return () => clearInterval(intervalId);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      {nowTemp}
    </>
  );
};

export default RecentTemp;
