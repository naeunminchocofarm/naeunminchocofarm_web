import React from 'react';
import dayjs from 'dayjs';

const CurrentDate = () => {
  const now = dayjs().format('YYYY-MM-DD HH:mm:ss');
  return (
    <>
      {now}
    </>
  );
};

export default CurrentDate;