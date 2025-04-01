import React, { useState, useEffect } from "react";
import dayjs from "dayjs";

const CurrentDate = () => {
  const [currentDate, setCurrentDate] = useState(
    dayjs().format("YYYY-MM-DD HH:mm:ss")
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(dayjs().format("YYYY-MM-DD HH:mm:ss"));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <p>{currentDate}</p>
    </div>
  );
};

export default CurrentDate;
