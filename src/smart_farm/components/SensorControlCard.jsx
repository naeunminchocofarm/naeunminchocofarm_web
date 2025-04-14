import ToggleButton from "../../common_components/ToggleButton";
import Card from "../../common_components/Card";

function SensorControlCard({settings, onChangeSettings, fields, toggleKey}) {
  const cardCss = "min-w-100 border border-gray-200";
  const textCss = "font-bold text-2xl";
  const numInputCss = "text-right w-22 ";
  const containerCss = "flex items-center justify-between";
  const groupCss = "flex gap-5 w-[60%] items-center justify-around";

  return (
    <Card className={cardCss}>
      <div className={containerCss}>
        <div className={groupCss}>
          {
            fields.map(({label, key, parser}, i) => <div key={i}>
              <p>{label}</p>
              <div className={textCss}>
                <input className={numInputCss} type="number" value={settings[key]} onChange={e => onChangeSettings({...settings, [key]: parser(e.target.value)})} />
              </div>
            </div>)
          }
        </div>
        <ToggleButton value={settings[toggleKey]} onChange={v => onChangeSettings({...settings, [toggleKey]: v})}/>
      </div>
    </Card>
  );
}

function AirTempControlCard({settings, onChangeSettings}) {
  return (
    <SensorControlCard
      settings={settings}
      onChangeSettings={onChangeSettings}
      fields={[
        {label: '최저 기온(℃)', key: 'min_air_temp', parser: parseFloat},
        {label: '최고 기온(℃)', key: 'max_air_temp', parser: parseFloat}
      ]}
      toggleKey={"enable_air_temp"}
    />
  );
}

function HumidControlCard({settings, onChangeSettings}) {
  return (
    <SensorControlCard
      settings={settings}
      onChangeSettings={onChangeSettings}
      fields={[
        {label: '최저 습도(%)', key: 'min_humidity', parser: parseFloat},
        {label: '최고 습도(%)', key: 'max_humidity', parser: parseFloat}
      ]}
      toggleKey={"enable_humidity"}
    />
  );
}

function LdrControlCard({settings, onChangeSettings}) {
  return (
    <SensorControlCard
      settings={settings}
      onChangeSettings={onChangeSettings}
      fields={[
        {label: '최저 조도', key: 'min_ldr', parser: parseInt},
        {label: '최고 조도', key: 'max_ldr', parser: parseInt}
      ]}
      toggleKey={"enable_ldr"}
    />
  );
}

function SoilMoistureControlCard({settings, onChangeSettings}) {
  return (
    <SensorControlCard
      settings={settings}
      onChangeSettings={onChangeSettings}
      fields={[
        {label: '최저 토양습도', key: 'min_soil_moisture', parser: parseInt},
        {label: '최고 토양습도', key: 'max_soil_moisture', parser: parseInt}
      ]}
      toggleKey={"enable_soil_moisture"}
    />
  );
}

export {
  AirTempControlCard,
  HumidControlCard,
  SoilMoistureControlCard,
  LdrControlCard
}