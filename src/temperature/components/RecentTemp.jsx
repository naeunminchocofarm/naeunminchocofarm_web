import React, { useEffect, useState } from "react";
import { insertNowTemp } from "../apis/tempData";

const RecentTemp = () => {
  const [nowTemp, setNowTemp] = useState(0);

  useEffect(() => {
    insertNowTemp()
      .then((res) => {
        setNowTemp(res.data[0].temperatureC);
        console.log(res.data[0].temperatureC);
      })
      .catch((error) => console.log(error));
  }, [nowTemp]);

  return <>{nowTemp}&#176;</>;
};

export default RecentTemp;
