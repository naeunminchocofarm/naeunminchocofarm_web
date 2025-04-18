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
  const lightCss = value === 'detected' ? "w-10 h-10 rounded-full bg-red-500 shadow-[0_0_20px_2px_rgba(239,68,68,0.8)] animate-pulse mx-auto"
    : "w-10 h-10 border mx-auto rounded-full border-gray-200 bg-gray-200";

  return(
    <div className={lightCss}></div>
  );
}