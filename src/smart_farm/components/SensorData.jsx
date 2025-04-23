export default function SensorData({name, value}) {
  switch (name) {
    case 'air_temp':
      return <AirTempData value={value} />;
    case 'humidity':
      return <HumidityData value={value} />;
    case 'ldr':
      return <LdrData value={value} />;
    case 'soil_moisture':
      return <SoilMoistureData value={value} />;
    case 'motion':
      return <MotionData value={value} />;
    default:
      return;
  }
}

function AirTempData({value}) {
  return <span>{value}&#8451;</span>;
}

function HumidityData({value}) {
  return <span>{value}%</span>;
}

function LdrData({value}) {
  return <span>{value}</span>;
}

function SoilMoistureData({value}) {
  return <span>{value}</span>;
}

function MotionData({value}) {
  const shapeCss = "rounded-full w-[30%] aspect-square mx-auto";
  const colorCss = value === 'detected' ? 
    "bg-red-500" : 
    "bg-gray-200";

  return (
    <>
      <div className={`${shapeCss} ${colorCss}`}></div>
    </>
  );
}