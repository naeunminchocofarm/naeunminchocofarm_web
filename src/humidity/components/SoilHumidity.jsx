export default function SoilHumidity({soilHumidity}) {
  //가상 토양 습도 데이터

  return(
    <>
      <div className="text-2xl font-bold text-center" >
        <p>현재 토양 습도</p>
        {soilHumidity}%
      </div>
    </>
  )

}