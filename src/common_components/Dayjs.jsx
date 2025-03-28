export default function Dayjs() {
  const day = dayjs(exdata.measuredAt).format("YYYY.MM.DD HH:mm:ss");
  return day;
}
