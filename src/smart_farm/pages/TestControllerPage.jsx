import {FarmActuatorMonitor, FarmSensorMonitor} from "../components/FarmMonitor";
import FarmController from "../components/FarmController";

export default function TestControllerPage() {
  const farmUuid = "0bbd8aa9-02af-4dc6-af0e-c1c5aaa45790";
  const titleCss = "text-4xl font-bold";
  const subTitleCss = "text-2xl font-bold mt-10";

  return (
    <>
      <h1 className={titleCss}>스마트팜 상세 페이지</h1>
      <h1 className={subTitleCss}>스마트팜 원격 제어</h1>
      <FarmController farmUuid={farmUuid} />
      <h1 className={subTitleCss}>스마트팜 원격 모니터링</h1>
      <FarmSensorMonitor farmUuid={farmUuid} />
      <FarmActuatorMonitor farmUuid={farmUuid} />
    </>
  );
}