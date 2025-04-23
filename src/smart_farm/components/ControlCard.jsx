// import ToggleButton from "../../common_components/ToggleButton";
// import Card from "../../common_components/Card";

// function ControlCard({dataName = '', settings, onChangeSettings}) {
//   switch (dataName) {
//     case 'air_temp':
//       return <AirTempControlCard settings={settings} onChangeSettings={onChangeSettings} />;
//     case 'humidity':
//       return <HumidControlCard settings={settings} onChangeSettings={onChangeSettings} />;
//     case 'ldr':
//       return <LdrControlCard settings={settings} onChangeSettings={onChangeSettings} />;
//     case 'soil_moisture':
//       return <SoilMoistureControlCard settings={settings} onChangeSettings={onChangeSettings} />;
//     case 'motion':
//       return <MotionControlCard settings={settings} onChangeSettings={onChangeSettings} />
//     default:
//       return undefined;
//   }
// }

// function SensorControlCard({settings, onChangeSettings, fields, toggleKey}) {
//   const cardCss = "min-w-100 border border-gray-200";
//   const textCss = "font-bold text-2xl";
//   const numInputCss = "text-right w-22 ";
//   const containerCss = "flex items-center justify-between";
//   const groupCss = "flex gap-5 w-[60%] items-center justify-around";

//   return (
//     <Card className={cardCss}>
//       <div className={containerCss}>
//         <div className={groupCss}>
//           {
//             fields.map(({label, key, parser}, i) => <div key={i}>
//               <p>{label}</p>
//               <div className={textCss}>
//                 <input className={numInputCss} type="number" value={settings[key]} onChange={e => onChangeSettings({...settings, [key]: parser(e.target.value)})} />
//               </div>
//             </div>)
//           }
//         </div>
//         <ToggleButton value={settings[toggleKey]} onChange={v => onChangeSettings({...settings, [toggleKey]: v})}/>
//       </div>
//     </Card>
//   );
// }

// function AirTempControlCard({settings, onChangeSettings}) {
//   return (
//     <SensorControlCard
//       settings={settings}
//       onChangeSettings={onChangeSettings}
//       fields={[
//         {label: '최저 기온(℃)', key: 'min', parser: parseFloat},
//         {label: '최고 기온(℃)', key: 'max', parser: parseFloat}
//       ]}
//       toggleKey={"enable"}
//     />
//   );
// }

// function HumidControlCard({settings, onChangeSettings}) {
//   return (
//     <SensorControlCard
//       settings={settings}
//       onChangeSettings={onChangeSettings}
//       fields={[
//         {label: '최저 습도(%)', key: 'min', parser: parseFloat},
//         {label: '최고 습도(%)', key: 'max', parser: parseFloat}
//       ]}
//       toggleKey={"enable"}
//     />
//   );
// }

// function LdrControlCard({settings, onChangeSettings}) {
//   return (
//     <SensorControlCard
//       settings={settings}
//       onChangeSettings={onChangeSettings}
//       fields={[
//         {label: '최저 조도', key: 'min', parser: parseInt},
//         {label: '최고 조도', key: 'max', parser: parseInt}
//       ]}
//       toggleKey={"enable"}
//     />
//   );
// }

// function SoilMoistureControlCard({settings, onChangeSettings}) {
//   return (
//     <SensorControlCard
//       settings={settings}
//       onChangeSettings={onChangeSettings}
//       fields={[
//         {label: '최저 토양습도', key: 'min', parser: parseInt},
//         {label: '최고 토양습도', key: 'max', parser: parseInt}
//       ]}
//       toggleKey={"enable"}
//     />
//   );
// }

// function MotionControlCard({settings, onChangeSettings}) {
//   return (
//     <SensorControlCard
//       settings={settings}
//       onChangeSettings={onChangeSettings}
//       fields={[]}
//       toggleKey={"enable"}
//     />
//   );
// }

// export {
//   ControlCard
// }